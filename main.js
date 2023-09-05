const arrow = document.getElementById('arrow2')
const mainHeader = document.getElementById('mainHeader')

const slideDown = () => {
    mainHeader.classList.toggle('slide-down')
}

arrow.addEventListener('click', slideDown);

const arrow3 = document.getElementById('arrow3');
const X = document.getElementById('X')
const sidebars = document.getElementById('sidebars')

const slideToRight = () => {
    sidebars.classList.toggle('slide-to-right');
    if (arrow3.style.display === 'none') {
        arrow3.style.display = 'block';
        X.style.display = 'none';
    } else {
        X.style.display = 'block';
        arrow3.style.display = 'none';
    }
}



arrow3.addEventListener('click', slideToRight)
X.addEventListener('click', slideToRight)
