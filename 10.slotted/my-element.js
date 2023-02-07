class myElement extends HTMLElement {
  // El constructor se ejecuta al instanciar la clase
  constructor() {
    // Se llama al constructor de la clase padre
    super();

    this.attachShadow({ mode: "open" });
  }

  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
      <section class='container'>
        <div class="container__header">
          <h2><slot name="title"></slot></h2>
        </div>

        <div class="container__body">
          <p><slot name="body"></slot></p>
        </div>
      </section>
      ${this.getStyles()}
    `;

    return template;
  }

  getStyles() {
    // Simbolo de todo (*)
    return `
    <style>
      ::slotted(span) {
        font-size: 30px;
        color: red;
      }

      ::slotted(.title) {
        text-transform: uppercase;
        color: blue;
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
