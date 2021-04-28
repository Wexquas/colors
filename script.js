let burger = document.getElementById('burgerIcon');
let mobileMenu = document.querySelector('.mobileMenu');
    
let switchBurger = function() {
    mobileMenu.classList.toggle("show");
    if (burger.getAttribute('src') == '/img/Mobile_menu_icon_close.png') {
        burger.setAttribute('src', '/img/Mobile_menu_icon.png');
      } else {
        burger.setAttribute('src', '/img/Mobile_menu_icon_close.png'); 
      }
    };
    
burger.onclick = switchBurger;