
const picker = datepicker('#enter', {
    onSelect: (instance, date) =>{
        text = date
    }
});
let text = null;
const btn = document.querySelector('#btn');
const form = document.querySelector('#perform')
const date = luxon.DateTime;


btn.addEventListener('click', () => {
    if(!text){
        form.textContent = 'please select ur birth date';
        return
    }
    let start = date.fromJSDate(text)
    let end = date.now();
    if(!start.isValid){
        form.textContent = 'Valid date';
        return
    }
    let dif = end.diff(start, ['years', 'months', 'days']).toObject();
    form.textContent = `You are ${dif.years} year and ${dif.months} month old`
    // exit  null надо поменять старт невалидное значение оно пустое
    //let dif = date.valueOf() - (new Date(text.value()).getMilliseconds());
    //form.textContent = new Date(bb).getFullYear() new Date(bb).getMonth()
})
//picker.value
