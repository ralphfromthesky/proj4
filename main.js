const arrow = document.getElementById('arrow2')
const mainHeader = document.getElementById('mainHeader')

const slideDown = () => {
    mainHeader.classList.toggle('slide-down')
}

arrow.addEventListener('click', slideDown);

const arrow3 = document.getElementById('arrow3');
const sidebars  = document.getElementById('sidebars')

const slideToRight = () => {
    sidebars.classList.toggle('slide-to-right');
}
arrow3.addEventListener('click', slideToRight)
