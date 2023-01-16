var i = 0,
    slideImage = ["https://livedemo00.template-help.com/opencart_62166_v1/image/cache/catalog/slide-1-1170x540.png",
        "https://livedemo00.template-help.com/opencart_62166_v1/image/cache/catalog/slide-2-1170x540.png",
        "https://livedemo00.template-help.com/opencart_62166_v1/image/cache/catalog/slide-3-1170x540.png"];
slideText = ['MANHATTAN LOFT TV CABINET', 'OSLO COUNTER HEIGHT, NATURAL', 'ALDRICH COFFEE TABLE - WALNUT AND GLASS']
slidePar = ['item #134-7878', 'item #134-1416', 'item #134-7889']
slidePrice = ['$445', '$788', '$878']
slideDesc = ['-20%', '-30%', '-40%']
var slideshow = function () {

    document.slidshow.src = slideImage[i];
    document.querySelector('.headerText h2').innerHTML = slideText[i]
    document.querySelector('.headerText .p').innerHTML = slidePar[i]
    document.querySelector('.headerText .price').innerHTML = slidePrice[i]
    document.querySelector('.disc').innerHTML = slideDesc[i]
    if (i < slideImage.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout("slideshow()", 5000)
}
slideshow()

const changeImage = (index) => {
    i = index;
    slideshow()
}

slideImage.map((item, index) => {
    return document.querySelector('.imagesCLick').innerHTML += `
        <div onclick='changeImage(${index})'>
            <img src="${item}" alt=''/>
        </div>
    `
})

//#########################################################################

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

//#########################################################################
