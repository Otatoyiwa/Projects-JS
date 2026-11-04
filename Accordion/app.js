const buttons = document.querySelectorAll('button');


buttons.forEach(btn => {
    btn.addEventListener('click', function(){
        let activeBtn = document.querySelector('button._active');
        let activeItem = document.querySelector('.item._active');

        if(activeBtn){
            activeBtn.classList.remove('_active');
        }
        if(activeItem){
            activeItem.classList.remove('_active')
        }

        let nextBtn = `#${btn.getAttribute('data-tab')}`
        let nextItem = document.querySelector(nextBtn);

        btn.classList.add('_active')
        nextItem.classList.add('_active')
    })
})