function showSection(sectionId) {
    document.querySelectorAll('.product-section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function() {
    showSection('all-products');
});

// Sidebar Toggle Function
function toggleSidebar() {
    document.querySelector(".sidebar").classList.toggle("show");
}

// Filter Products by Category
function showCategory(category) {
    let products = document.querySelectorAll(".product");
    products.forEach(product => {
        product.style.display = (category === 'all' || product.dataset.category === category) ? "block" : "none";
    });
}

// Search Function
function searchProducts() {
    let searchInput = document.getElementById("search").value.toLowerCase();
    let products = document.querySelectorAll(".product");
    products.forEach(product => {
        let title = product.querySelector("h3").textContent.toLowerCase();
        product.style.display = title.includes(searchInput) ? "block" : "none";
    });
}

// Filter Products
function filterProducts() {
    let selectedCategory = document.getElementById("filter").value;
    showCategory(selectedCategory);
}
