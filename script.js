// ================= SEARCH =================

const searchIcon = document.querySelector(".fa-magnifying-glass");

if (searchIcon) {

    searchIcon.addEventListener("click", () => {

        const search = prompt("Search Product...");

        if (!search) return;

        const text = search.toLowerCase();

        if (text.includes("fashion")) {

            window.location.href = "fashion.html";

        }

        else if (text.includes("furniture")) {

            window.location.href = "furniture.html";

        }

        else if (text.includes("lighting")) {

            window.location.href = "lighting.html";

        }

        else if (text.includes("electronics")) {

            window.location.href = "electronics.html";

        }

        else if (text.includes("kitchen")) {

            window.location.href = "kitchen.html";

        }

        else if (text.includes("accessories")) {

            window.location.href = "accessories.html";

        }

        else if (text.includes("home")) {

            window.location.href = "home-decor.html";

        }

        else if (text.includes("luxury")) {

            window.location.href = "luxury.html";

        }

        else {

            alert("Product Not Found");

        }

    });

}

// ================= ADD TO CART =================

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price, image) {

    cart.push({
        name: name,
        price: price,
        image: image
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(name + " added to cart!");

}

// ================= PRODUCT FILTER =================

function filterProducts(category) {

    const products = document.querySelectorAll(".product-card");

    products.forEach(product => {

        if (category === "all") {

            product.style.display = "block";

        }

        else if (product.classList.contains(category)) {

            product.style.display = "block";

        }

        else {

            product.style.display = "none";

        }

    });

}