const FixTop = document.querySelector('.FixTop')
window.onscroll = function () {
    if (window.pageYOffset >= 400) {
        FixTop.style.display = 'block';
    } else {
        FixTop.style.display = 'none';
    }
}

FixTop.onclick = function () {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth"
    });
}

//############################################################

const barList = document.querySelector('.barList')
const stuckMenu = document.querySelector('.stuck-menu')
const navBarList = document.querySelector('.stuck-menu .navBarList i')

barList.addEventListener('click', function () {
    stuckMenu.style.left = '0'
})
navBarList.addEventListener('click', function () {
    stuckMenu.style.left = '-100%'
})

//#########################################################################

var x = 0;
const spanCount = document.querySelector('.section7 .Quantity p span')
const spanCountPrev = document.querySelector('.section7 .Quantity p .prev')
const spanCountNext = document.querySelector('.section7 .Quantity p .next')

spanCount.innerHTML = x;


var n = 0;

function countNext() {
    n = n + 1;

    spanCount.innerHTML = n;

}
function countPrev() {
    if (n == 0) {
        n
    } else {
        n = n - 1;
    }

    spanCount.innerHTML = n;

}


//###########################################################3

var S = ['Please Select', 'sm', 'md', 'lg', 'xl']
var sizeIndex = 0
var menuList = document.querySelector('.menuList')
var sizeMenu = document.querySelector('.sizeMenu button')
var sizeMenuSpan = document.querySelector('.sizeMenu button span')
var show = false
sizeMenu.addEventListener('click', function () {
    if (show == false) {
        menuList.classList.add('sizeMenu1')
        show = true
    } else {
        menuList.classList.remove('sizeMenu1')
        show = false
    }
})
sizeMenuSpan.innerHTML = S[sizeIndex]
function changeSize(size) {
    sizeMenuSpan.innerHTML = S[size]
}
S.map((item, index) => {
    return menuList.innerHTML += `
        <p onclick='changeSize(${index})'>
            ${item}
        </p>
    `
})

