document.querySelector('.burger').addEventListener('click', () => {
    document.querySelector('.menu').classList.toggle('menu-active');
    document.querySelectorAll('.line').forEach(line => {
        line.classList.toggle('active');
    });
});
