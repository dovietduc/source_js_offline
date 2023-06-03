const btnNext = document.querySelector('.next');
const btnPrev = document.querySelector('.prev');
const divAllSlider = document.querySelectorAll('.fade');
const dotAll = document.querySelectorAll('.dot');
const dotWrapper = document.querySelector('.wrapper_dot');


let index = 0;

function sliderProcessByIndex(index) {
    // ẩn tất cả các ảnh
    divAllSlider.forEach(function (itemImage) {
        itemImage.classList.add('mySlides');
    });
    // hiện ảnh tiếp theo

    divAllSlider[index].classList.remove('mySlides');

    // reset dot
    dotAll.forEach(function (elementDot) {
        elementDot.classList.remove('active');
    })
    dotAll[index].classList.add('active');
}

function handleNextButton() {

    index = index + 1;
    if (index === divAllSlider.length) {
        index = 0;
    }
    sliderProcessByIndex(index);
}

function handlePrevButton() {
    index = index - 1;
    if (index < 0) {
        index = divAllSlider.length - 1;
    }
    sliderProcessByIndex(index);
}

function handleDotClick(event) {
    const clicked = event.target;
    if (clicked.classList.contains('dot')) {
        // tim ra inde
        const index = clicked.dataset.index;
        sliderProcessByIndex(index);
    }
}

btnNext.addEventListener("click", handleNextButton);
btnPrev.addEventListener("click", handlePrevButton);
dotWrapper.addEventListener("click", handleDotClick);