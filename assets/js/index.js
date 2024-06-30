document.addEventListener("DOMContentLoaded", function () {
    const toggler = document.querySelector('.navbar-toggler');
    const menu = document.querySelector('.menu');

    toggler.addEventListener('click', function () {
        menu.classList.toggle('collapsed');
        document.body.classList.toggle('menu-active');
    });

    // **Accordion functionality**
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        item.addEventListener('click', () => {
            const activeItem = document.querySelector('.accordion-item.active');

            if (activeItem && activeItem !== item) {
                activeItem.classList.remove('active');
            }

            item.classList.toggle('active');
        });
    });

    document.getElementById('loadmore').addEventListener('click', function () {
        let hiddenItems = document.querySelectorAll('.customer-reviews .review-item:nth-child(n+3)');
        hiddenItems.forEach(function (item) {
            item.style.display = 'block';
            item.style.width = '100%';
        });
        this.style.display = 'none'; // Hide the Load More button after clicking
    });
    document.querySelectorAll('.links-wrapper .important-links').forEach(function (link) {
        link.addEventListener('click', function () {
            link.classList.toggle('active');
        });
    });
});