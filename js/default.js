const menuBtn = document.querySelector('.menu-btn');
const menuIcon = document.querySelector('.menu-icon');
const overlay = document.querySelector('.overlay');
const sidebar = document.querySelector('.sidebar');
// Navlinks 
const currentLocation = location.href;
const menuItem = document.querySelectorAll(".nav a");
const menuLength = menuItem.length;

sidebar.addEventListener('click', function (event) {
    event.stopPropagation();
})

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    menuBtn.classList.add('open');
    overlay.classList.add('show');
}

overlay.addEventListener('click', () => {
    overlay.classList.remove('show');
    menuBtn.classList.remove('open');
})

menuIcon.addEventListener('click', () => {
    overlay.classList.remove('show');
    menuBtn.classList.remove('open');
})

// Navlinks
for (var i = 0; i < menuLength; i++) {
    if (menuItem[i].href === currentLocation) {
        menuItem[i].className = "active";
    }
}