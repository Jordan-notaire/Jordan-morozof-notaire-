document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  if (toggle && nav) toggle.addEventListener("click", () => nav.classList.toggle("open"));

  const buttons = document.querySelectorAll(".read-more");
  const articles = document.querySelectorAll(".detail-article");
  const closeButtons = document.querySelectorAll(".close-article");

  function openArticle(id) {
    articles.forEach(article => {
      article.classList.toggle("open", article.id === id);
    });
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      openArticle(button.dataset.target);
    });
  });

  closeButtons.forEach(button => {
    button.addEventListener("click", () => {
      button.closest(".detail-article").classList.remove("open");
    });
  });
});
