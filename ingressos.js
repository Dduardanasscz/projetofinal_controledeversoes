// ==========================
// HEADER SCROLL
// ==========================
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");

    if (!header) return;

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


// ==========================
// MODAL
// ==========================
const buttons = document.querySelectorAll(".btn-comprar");
const modal = document.getElementById("modal-checkout");
const closeModal = document.querySelector(".close-modal");
const ticketName = document.getElementById("modal-ticket-name");
const ticketPrice = document.getElementById("modal-ticket-price");

buttons.forEach(button => {
    button.addEventListener("click", () => {

        if (!modal) return;

        const name = button.getAttribute("data-ticket");
        const price = button.getAttribute("data-price");

        if (ticketName) ticketName.textContent = name;
        if (ticketPrice) ticketPrice.textContent = `R$ ${price}`;

        modal.style.display = "flex";
    });
});

if (closeModal && modal) {
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });
}

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});


// ==========================
// FAQ (CORRIGIDO 100%)
// ==========================
document.addEventListener("DOMContentLoaded", () => {

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {

        const question = item.querySelector(".faq-question");

        if (!question) return;

        question.addEventListener("click", () => {

            faqItems.forEach(el => {
                if (el !== item) {
                    el.classList.remove("active");
                }
            });

            item.classList.toggle("active");
        });
    });

});