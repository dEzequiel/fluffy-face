var template = `

<style>
.container {
    font-family: "Jost", sans-serif;
    font-size: 16px;
    padding-left: 165px;
    padding-right: 165px;
  }

  .card {
    cursor: pointer;
    display: flex;
    padding-right: 30px;
    background-color: #fafafa;
    margin-top: 25px;
    margin-bottom: 25px;
    transition: transform 0.5s;
  }

  .card:hover {
    transform: scale(1.05);
    box-shadow: 0px 1px 5px -1px gray;
  }

  .image-wrapper img {
    height: 150px;
    width: 200px;
    margin-right: 20px;
    padding: 0;
  }

  #rent {
    margin-top: 5px;
    margin-bottom: 10px;
    padding: 5px;
    cursor: pointer;
    background-color: var(--button-blue-background);
    border: none;
    color: #ffffff;
    box-shadow: 0px 2px 5px -1px gray;
    border-radius: 4px;
    font-size: 18px;
    font-weight: 600;
    transition: 0.5s;
    width: 80%;
    height: 20%;
  }
</style>

<div class="container">
<div class="card">
  <div class="image-wrapper">
    <img src="../assets/bike2.png" id="logo" alt="card-bike" />
  </div>
  <div class="bike-info-wrapper">
    <h2 id="name">NAME</h2>
    <ul id="features"></ul>
    <h2 id="price">1111$</h2>
    <div>
      <a class="" href=""><button id="rent">Rent</button></a>
    </div>
  </div>
</div>
</div>
`;

class BikeCard extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = template;
  }

  connectedCallback() {}

  async attributeChangedCallback(attrName, oldVal, newVal) {}
}

customElements.define("bike-card", BikeCard);
