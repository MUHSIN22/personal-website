const navSlide = () => {
    const toggleIcon = document.querySelector(".toggle-icon"); 
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");

    toggleIcon.addEventListener('click',() => {
        nav.classList.toggle('nav-active');
        navLinks.forEach((link,index)=>{
            if(link.style.animation){
                link.style.animation = '' ;
            }else{
                link.style.animation = `navLinkFade 0.5s forwards ${index/7 + 0.3}s`;
            }
        })
    })
}
navSlide();