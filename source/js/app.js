// full-screen menu events
let hamburger = document.querySelector('.hamburger'),
    fullScreenMenu = document.querySelector('.fullScreen-menu'),
    fullScreenMenuClose = document.querySelector('.fullScreen-menu__img-cross');




hamburger.addEventListener('click', () => {
    fullScreenMenu.style.display = 'block';
});

fullScreenMenuClose.addEventListener('click', () => {
    fullScreenMenu.style.display = 'none';
});








// yandex map

$(function () {
    ymaps.ready(init);
    var myMap;

    function init(){
        myMap = new ymaps.Map("map", {
            center: [59.91817154482064,30.30557799999997],
            zoom: 12,
            controls: []
        });

        var myPlacemark = new ymaps.Placemark([59.91817154482064,30.30557799999997], {}, {
            iconLayout: 'default#image',
            iconImageHref: '../img/icons/map_marker.svg',
            iconImageSize: [30, 42],
            iconImageOffset: [-3, -42]
        });

        myMap.geoObjects.add(myPlacemark);
    }
});