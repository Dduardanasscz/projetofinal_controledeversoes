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


// ==========================
// CONTADOR EXPOFEST
// até 23/07/2026 00:00
// ==========================

const dataEvento = new Date("2026-07-23T00:00:00").getTime();

const diasEl = document.getElementById("dias");
const horasEl = document.getElementById("horas");
const minutosEl = document.getElementById("minutos");
const segundosEl = document.getElementById("segundos");
const mensagem = document.getElementById("mensagem-contador");

function atualizarContador() {

    const agora = new Date().getTime();
    const distancia = dataEvento - agora;

    if (distancia <= 0) {
        diasEl.textContent = "00";
        horasEl.textContent = "00";
        minutosEl.textContent = "00";
        segundosEl.textContent = "00";

        if (mensagem) {
            mensagem.textContent = "🎉 A EXPOFEST COMEÇOU!";
        }

        return;
    }

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    if (diasEl) diasEl.textContent = dias;
    if (horasEl) horasEl.textContent = horas;
    if (minutosEl) minutosEl.textContent = minutos;
    if (segundosEl) segundosEl.textContent = segundos;

    if (mensagem) {
        if (dias <= 1) {
            mensagem.textContent = " É AMANHÃ!";
        } else if (dias <= 3) {
            mensagem.textContent = " Falta muito pouco!";
        } else if (dias <= 7) {
            mensagem.textContent = " A contagem está ficando séria!";
        } else {
            mensagem.textContent = "Prepare-se para viver uma experiência inesquecível.";
        }
    }
}

setInterval(atualizarContador, 1000);
atualizarContador();