/* HEADER SCROLL */
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (!header) return;

  header.classList.toggle("scrolled", window.scrollY > 50);
});


/* MODAL */
const modal = document.getElementById("modal-checkout");
const nameEl = document.getElementById("modal-ticket-name");
const priceEl = document.getElementById("modal-ticket-price");

document.querySelectorAll(".btn-comprar").forEach(btn => {
  btn.addEventListener("click", () => {
    if (!modal) return;

    nameEl.textContent = btn.dataset.ticket;
    priceEl.textContent = `R$ ${btn.dataset.price}`;

    modal.style.display = "flex";
  });
});

document.querySelector(".close-modal")?.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", e => {
  if (e.target === modal) modal.style.display = "none";
});


/* FAQ */
document.querySelectorAll(".faq-question").forEach(q => {
  q.addEventListener("click", () => {
    const item = q.parentElement;

    document.querySelectorAll(".faq-item").forEach(f => {
      if (f !== item) f.classList.remove("active");
    });

    item.classList.toggle("active");
  });
});


/* CONTADOR */
const dataEvento = new Date("2026-07-23T00:00:00").getTime();

const diasEl = document.getElementById("dias");
const horasEl = document.getElementById("horas");
const minutosEl = document.getElementById("minutos");
const segundosEl = document.getElementById("segundos");

function atualizarContador() {
  const agora = Date.now();
  const d = dataEvento - agora;

  if (d <= 0) {
    diasEl.textContent = horasEl.textContent =
    minutosEl.textContent = segundosEl.textContent = "00";
    return;
  }

  diasEl.textContent = Math.floor(d / 86400000);
  horasEl.textContent = Math.floor(d / 3600000 % 24);
  minutosEl.textContent = Math.floor(d / 60000 % 60);
  segundosEl.textContent = Math.floor(d / 1000 % 60);
}

setInterval(atualizarContador, 1000);
atualizarContador();