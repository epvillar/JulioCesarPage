/*49.35 esto cambia el sytle con el scroll*/
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
})

/*1.08 este es el toggle de faqs - show/hide p---- */
const faqs = document.querySelectorAll('.faq');
    faqs.forEach(faq => {
        faq.addEventListener('click', () => {
            faq.classList.toggle('open');

            /* change icon - esto no me funciono
        const icon = faq.querySelector('.faq__icon ion-icon');
        if(icon.className === "add") {
            icon.className = "close";         
        } else {
            icon.className = "add";
        }*/
    })
})

/** 1.42 - media query 1024--show/hide nav menu**/
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

/*** Close nav menu ***/
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}
closeBtn.addEventListener('click', closeNav)










