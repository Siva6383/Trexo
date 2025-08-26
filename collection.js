document.addEventListener("DOMContentLoaded", function() {
    const productContainer = document.getElementById("products");
    const searchInput = document.getElementById("search");
    const productList = productContainer.querySelectorAll(".product-box");

    searchInput.addEventListener("keyup", function(event) {
        const enteredValue = event.target.value.toUpperCase();

        productList.forEach(product => {
            const productName = product.querySelector("p").textContent.toUpperCase();
            if (productName.includes(enteredValue)) {
                product.style.display = "grid"; // keep it in the grid layout
            } else {
                product.style.display = "none"; // hide it
            }
        });
    });
});

function goToProduct(img, name) {
    const url = `product-details.html?img=${encodeURIComponent(img)}&name=${encodeURIComponent(name)}`;
    window.location.href = url;
}

