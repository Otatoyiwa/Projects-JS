const user = {
  id: 42,
  firstName: 'Ava',
  lastName: 'Stone',
  email: 'ava@example.com',
  phone: null,
  address: {
    city: 'London',
    country: 'UK',
  },
  account: {
    status: 'active',
    plan: 'pro',
  },
};



 function getDisplayName(user){
    return `${user.firstName} ${user.lastName}`
} //should return the first and last name as one string.

 function getLocation(user){
    return `${user.address.city}, ${user.address.country}`
} //should return "City, Country".

 function getContactSummary(user){
    return {user: user.email, phone: user.phone = null}
} //should return an object with email and phone.

 function isAccountActive(user){
    return (user.account.status === 'active')? true : false
} //should return true when account.status is "active".

 function createProfileSummary(user){
    let displayName, location, contact, active;
    displayName = getDisplayName(user);
    location = getLocation(user);
    contact = getContactSummary(user);
    active = isAccountActive(user);

    return {
        displayName,
        location,
        contact,
        active,
        plan: user.account.plan
    }
} //should return displayName, location, contact, active, and plan.


console.log(createProfileSummary(user));
console.log(getDisplayName(user));
console.log(isAccountActive(user));
console.log(getContactSummary(user));
