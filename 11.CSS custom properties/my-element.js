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
          <h1><slot name="title"></slot></h1>
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
    return `
    <style>
      :host {
        --primary-color: lightgray;
        --secondary-color; salmon;
        --heading-primary: 30px;
        --heading-secondary: 25px;
        font-size: var(--heading-primary);
        font-family: 'Raleway', sans-serif;
      }

      .container {
        padding: 10px 20px;
        width: 100%;
        max-width: 250px;
        background-color: var(--primary-color)
      }

      .container__header h1 {
        font-size: var(--heading-primary)
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
