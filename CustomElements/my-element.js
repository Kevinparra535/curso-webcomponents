const template = document.createElement("div");

template.innerHTML = `

  <style>
    .card__header p {
      font-weight: bold;
      color: red;
    }

    .card__body p {
      font-weight: medium;
      color: green;
    }
  </style>

  <div class='card'>
    <div class='card__header'>
      <p>Titulo de la carta</p>
    </div>

    <div class='card__body'>
      <p>Cuerpo de la carta</p>
    </div>
  </div>
`;

// Esta clase extiende de la clase HTMLElement
class myElement extends HTMLElement {
  // El constructor se ejecuta al instanciar la clase
  constructor() {
    // Se llama al constructor de la clase padre
    super();
    // Imprime un mensaje en la consola
    console.log("Hola Mundo");

    // Crea un elemento <p>
    this.p = document.createElement("p");
  }
  // Esta función se ejecuta cuando el elemento es agregado al DOM
  connectedCallback() {
    // Establece el contenido del elemento  creado previamente
    this.p.textContent = "Hola Mundo";
    // Agrega el elemento <p> como hijo del elemento actual (my-element)
    this.appendChild(this.p);
    this.appendChild(template)
  }
}
// Registra el nuevo elemento con el nombre "my-element" en el DOM global customElements
customElements.define("my-element", myElement);
