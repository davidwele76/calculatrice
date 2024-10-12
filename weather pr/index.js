
const container=document.querySelector('.container');
const search=document.querySelector('.search-box button');
const weatherbx=document.querySelector('.weather-box');
const weatherdt=document.querySelector('.weather-detail');
const coderror=document.querySelector('.notfound');

search.addEventListener('click',()=>{
    const city=document.querySelector('.search-box input').value;
    const apiKey='af17df044e9ad39bd5d81180ed04a986';
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    if(city=='')
        return;
    fetch(url).then((response)=> response.json()).then(data =>{
        console.log(data)

        if(data.cod=='404'){
            container.style.height='450px';
            weatherbx.classList.remove('active');
            weatherdt.classList.remove('active');
            coderror.classList.add('active');
            return;
        }
            container.style.height='555px';
            weatherbx.classList.add('active');
            weatherdt.classList.add('active');
            coderror.classList.remove('active');
        

        const image=document.querySelector('.weather-box img');
        const tempr=document.querySelector('.weather-box .temp');
        const descr=document.querySelector('.weather-box .descri');
        const humd=document.querySelector('.weather-detail .humidity span');
        const wind=document.querySelector('.weather-detail .wind span');

        switch (data.weather[0].main){
            case 'Cloud':
                image.src='svg/cloud.png';
                break;
            case 'Clear':
                image.src='svg/clear.png';
                break;
            case 'Rain':
                image.src='svg/rain.png';
                break;
            case 'Snow':
                image.src='svg/snow.png';
                break;
            case 'Haze':
                 image.src='svg/mist.png';
                break;
            default:image.src='svg/cloud.png'
        }

        tempr.innerHTML=`${parseInt(data.main.temp)}°C`;
        descr.innerHTML=`${(data.weather[0].description)}`;
        humd.innerHTML=`${parseInt(data.main.humidity)}%`;
        wind.innerHTML=`${parseInt(data.wind.speed)}Km/s`;
    });
});