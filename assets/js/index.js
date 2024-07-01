document.addEventListener("DOMContentLoaded", function () {
    const toggler = document.querySelector('.navbar-toggler');
    const menu = document.querySelector('.menu');

    toggler.addEventListener('click', function () {
        menu.classList.toggle('collapsed');
        document.body.classList.toggle('menu-active');
    });

    // **Accordion functionality**
    const accordion = document.querySelector('.accordion');

    accordion.addEventListener('click', (event) => {
        const clickedItem = event.target.closest('.accordion-item');
        if (clickedItem) {
            const activeItem = document.querySelector('.accordion-item.active');
            if (activeItem && activeItem !== clickedItem) {
                activeItem.classList.remove('active');
            }
            clickedItem.classList.toggle('active');
        }
    });

    document.getElementById('loadmore').addEventListener('click', function () {
        let hiddenItems = document.querySelectorAll('.customer-reviews .review-item:nth-child(n+3)');
        hiddenItems.forEach(function (item) {
            item.classList.add('show');
        });
        this.style.display = 'none'; // Hide the Load More button after clicking
    });
    document.querySelectorAll('.links-wrapper .important-links').forEach(function (link) {
        link.addEventListener('click', function () {
            link.classList.toggle('active');
        });
    });
});