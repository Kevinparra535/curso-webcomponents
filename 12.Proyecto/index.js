class ProductCard extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    return ["image", "title", "subtitle", "content", "price"];
  }

  attributeChangedCallback(attribute, oldValue, newValue) {
    if (oldValue !== newValue) {
      this[attribute] = newValue;
    }
  }

  getStyles() {
    return `
    <style>
      @import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

      .card {
        position: absolute;
        top: 50%;
        left: 50%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
        margin: 0 auto;
        width: 100%;
        height: 100%;
        min-width: 320px;
        max-width: 500px;
        max-height: 700px;
        transform: translate(-50%, -50%);
        font-family: "Raleway", sans-serif;
        transition: all 0.3s ease-in;
        color: white;
        background-color: white;
      }

      img {
        position: absolute;
        top: 25%;
        left: 50%;
        width: 100%;
        max-width: 750px;
        transform: translate(-50%, -50%) rotate(0deg);
        filter: drop-shadow(0px 0px 5px #070c24);
        transition: all 0.3s ease-in;
        background-color: transparent;
      }

      @media screen and (min-width: 320px) {
        .card {
          min-width: 360px;
          max-width: 500px;
          max-height: 700px;
        }

        img {
          top: 25%;
          left: 50%;
          max-width: 750px;
        }

        .card__column {
          padding: 50px 20px;
          width: 100%;
          height: 100%;
          background-color: #5a6cb2;
        }

        .card__column h2 {
          text-transform: uppercase;
          font-weight: bolder;
          font-size: 100px;
          text-align: center;
          opacity: 0.2;
          color: white;
          background-color: transparent;
        }

        .card__content {
          padding: 20px 20px;
          width: 100%;
          height: 100%;
          background-color: white;
        }

        .card__content h1 {
          margin-bottom: 10px;
          font-size: 30px;
          color: black;
          background-color: transparent;
        }

        .card__content h1,
        h2,
        h4,
        p {
          color: black;
          background-color: transparent;
        }

        .card__content h2 {
          margin-bottom: 20px;
          text-transform: uppercase;
          font-weight: bolder;
          font-size: 25px;
          opacity: 0.4;
          color: black;
          background-color: transparent;
        }

        .card__content h4 {
          font-weight: bolder;
          font-size: 28px;
        }

        .card__content p {
          margin: 0 10px;
          font-size: 15px;
          color: black;
          background-color: transparent;
        }

        .card__footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 50px;
          width: 100%;
          background-color: transparent;
        }

        .card__footer button {
          padding: 15px 20px;
          border-radius: 40px;
          border: none;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          font-family: "Raleway", sans-serif;
          letter-spacing: 1px;
          cursor: pointer;
          color: #fff;
          background-color: #5a6cb2;
        }
      }

      @media screen and (min-width: 480px) {
        .card__content {
          padding: 20px 20px;
          min-height: 430px;
        }
      }

      @media screen and (min-width: 1366px) {
        .card {
          flex-direction: row;
          height: 100%;
          max-width: 1000px;
          max-height: 500px;
        }

        img {
          top: 80%;
          left: 18%;
          width: 100%;
          max-width: 800px;
          transform: translate(-50%, -50%) rotate(-30deg);
        }

        .card__column {
          padding: 50px 20px;
          width: 50%;
          height: 100%;
          max-height: 500px;
        }

        .card__column h2 {
          margin: 0;
          font-size: 150px;
          text-align: left;
        }

        .card__content {
          padding: 50px 50px;
          width: 50%;
          height: 100%;
          max-height: 500px;
          background-color: white;
        }

        .card__content h1 {
          margin-bottom: 30px;
          font-size: 50px;
          color: black;
          background-color: transparent;
        }

        .card__content h1,
        h2,
        p {
          color: black;
          background-color: transparent;
        }

        .card__content h2 {
          margin-bottom: 30px;
          text-transform: uppercase;
          font-weight: bolder;
          font-size: 30px;
          opacity: 0.4;
          color: black;
          background-color: transparent;
        }

        .card__content p {
          margin: 0 10px 0 50px;
          font-size: 16px;
          color: black;
          background-color: transparent;
        }

        .card__footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 50px;
          width: 100%;
          background-color: transparent;
        }

        .card__footer button {
          padding: 15px 20px;
          border-radius: 40px;
          border: none;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          font-family: "Raleway", sans-serif;
          letter-spacing: 1px;
          cursor: pointer;
          color: #fff;
          background-color: #5a6cb2;
        }
      }

    
    </style>

    `;
  }

  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
      <div class="card">
        <div class="card__column">
          <h2>Nike</h2>
        </div>

        <img src="${this.image}" alt="Product image" />

        <div class="card__content">
          <h1>${this.title}</h1>

          <h2>${this.subtitle}</h2>

          <p>${this.content}</p>

          <div class="card__footer">
            <h4>$ ${this.price}</h4>

            <button title="ir al carrito de compras">Comprar</button>
          </div>
        </div>
      </div>

    ${this.getStyles()}
    `;

    return template;
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

customElements.define("product-card", ProductCard);
