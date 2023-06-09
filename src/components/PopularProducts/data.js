import image_1 from "assets/images/PopularProducts/product_1.png";
import image_2 from "assets/images/PopularProducts/product_2.png";
import image_3 from "assets/images/PopularProducts/product_3.png";
import image_4 from "assets/images/PopularProducts/product_4.png";

const popularProductData = [
    {
        id: 0,
        inCash: true,
        image: image_4,
        title: "Дверной Замок Golden Soft для отеля",
        main_price: "33 000₽",
        oldPrice: "37 000₽",
    },
    {
        id: 1,
        inCash: false,
        image: image_3,
        title: "Вариативный замок Golden Soft для отеля",
        main_price: "7 000₽",
        oldPrice: "8 000₽",
    },
    {
        id: 2,
        inCash: true,
        image: image_2,
        title: "Дверной Замок Golden Soft для офиса",
        main_price: "33 000₽",
        oldPrice: "39 000₽",
    },
    {
        id: 3,
        inCash: true,
        image: image_1,
        title: "Дверной Замок Golden Soft для офиса",
        main_price: "9 000₽",
        oldPrice: "12 000₽",
    },
    {
        id: 4,
        inCash: true,
        image: image_1,
        title: "Дверной Замок Golden Soft для отеля",
        main_price: "33 000₽",
        oldPrice: "37 000₽",
    },
    {
        id: 5,
        inCash: true,
        image: image_2,
        title: "Дверной Замок Golden Soft для отеля",
        main_price: "33 000₽",
        oldPrice: "37 000₽",
    },
];

const breakpoints = {
    300: {
        slidesPerView: 1,
    },
    400: {
        slidesPerView: 2,
    },
    620: {
        slidesPerView: 3,
    },
    770: {
        slidesPerView: 4,
    },
};

export { popularProductData, breakpoints };
