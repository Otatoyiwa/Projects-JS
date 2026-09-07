const order = {
  id: 'ORD-1001',
  customer: {
    name: 'Ava Stone',
    email: 'ava@example.com',
  },
  payment: {
    status: 'paid',
  },
  shipping: {
    status: 'shipped',
    estimatedDelivery: '2026-06-18',
  },
  items: [
    { name: 'Notebook', quantity: 2 },
    { name: 'Pen Set', quantity: 1 },
  ],
};


function isPaid(order){
    if(order.payment.status === 'paid') return true
} //should return true when payment.status is "paid".

function hasShipped(order){
    if(order.shipping.status === 'shipped') return true
} //should return true when shipping.status is "shipped".

function getDeliveryMessage(order){
    return (order.shipping.status === 'shipped')? `It's Shipped, ${order.shipping.estimatedDelivery}` : 'Order has not shipped yet.'
} //should return a shipping message and include estimatedDelivery when the order has shipped.

function needsAttention(order){
    return ((order.payment.status === 'unpaid') || (order.shipping.status !== 'shipped'))? true : false
} //should return true when the order is unpaid or has not shipped.

function createOrderSummary(order){
    let paid = isPaid(order)
    let shipped = hasShipped(order)
    let deliveryMessage = getDeliveryMessage(order)
    let itemCount = order.items.reduce((el, num)=> el.quantity + num.quantity)
    return JSON.stringify({
        id: order.id, customerName: order.customer.name, paid, shipped, itemCount, deliveryMessage
    }) // just to see all info used method
} //should return id, customerName, paid, shipped, itemCount, deliveryMessage, and needsAttention.



console.log(createOrderSummary(order));
console.log(isPaid(order));
console.log(hasShipped(order));

const pendingOrder = {
  ...order,
  payment: { status: 'unpaid' },
  shipping: { status: 'processing', estimatedDelivery: '2026-06-18' },
};

console.log(needsAttention(pendingOrder));
console.log(getDeliveryMessage(pendingOrder));