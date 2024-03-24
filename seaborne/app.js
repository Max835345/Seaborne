let menuButton = document.querySelector('.burger');
let menu = document.querySelector('.phone_item_list');
let placeOfResalt = document.querySelector('.end_cost');
let resalt = document.querySelector('.scor_btn');
let aroowB = document.querySelector('.img_arrow_b');
let aroowF = document.querySelector('.img_arrow_f');
let points = document.querySelectorAll('.count_slide');
let count = 0;

menuButton.addEventListener('click', function () {
    menuButton.classList.toggle('burger-active');
    menu.classList.toggle('phone_item_list_active');
});

const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown =>{
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', () =>{
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });

    options.forEach(option =>{
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');
            options.forEach(option =>{
                option.classList.remove('active');
            });
            option.classList.add('active')
        });
    });
});

resalt.addEventListener('click', () =>{
    console.log("Hghjuhgfrtg");
    count++
    placeOfResalt.innerHTML=count
})



ymaps.ready(init);

function init() {
    myMap = new ymaps.Map("map", {
        center: [43.096953, 131.864579,361],
        zoom: 17,
    }, {
    }),
    myPlacemark = new ymaps.Placemark([43.096953, 131.864579,361],{
        balloonContentHeader: "",
        balloonContentBody: "",
        balloonContentFooter: "",
        hintContent: "Мы тут"
    });
    
myMap.geoObjects.add(myPlacemark);
    
}