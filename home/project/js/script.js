var catalogBtns = document.querySelector('.catalog-list');
var catalogItems = document.querySelector('.painting-cards');


function CatalogItem(imgDesk, imgBig, imgSmall, imgPhone, author, name, info, price) {
    this.imgDesk = imgDesk;
    this.imgBig = imgBig;
    this.imgSmall = imgSmall;
    this.imgPhone = imgPhone;
    this.author = author;
    this.name = name;
    this.info = info;
    this.price = price;
}

var amour = new CatalogItem('img/france/france_1_desk.jpg', 'img/france/france_1_big.jpg', 'img/france/france_1_small.jpg', 'img/france/france_1_phone.jpg', 'Марсель Руссо', 'Охота Амура', 'Холст, масло (50х80)', '14 500 руб');
var femme = new CatalogItem('img/france/france_2_desk.jpg', 'img/france/france_2_big.jpg', 'img/france/france_2_small.jpg', 'img/france/france_2_phone.jpg', 'Анри Селин', 'Дама с собачкой', 'Акрил, бумага (50х80)', '16 500 руб');
var procedure = new CatalogItem('img/france/france_3_desk.jpg', 'img/france/france_3_big.jpg', 'img/france/france_3_small.jpg', 'img/france/france_3_phone.jpg', 'Франсуа Дюпон', 'Процедура', 'Цветная литография (40х60)', '20 000 руб');
var rose = new CatalogItem('img/france/france_4_desk.jpg', 'img/france/france_4_big.jpg', 'img/france/france_4_small.jpg', 'img/france/france_4_phone.jpg', 'Луи Детуш', 'Роза', 'Бумага, акрил (50х80)' , '12 000 руб');
var birds = new CatalogItem('img/france/france_5_desk.jpg', 'img/france/france_5_big.jpg', 'img/france/france_5_small.jpg', 'img/france/france_5_phone.jpg', 'Франсуа Дюпон', 'Птичья трапеза', 'Цветная литография (40х60)', '22 500 руб');
var fish = new CatalogItem('img/france/france_6_desk.jpg', 'img/france/france_6_big.jpg', 'img/france/france_6_small.jpg', 'img/france/france_6_phone.jpg', 'Пьер Моранж', 'Пейзаж с рыбой', 'Цветная литография (40х60)', '20 000 руб');

var city = new CatalogItem('img/germany/germany_1_desk.jpg', 'img/germany/germany_1_big.jpg', 'img/germany/germany_1_small.jpg', 'img/germany/germany_1_phone.jpg', 'Курт Вернер', 'Над городом', 'Цветная литография (40х60)', '16 000 руб');
var chicks = new CatalogItem('img/germany/germany_2_desk.jpg', 'img/germany/germany_2_big.jpg', 'img/germany/germany_2_small.jpg', 'img/germany/germany_2_phone.jpg', 'Макс Рихтер', 'Птенцы', 'Холст, масло (50х80)', '14 500 руб');
var leaves = new CatalogItem('img/germany/germany_3_desk.jpg', 'img/germany/germany_3_big.jpg', 'img/germany/germany_3_small.jpg', 'img/germany/germany_3_phone.jpg', 'Мартин Майер', 'Среди листьев', 'Цветная литография (40х60)' , '20 000 руб');
var bright = new CatalogItem('img/germany/germany_4_desk.jpg', 'img/germany/germany_4_big.jpg', 'img/germany/germany_4_small.jpg', 'img/germany/germany_4_phone.jpg', 'Герман Беккер', 'Яркая птица', 'Цветная литография (40х60)', '13 000 руб');
var woodpecker = new CatalogItem('img/germany/germany_5_desk.jpg', 'img/germany/germany_5_big.jpg', 'img/germany/germany_5_small.jpg', 'img/germany/germany_5_phone.jpg', 'Вульф Бауэр', 'Дятлы', 'Бумага, акрил (50х80)', '20 000 руб');
var bigWaters = new CatalogItem('img/germany/germany_6_desk.jpg', 'img/germany/germany_6_big.jpg', 'img/germany/germany_6_small.jpg', 'img/germany/germany_6_phone.jpg', 'Вальтер Хартманн', 'Большие воды', 'Бумага, акрил (50х80)', '23 000 руб');

var wild = new CatalogItem('img/england/england_1_desk.jpg', 'img/england/england_1_big.jpg', 'img/england/england_1_small.jpg', 'img/england/england_1_phone.jpg', 'Пол Смит', 'Дикий зверь', 'Акварель, бумага (50х80)', '19 500 руб');
var shore = new CatalogItem('img/england/england_2_desk.jpg', 'img/england/england_2_big.jpg', 'img/england/england_2_small.jpg', 'img/england/england_2_phone.jpg', 'Джон Уайт', 'Скалистый берег', 'Цветная литография (40х60)', '17 500 руб');
var mountains = new CatalogItem('img/england/england_3_desk.jpg', 'img/england/england_3_big.jpg', 'img/england/england_3_small.jpg', 'img/england/england_3_phone.jpg', 'Джим Уотсон', 'Река и горы', 'Акварель, бумага (50х80)', '20 500 руб');
var parrot = new CatalogItem('img/england/england_4_desk.jpg', 'img/england/england_4_big.jpg', 'img/england/england_4_small.jpg', 'img/england/england_4_phone.jpg', 'Юджин Зиллион', 'Белый попугай', 'Цветная литография (40х60)', '15 500 руб');
var nightFish = new CatalogItem('img/england/england_5_desk.jpg', 'img/england/england_5_big.jpg', 'img/england/england_5_small.jpg', 'img/england/england_5_phone.jpg', 'Эрик Гиллман', 'Ночная рыба', 'Бумага, акрил (50х80)', '12 500 руб');
var cat = new CatalogItem('img/england/england_6_desk.jpg', 'img/england/england_6_big.jpg', 'img/england/england_6_small.jpg', 'img/england/england_6_phone.jpg', 'Альфред Барр', 'Рыжий кот', 'Цветная литография (40х60)', '21 000 руб');

var france = [amour, femme, procedure, rose, birds, fish];
var germany = [city, chicks, leaves, bright, woodpecker, bigWaters];
var england = [wild, shore, mountains, parrot, nightFish, cat];

var country = [france, germany, england]



function loadCatalog(country) {
    var htmlTags = '';
    for (var item = 0; item < country.length; item++) {
        htmlTags += `
        <div class="painting-card">
            <picture>
                <source media="(max-width: 400px)" srcset="${country[item].imgPhone}">
                <source media="(max-width: 700px)" srcset="${country[item].imgSmall}">
                <source media="(max-width: 768px)" srcset="${country[item].imgBig}">
                <img src="${country[item].imgDesk}" alt="">
            </picture>
            <span class="author">${country[item].author}</span>
            <h3 class="painting-name">${country[item].name}</h3>
            <span class="painting-info">${country[item].info} </span>
            <p class="painting-price">${country[item].price}</p>
            <button>В корзину</button>
        </div>
        `
    }
    catalogItems.innerHTML = htmlTags;
}

loadCatalog(france);
