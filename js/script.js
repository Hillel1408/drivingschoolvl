const swiper = new Swiper('.reviews__swiper', {
    direction: 'horizontal',
    navigation: {
        nextEl: '.reviews__swiper-button-next',
        prevEl: '.reviews__swiper-button-prev',
    },
});

const swiper2 = new Swiper('.video-reviews__swiper', {
    direction: 'horizontal',
    slidesPerView: 'auto',
});

new CircleType(document.getElementById('demo3'));
new CircleType(document.getElementById('demo4'));

const play = document.querySelectorAll('.play');

play.forEach((item) => {
    item.addEventListener('click', function () {
        this.parentElement.childNodes[1].src += '&autoplay=1';
        setTimeout(() => {
            this.parentElement.childNodes[3].style.display = 'none';
            this.style.display = 'none';
        }, 700);
    });
});
