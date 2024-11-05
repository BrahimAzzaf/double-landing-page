const containerEl = document.querySelector('.container');
const leftEl = document.querySelector('.left');
const rightEl = document.querySelector('.right');

leftEl.addEventListener('mouseenter', function () {
    containerEl.classList.add('active-left');
});
leftEl.addEventListener('mouseleave', function () {
    containerEl.classList.remove('active-left');
});

rightEl.addEventListener('mouseenter', function () {
    containerEl.classList.add('active-right');
});
rightEl.addEventListener('mouseleave', function () {
    containerEl.classList.remove('active-right');
});
