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
    return `
    <style>
      :host {
        padding: 10px 20px;
        display: inline-block;
        margin: 10px;
        width: 100%;
        min-width: 250px;
        max-width: 300px;
        font-size: 20px;
        background-color: lightgray;
      }

      :host(.small) {
        padding: 10px 10px;
        min-width: 100px;
        max-width: 150px;
        font-size: 15px;
        background-color: lightgreen;
      }

      :host(.large) {
        min-width: 450px;
        max-width: 500px;
        background-color: lightblue;
      }

      :host([bold]) h2,  :host([bold]) p {
        font-weight: bold;
        color: azure;
      }

      :host-context(article.card) {
        display:flex;
        align-items: center;
        justify-content: center;
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
