// Esta clase extiende de la clase HTMLElement
class myElement extends HTMLElement {
  // El constructor se ejecuta al instanciar la clase
  constructor() {
    // Se llama al constructor de la clase padre
    super();

    // Esta línea de código permite crear una sombra para un elemento, lo que significa que se pueden agregar estilos adicionales a dicho elemento sin afectar el resto del documento.
    this.attachShadow({ mode: "open" });
  }

  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
      <section class='container'>
        <div class="container__header">
          <h2>Titulo</h2>
        </div>

        <div class="container__body">
          <p>Cuerpo del contenedor</p>
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
    // Se obtiene el shadowRoot del elemento
    const shadowRoot = this.shadowRoot;
    // Se obtiene el contenido del template del elemento
    const templateContent = this.getTemplate().content;
    // Se clona el contenido del template para agregarlo al shadowRoot
    const clonedTemplateContent = templateContent.cloneNode(true);
    // Se agrega el contenido clonado al shadowRoot
    shadowRoot.appendChild(clonedTemplateContent);
  }

  // Esta función se ejecuta cuando el elemento es agregado al DOM
  connectedCallback() {
    this.render();
  }
}
// Registra el nuevo elemento con el nombre "my-element" en el DOM global customElements
customElements.define("my-element", myElement);
