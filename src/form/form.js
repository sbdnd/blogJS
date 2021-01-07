import "../assets/styles/styles.scss";
import "./form.scss";

const form = document.querySelector("form");
const errorElement = document.querySelector("#errors");
let errors = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const entries = formData.entries();

  /**
   * methode 1 - transformer un tableau d'entries en objet
   * /
  // const obj = Array.from(entries).reduce((acc, value) => {
  //   acc[value[0]] = value[1];
  //   return acc;
  // }, {});

  /**
   * methode 2 - transformer un tableau d'entries en objet
   */
  const article = Object.fromEntries(entries);

  //si formulaire valide - objet => Json
  if (formIsValid(article)) {
    const json = JSON.stringify(article);
  }
  displayError();
});

/**
 * Valide les champs du formulaire
 */
const formIsValid = (article) => {
  if (!article.author || !article.category || !article.content) {
    errors.push("Vous devez renseigner tous les champs");
  } else {
    errors = [];
  }
};

/**
 * affiche l'erreur
 */
const displayError = () => {
  if (errors.length) {
    let errorHTML = "";
    errors.forEach((e) => {
      errorHTML += `<li>${e}</li>`;
    });
    errorElement.innerHTML = errorHTML;
  } else {
    errorElement.innerHTML = "";
  }
};
