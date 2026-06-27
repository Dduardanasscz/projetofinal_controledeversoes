// ==========================
// EFEITO HEADER AO ROLAR
// ==========================
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


// ==========================
// MODAL DE COMPRA
// ==========================
const buttons = document.querySelectorAll(".btn-comprar");
const modal = document.getElementById("modal-checkout");
const closeModal = document.querySelector(".close-modal");
const ticketName = document.getElementById("modal-ticket-name");
const ticketPrice = document.getElementById("modal-ticket-price");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const name = button.getAttribute("data-ticket");
        const price = button.getAttribute("data-price");

        ticketName.textContent = name;
        ticketPrice.textContent = `R$ ${price}`;

        modal.style.display = "flex";
    });
});

// fechar modal
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// fechar clicando fora do modal
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});


// ==========================
// FAQ (ACORDEÃO)
// ==========================
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
        item.classList.toggle("active");
    });
});