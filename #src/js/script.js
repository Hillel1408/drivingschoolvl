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

const player = new Plyr('#player');
