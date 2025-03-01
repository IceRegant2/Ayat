
// تطبيق تأثيرات عند التمرير
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".animate");

    function checkScroll() {
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();
});

// تأثير عند تمرير الفأرة على الأزرار
document.querySelectorAll("button").forEach(button => {
    button.addEventListener("mouseenter", () => {
        button.style.transform = "scale(1.1)";
        button.style.transition = "transform 0.3s ease-in-out";
    });
    button.addEventListener("mouseleave", () => {
        button.style.transform = "scale(1)";
    });
});

// تحميل التطبيق (كمثال)
function downloadAPK() {
    window.location.href ="https://github.com/IceRegant2/Ayat/releases/download/v9.3/Ayat.Quran.apk";
}
