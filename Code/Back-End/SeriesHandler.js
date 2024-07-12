// SeriesHandler.js

document.addEventListener('DOMContentLoaded', function() {
    const gameSections = document.querySelectorAll('.game-section');

    gameSections.forEach(section => {
        const img = section.querySelector('img');
        const defaultSrc = section.getAttribute('data-default');
        const hoverSrc = section.getAttribute('data-hover');
        const link = section.getAttribute('data-link');

        section.addEventListener('mouseover', function() {
            img.src = hoverSrc;
        });

        section.addEventListener('mouseout', function() {
            img.src = defaultSrc;
        });

        section.addEventListener('click', function() {
            window.location.href = link;
        });
    });
});