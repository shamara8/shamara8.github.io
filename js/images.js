items = document.querySelectorAll(".timeline ul li");
images = document.querySelectorAll(".view-img");

items.forEach(item => {
    item.addEventListener("mouseenter", () => {
        targetId = item.dataset.target;

        images.forEach(img => img.classList.remove("active"));
        document.getElementById(targetId).classList.add("active");

        items.forEach(i => i.classList.remove("active"));
        item.classList.add("active");
    });
});