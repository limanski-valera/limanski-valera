// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

function showPortfolio() {
    const wrapper = document.querySelector(".portfolio");
    const button = wrapper.querySelector(".portfolio__button");

    button.addEventListener("click", () => {
        if (wrapper.classList.contains("_show-all-works")) {
            wrapper.classList.remove("_show-all-works");
            button.textContent = "show more";
        } else {
            wrapper.classList.add("_show-all-works");
            button.textContent = "hide";
        }
    });
}

function toggleLanguage() {
    const wrapper = document.querySelector(".language-selector");
    const button = wrapper.querySelector(".toggle-language-selector");

    button.addEventListener("click", () => {
        wrapper.classList.toggle("_active");
    });
}

function DOMLoad() {
    if (document.querySelector(".portfolio")) {
        showPortfolio();
    }
    if (document.querySelector(".language-selector")) {
        toggleLanguage();
    }
}

document.addEventListener("DOMContentLoaded", DOMLoad);
