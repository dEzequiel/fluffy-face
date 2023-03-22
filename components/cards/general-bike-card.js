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
    align-items: center;
    
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
    <img src="../pages/assets/bike2.png" id="bike-logo" alt="card-bike" />
  </div>
  <div class="bike-info-wrapper">
    <h2 id="name"></h2>
    <ul id="features"></ul>
    <h2 id="price">1111$</h2>
    <div>
      <a class="" href=""><button id="rent">Rent</button></a>
    </div>
  </div>
</div>
</div>
`;

class GeneralBikeCard extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    this.displayedFeatures = [
      "brand",
      "type",
      "frame",
      "fork",
      "gears",
      "brakes",
      "wheels",
      "suspension",
      "tires",
    ];
    shadowRoot.innerHTML = template;
  }

  connectedCallback() {}

  static get observedAttributes() {
    return ["name", "price", "features", "logo"];
  }

  get name() {
    return this.getAttribute("name");
  }
  set name(value) {
    this.setAttribute("name", value);
  }

  get price() {
    return this.getAttribute("price");
  }
  set price(value) {
    this.setAttribute("price", value);
  }

  get features() {
    return this.getAttribute("features");
  }
  set features(value) {
    this.setAttribute("features", value);
  }

  get logo() {
    return this.getAttribute("logo");
  }
  set logo(value) {
    this.setAttribute("logo", value);
  }

  async attributeChangedCallback(attrName, oldVal, newVal) {
    if (attrName === "name") {
      this.shadowRoot.querySelector("#name").textContent = newVal;
    }

    if (attrName === "features") {
      const features = JSON.parse(newVal);
      const featuresList = this.shadowRoot.querySelector("#features");
      featuresList.innerHTML = "";
      for (const prop in features) {
        if (this.displayedFeatures.includes(prop)) {
          const li = document.createElement("li");
          const label = document.createElement("span");
          label.style.fontWeight = "bold";
          label.textContent = prop.toUpperCase();
          li.appendChild(label);
          li.innerHTML += `: ${features[prop]}`;
          featuresList.appendChild(li);
        }
      }
    }
  }
}

customElements.define("general-bike-card", GeneralBikeCard);
