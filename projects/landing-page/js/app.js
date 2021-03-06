/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll("section")
const newFrag = document.createDocumentFragment()

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function createHtmlItem(name, id){
    const HtmlItem = `<a class="menu__link" data-id="${id}">${name}</a>`;
    return HtmlItem;
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNav(){
    
    for (let i=0; i<sections.length; i++){
        const newItem = document.createElement('li')
        const name = sections[i].getAttribute('data-nav')
        const id = sections[i].getAttribute('id')
        newItem.innerHTML = createHtmlItem(name, id)
        newFrag.appendChild(newItem)
    }
    const navbarList = document.getElementById("navbar__list")
    navbarList.appendChild(newFrag)
}

// Add class 'active' to section when near top of viewport
function makeActive(){
    for (let i=0; i<sections.length; i++){
        const view = sections[i].getBoundingClientRect()
        if (view.top >= 0 && view.bottom >= 100){
            sections[i].classList.add("your-active-class")
        }
        else{
            sections[i].classList.remove("your-active-class")
        }
    }
}

// Scroll to anchor ID using scrollTO event
function scrollTo(event){
    if(event.target.nodeName === 'A'){
        const id = event.target.getAttribute('data-id')
        const section = document.getElementById(id)
        section.scrollIntoView({
            behavior: "smooth"
        })
    }
}

/**
 * End Main Functions
 * Begin Events
 * 
*/
document.addEventListener('scroll', function(){
    makeActive()
})
const navBarList = document.getElementById('navbar__list')
navBarList.addEventListener('click', function(event){
    scrollTo(event)
})

// Build menu
buildNav()

// Scroll to section on link click

// Set sections as active


