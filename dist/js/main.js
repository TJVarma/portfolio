// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');
const slides=document.querySelectorAll('.slides');

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    // Set Menu State
    showMenu = false;
  }
}
var index = 0;
change();
function change() {

      //Collect all images with class 'slides'
        var x = document.getElementsByClassName('slides');

        //Set all the images display to 'none' (invisible)
        for(var i = 0; i < x.length; i++) { 
            x[i].style.display = "none"; 
        }

        //Increment index variable
        index++;

        //Set index to 1 if it's greater than the amount of images
        if(index > x.length) { 
            index = 1; 
        }

        //set image display to 'block' (visible)
        x[index - 1].style.display = "block";

        //set loop to change image every 3000 milliseconds (3 seconds)
        setTimeout(change, 3000);
    }