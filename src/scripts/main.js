document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("[data-tab-button]");
    const questions = document.querySelectorAll("[data-faq-questions]");

    const heroSection = document.querySelector(".hero");
    const alturaHero = heroSection.clientHeight;

    window.addEventListener("scroll", function () {
        const posicaoAtual = window.scrollY;

        if(posicaoAtual < alturaHero) {
            ocultaElementosHeader();
        }
        else {
            exibeElementosHeader();
        }
    });

    // Seção de atrações
    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener("click", toggleQuestion)
    }

    // Seção Faq Accordion
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function (botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`)
            escondeTodasAbas();
            aba.classList.add("shows__list--is-active");
            removeBotaoAtivo();
            botao.target.classList.add("shows__tabs__button--is-active");
        });
    };
});

// Abre e fecha o campo de perguntas frequentes
function toggleQuestion(element) {
    const classe = "faq__questions__item--is-open";
    const elementoPai = element.target.parentNode;

    elementoPai.classList.toggle(classe);
};

// Remover uma classe de todos os buttons
function removeBotaoAtivo() {
    const buttons = document.querySelectorAll("[data-tab-button]");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("shows__tabs__button--is-active");
    };
}

// Remover uma classe de todas as listas
function escondeTodasAbas() {
    const tabsContainer = document.querySelectorAll("[data-tab-id]");

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove("shows__list--is-active");
    };
};

// Oculta os elementos do Header
function ocultaElementosHeader() {
    const header = document.querySelector("header");
    header.classList.add("header--is-hidden");
}

// Ecibe os elementos do Header
function exibeElementosHeader() {
    const header = document.querySelector("header");
    header.classList.remove("header--is-hidden");
}