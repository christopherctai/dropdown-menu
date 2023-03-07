const menuTitle = document.querySelector('.menu-title');  

menuTitle.addEventListener('click', () => {
    changeMenu();
});

const changeMenu = () => {
    let menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach((item) => {
        item.classList.toggle('hidden');
        item.classList.toggle('active');
    })
}