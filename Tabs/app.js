const tabs = document.querySelectorAll('.tab');

tabs.forEach(el => {
    el.addEventListener('click', function(){
        let activeBtn = document.querySelector('.tab._active')
        let card = document.querySelector('.tabs_card._active')

        if(activeBtn) {
            activeBtn.classList.remove('_active');
        }
        if(card){
            card.classList.remove('_active');
        } 
        

        let nextButActive = `#${el.getAttribute('data-tab')}`;
        let nextActiveInfo = document.querySelector(nextButActive)

        el.classList.add('_active')
        nextActiveInfo.classList.add('_active')
    })
})