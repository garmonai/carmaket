const scrollArea = document.getElementById("scrollArea");
const scrollBtn = document.getElementById("scrollToTopBtn");

scrollArea.addEventListener("scroll", () => {
  if (scrollArea.scrollTop > 260) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});

scrollBtn.addEventListener("click", () => {
  scrollArea.scrollTo({ top: 0, behavior: "smooth" });
});

// Навигация внизу
document.querySelectorAll(".bottom-nav .nav-item").forEach((item) => {
  item.addEventListener("click", () => {
    const target = item.getAttribute("data-scroll");
    if (target) {
      const el = document.querySelector(target);
      if (el) {
        const top = el.offsetTop - 16;
        scrollArea.scrollTo({ top, behavior: "smooth" });
      }
    }
    document.querySelectorAll(".bottom-nav .nav-item").forEach((i) =>
      i.classList.remove("active")
    );
    item.classList.add("active");
  });
});

// Поиск по каталогу
const searchInput = document.getElementById("searchInput");
const searchClear = document.getElementById("searchClear");
const cars = Array.from(document.querySelectorAll(".car-card"));

function applyFilters() {
  const text = searchInput.value.trim().toLowerCase();
  const activeChip = document.querySelector(".chip.chip-active");
  const filter = activeChip ? activeChip.getAttribute("data-filter") : "all";

  cars.forEach((card) => {
    const tags = (card.getAttribute("data-tags") || "").toLowerCase();
    const segment = (card.getAttribute("data-segment") || "").toLowerCase();

    const textMatch = !text || tags.includes(text);
    const filterMatch = filter === "all" || segment.includes(filter);

    if (textMatch && filterMatch) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
}

searchInput.addEventListener("input", () => {
  searchClear.style.display = searchInput.value ? "block" : "none";
  applyFilters();
});

searchClear.addEventListener("click", () => {
  searchInput.value = "";
  searchClear.style.display = "none";
  applyFilters();
});

// Фильтры по странам/типам
document.querySelectorAll(".chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    document.querySelectorAll(".chip").forEach((c) =>
      c.classList.remove("chip-active")
    );
    chip.classList.add("chip-active");
    applyFilters();
  });
});

// Обработчики CTA-кнопок
const requestForm = document.getElementById("requestForm");
const phoneInput = document.getElementById("phoneInput");

requestForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!phoneInput.value.trim()) {
    alert("Введите, пожалуйста, номер телефона, чтобы мы могли с вами связаться.");
    return;
  }
  alert("Спасибо! Мы получили вашу заявку и свяжемся с вами в ближайшее время.");
  requestForm.reset();
});

document.querySelectorAll(".car-cta .btn-solid").forEach((btn) => {
  btn.addEventListener("click", () => {
    const car = btn.getAttribute("data-car") || "выбранное авто";
    document.getElementById("budgetInput").value =
      "Интересует " + car + " (рассчитать с доставкой и растаможкой)";
    const el = document.querySelector("#request");
    if (el) {
      const top = el.offsetTop - 16;
      scrollArea.scrollTo({ top, behavior: "smooth" });
    }
  });
});

document.getElementById("heroOrderBtn").addEventListener("click", () => {
  const el = document.querySelector("#request");
  if (el) {
    const top = el.offsetTop - 16;
    scrollArea.scrollTo({ top, behavior: "smooth" });
  }
});

document.getElementById("heroWhatsAppBtn").addEventListener("click", () => {
  alert("Откройте WhatsApp и напишите нам по номеру, указанному на сайте.");
});

// Иконки в шапке
document.getElementById("openCallback").addEventListener("click", () => {
  const el = document.querySelector("#request");
  if (el) {
    const top = el.offsetTop - 16;
    scrollArea.scrollTo({ top, behavior: "smooth" });
  }
});

document.getElementById("openMenu").addEventListener("click", () => {
  alert("Здесь может быть боковое меню: о компании, кейсы, FAQ и контакты.");
});


