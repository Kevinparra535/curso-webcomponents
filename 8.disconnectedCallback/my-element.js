// Esta es una clase que extiende de la clase HTMLElement
class myElement extends HTMLElement {
  // Se ejecuta el constructor cuando se instancia el elemento
  constructor() {
    super();
    console.log("Se ejecuta el constructor");
  }
  // Se ejecuta cuando el elemento se conecta al DOM (Document Object Model)
  connectedCallback() {
    console.log("Se ejecuta el connected");
  }
  // Se ejecuta cuando el elemento se desconecta del DOM (Document Object Model)
  disconnectedCallback() {
    console.log("Se ejecuta el disconnected");
  }
}

customElements.define("my-element", myElement);
document.querySelector("my-element").remove();
