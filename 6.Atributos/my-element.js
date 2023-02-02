// Esta clase extiende de la clase HTMLElement
class myElement extends HTMLElement {
  // El constructor se ejecuta al instanciar la clase
  constructor() {
    // Se llama al constructor de la clase padre
    super();

    this.attachShadow({ mode: "open" });

    this.title = this.getAttribute("title");
    this.body = this.getAttribute("body");
    this.img = this.getAttribute("img");
  }

  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
      <section class='container'>
        <div class="container__header">
          <h2>${this.title}</h2>
        </div>

        <div class="container__body">
          <img src="${this.img}" />
          <p>${this.body}</p>
        </div>
      </section>
      ${this.getStyles()}
    `;

    return template;
  }

  getStyles() {
    return `
      <style>
        h2 {
          text-transform: uppercase;
        }
      </style>
    `;
  }

  // Esta función renderiza el contenido de un elemento en el DOM
  render() {
    // Obtiene el contenido del template
    const templateContent = this.getTemplate().content;
    // Clona el contenido del template
    const cloneNode = templateContent.cloneNode(true); // El true clona todos los elementos anidados
    // Agrega el contenido clonado al elemento
    this.shadowRoot.appendChild(cloneNode);
  }

  // Esta función se ejecuta cuando el elemento es agregado al DOM
  connectedCallback() {
    this.render();
  }
}
// Registra el nuevo elemento con el nombre "my-element" en el DOM global customElements
customElements.define("my-element", myElement);
