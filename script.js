const menuTitles = document.querySelectorAll('.menu-title');  

menuTitles.forEach((menuTitle) => {
    menuTitle.addEventListener('click', () => {
        changeMenu(menuTitle);
    });
})

const changeMenu = (menuTitle) => {
    let dropdownContents = menuTitle.nextElementSibling;
    dropdownContents.classList.toggle('active');
    let dropdownTrigger = menuTitle.lastElementChild;
    dropdownTrigger.textContent === '+' ? dropdownTrigger.textContent = '-' : dropdownTrigger.textContent = '+';
}