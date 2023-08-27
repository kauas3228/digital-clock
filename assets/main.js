const hour = document.getElementById('hour')
const minutes = document.getElementById('minutes')
const second = document.getElementById('seconds')

const clock = setInterval(() => {
    let datetoday = new Date();
    let hr = datetoday.getHours();
    let min = datetoday.getMinutes();
    let s = datetoday.getSeconds();

    if(hr < 10){
        hr = '0' + hr
    }
    if(min < 10){
        min = '0' + min
    }
    if(s < 10){
        s = '0' + s
    }

    hour.textContent = hr;
    minutes.textContent = min;
    second.textContent = s; 
    
});