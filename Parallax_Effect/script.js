const background = document.getElementById('background');
const moon = document.getElementById('moon');
const text = document.getElementById('text');
const light_soil = document.getElementById('light_soil');
const dark_soil = document.getElementById('dark_soil');
const up_and_down = document.getElementById('up_and_down');

window.addEventListener('scroll', ()=>{
    const scrollY = window.scrollY;

    if(scrollY< 600){
        up_and_down.style.opacity= '0'
    }
    else{
        up_and_down.style.opacity= '1'
    }

    text.style.top=`${scrollY * -0.4}px`
    moon.style.top=`${scrollY * -0.2}px`
    moon.style.left=`${scrollY * -0.2}px`
    light_soil.style.top=`${scrollY * 0.2}px`
    dark_soil.style.top=`${scrollY * 0.1}px`
 
})


window.addEventListener('mousemove', (e)=>{
    const w = window.innerWidth / 2 ;
    const h = window.innerHeight / 2 ;

    const middleX = e.clientX - w ;
    const middleY = e.clientY - h ;

    moon.style.transform = `translateX(${middleX * 0.03}px) translateY(${middleY * 0.03}px) scale(1.2)`;
    background.style.transform = `translateX(${middleX * 0.09}px) translateY(${middleY * 0.09}px) scale(1.2)`;
    light_soil.style.transform = `translateX(${middleX * 0.05}px) translateY(${middleY * 0.04}px) scale(1.2)`;
    dark_soil.style.transform = `translateX(${middleX * 0.08}px) translateY(${middleY * 0.01}px) scale(1.2)`;
    

})
