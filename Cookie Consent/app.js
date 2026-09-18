const btn = document.querySelector('button');
const cookie = document.querySelector('.cookie')
if(JSON.parse(window.localStorage.getItem('x'))){
    cookie.classList.add('_active')
}
btn.addEventListener('click', function(){
    let flag = false;
    if(!flag){
        cookie.classList.add('_active');
        flag = true
        window.localStorage.setItem('x', JSON.stringify(flag))

    }
})