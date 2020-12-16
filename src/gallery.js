import './gallery-page.scss';
import 'bootstrap-4-grid'

// import { changeLink } from './scripts/links'
import { choiceScript } from './scripts/choices'
import { privacy } from './scripts/privacy'
import { scrolling } from './scripts/scrolling';

import { mobilemenu } from './scripts/mobilemenu';
// import { galleryScript } from './scripts/gallery'
// import { gallery2 , gallery2Carousel } from './scripts/gallery2'

// import  { fetchImages } from './scripts/fetchImages'
import { localGallery , localPrivacy } from './scripts/locals'
import { picturesFoo } from './scripts/pictures'
const menuFixedIcon = document.querySelector(".menu-fixed-icon");
const menuFixedNav = document.querySelector(".menu-fixed-nav-2")
const preloader = document.querySelector(".preloader")
const over = document.querySelector(".over")
const footerlogo = document.querySelector('.footer__logo')
const choices = document.querySelectorAll(".gallery-choice")



window.addEventListener('load', function () {
    func()
    
    preloader.classList.add('go')
    over.classList.add('go')
    footerlogo.classList.remove("d-none")
        // jumps()
        scrolling()
        mobilemenu()
        privacy()        
        localPrivacy()
        choiceScript()
        // picturesFoo()
        // fetchImages()
        menuFixedIcon.addEventListener("click",()=>{
        menuFixedNav.classList.toggle("show-menu-fixed-nav")
        
    }) 

 })

 
const menuFixed = document.querySelector(".menu-fixed")
menuFixed.classList.add("menu-fixed--scrolled")
function func(){
    choices.forEach(ch=>{
        ch.addEventListener('click',()=>{
            
            choices.forEach(c=>{
                c.classList.remove('active')
            })
            ch.classList.add('active')           
        })
    })
}