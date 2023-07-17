const btns = document.querySelectorAll('.open-modal');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');

btns.length > 0 &&
    btns.forEach((btn) => {
        btn.addEventListener('click', () => {
            popup.classList.toggle('open');
            document.body.classList.toggle('lock');
        });
    });

popupClose &&
    popupClose.addEventListener('click', () => {
        popup.classList.toggle('open');
        document.body.classList.toggle('lock');
    });

const video = document.querySelector('.video');
const videoClose = document.querySelector('.video__close');
const videoClose2 = document.querySelector('.video__close-2');
const a = video.childNodes[5];

video.addEventListener('click', function () {
    console.log(this);
    a.muted = !a.muted;
    a.currentTime = 0;
    this.classList.toggle('active');
});

videoClose2.addEventListener('click', function () {
    this.classList.toggle('active');
});

videoClose.addEventListener('click', function () {
    video.style.display = 'none';
    a.muted = !a.muted;
});
