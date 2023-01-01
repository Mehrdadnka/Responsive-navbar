const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click', () => {
        //Toggle NAV
        nav.classList.toggle('nav-active');
        //Animati Links
        navLinks.forEach((link, index)=>{
            if(link.getElementsByClassName.animation) 
            {
                link.getElementsByClassName.animation = '';
            }
            else
            {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle('toggle');
    });
    
}

navSlide();