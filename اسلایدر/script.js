// Elements
const nextBtn = document.querySelector(".js-next-btn");
const productCard = document.querySelector(".js-product-card");
const previousBtn = document.querySelector(".js-previous-btn");
const productCardLink = document.querySelector(".js-product-link");
const productCardImage = document.querySelector(".js-product-card-image");
const productCardTitle = document.querySelector(".js-product-card-title");
const productCardPrice = document.querySelector(".js-product-card-price");
const productCardDiscountOldPrice = document.querySelector(
    ".js-product-card-discount-old-price"
);
const productCardDiscountContainer = document.querySelector(
    ".js-product-card-discount-container"
);
const productCardDiscountPercentage = document.querySelector(
    ".js-product-card-discount-percentage"
);

const PRODUCTS = window.productsListData || [];
var inArr = 0

function showProduct(product) {
    if (!product) return;
    productCardTitle.innerHTML = product.title;
    productCardLink.setAttribute("href", product.url);
    productCardImage.setAttribute("src", product.image);
    productCard.setAttribute("data-product-id", product.id);
    productCardPrice.innerHTML = window.formatPrice(product.price.selling_price);
    if (product.price.discount_percent > 0) {
        productCardDiscountContainer.classList.remove("hidden");
        productCardDiscountOldPrice.innerHTML = window.formatPrice(
            product.price.main_price
        );
        productCardDiscountPercentage.innerHTML = `${window.formatPrice(
      product.price.discount_percent
    )}٪`;
    } else {
        productCardDiscountContainer.classList.add("hidden");
    }
    init();
}

function init() {
    // TODO: Complete this function
    setInterval(() => {

        inArr = Math.floor(Math.random() * (PRODUCTS.length - 1))
        showProduct(PRODUCTS[inArr]);
    }, 4000);
}

function nextProduct() {
    // TODO: Complete this function

    if (inArr == PRODUCTS.length - 1) {
        inArr = 0
    } else {
        inArr += 1
    }
    showProduct(PRODUCTS[inArr]);
    setInterval(() => {

        inArr = Math.floor(Math.random() * (PRODUCTS.length - 1))
        showProduct(PRODUCTS[inArr]);
    }, 4000);
}

function previousProduct() {
    // TODO: Complete this function

    if (inArr == 0) {
        inArr = PRODUCTS.length - 1
    } else {
        inArr -= 1
    }
    showProduct(PRODUCTS[inArr]);
    setInterval(() => {

        inArr = Math.floor(Math.random() * (PRODUCTS.length - 1))
        showProduct(PRODUCTS[inArr]);
    }, 4000);
}

// Start
showProduct(PRODUCTS[PRODUCTS.length - 1]);
// Navigation
nextBtn.addEventListener("click", () => nextProduct());
previousBtn.addEventListener("click", () => previousProduct());