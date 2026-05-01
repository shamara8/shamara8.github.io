const items = document.querySelectorAll(".timeline ul li");
const images = document.querySelectorAll(".view-img");

items.forEach(item => {
    item.addEventListener("mouseenter", () => {
        const targetId = item.dataset.target;

        images.forEach(img => img.classList.remove("active"));

        document.getElementById(targetId).classList.add("active");
    });
});