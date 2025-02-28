// تحميل التطبيق
function downloadApp() {
    alert("سيتم تحميل التطبيق قريبًا...");
}

// نظام التقييم مع منع تقليل العدد عند التعديل
let ratingCount = 0;
let userRated = false;
const stars = document.querySelectorAll(".star");
const countDisplay = document.getElementById("count");

stars.forEach(star => {
    star.addEventListener("click", function () {
        const value = this.getAttribute("data-value");

        stars.forEach(s => s.classList.remove("active"));
        for (let i = 0; i < value; i++) {
            stars[i].classList.add("active");
        }

        if (!userRated) {
            ratingCount++;
            userRated = true;
        }

        countDisplay.textContent = ratingCount;
    });
});
