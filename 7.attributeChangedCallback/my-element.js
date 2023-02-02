class myElement extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
  }

  // Esta función devuelve una lista de atributos que el componente está observando.
  static get observedAttributes() {
    // Devuelve un arreglo con los nombres de los atributos que se están observando
    return ["title", "body", "img"];
  }

  // Esta función se usa para detectar cuando un atributo de un elemento cambia.
  // Se reciben como parámetros el nombre del atributo, el valor antiguo y el nuevo valor.
  attributeChangedCallback(attribute, oldValue, newValue) {
    if (oldValue !== newValue) {
      // Se comprueba si el valor antiguo es diferente al nuevo.
      this[attribute] = newValue; // Si es así, se actualiza el atributo con el nuevo valor.
    }
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

  render() {
    const templateContent = this.getTemplate().content;
    const cloneNode = templateContent.cloneNode(true);
    this.shadowRoot.appendChild(cloneNode);
  }

  connectedCallback() {
    this.render();
  }
}
customElements.define("my-element", myElement);
