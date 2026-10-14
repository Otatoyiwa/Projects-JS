const num = document.querySelector('.count')
const text = document.querySelector('input')

text.addEventListener('input', function(){
    let press = document.querySelector('.typing')
    num.textContent = text.value.length
    
    if( text.value.length === 250){
        press.classList.add('_active');
    }else{
        press.classList.remove('_active')
    }
    
})
