var template = `
    <style>
        body {
            background-color: #ffffff;

        }

        .container {
            font-family: 'Jost', sans-serif;
            font-size: 16px;
            padding-left: 165px;
            padding-right: 165px;
        }

        .text-wrapper h3 {
            font-size: 53px;
            font-weight: 600;
            text-align: center;

        }

        .card {
            cursor: pointer;
            display: flex;
            padding-right: 30px;
            background-color: #FAFAFA;
            margin-top: 25px;
            margin-bottom: 25px;
            transition: transform 0.5s;
        }

        .card:hover {
            transform: scale(1.05);
            box-shadow: 0px 1px 5px -1px gray;

        }

        .card .image-wrapper img {
            height: 200px;
            width: 200px;
            margin: 0;
            padding: 0;
        }

        .card .brand-info-wrapper {
            margin-left: 30px;

        }

        .card .brand-info-wrapper h2 {
            margin-top: 30px;
            margin-bottom: 30px;
            font-size: 2rem;
        }

        .card .brand-info-wrapper p {
            font-size: 1.2rem;
        }

    </style>

<section id="brand-list">
        <div class="container">
              <div class="card">
                <div class="image-wrapper">
                        <img src="" id="logo" alt="card-bike">
                 </div>
                    <div class="brand-info-wrapper">
                        <h2 id="name"></h2>
                        <p id="description"></p>
                    </div>
            </div>
        </div>
    </section>`;

class BrandSection extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = template;

    }

    static get observedAttributes() {
        return ['name', 'description', 'logo']
    }

    get name() { return this.getAttribute('name'); }
    set name(value) { this.setAttribute('name', value); }

    get description() { return this.getAttribute('description'); }
    set description(value) { this.setAttribute('description', value); }

    get logo() { return this.getAttribute('logo'); }
    set logo(value) { return this.setAttribute('logo', value) }

    attributeChangedCallback(attrName, oldVal, newVal) {
        if(attrName.toLowerCase() === 'name') {
            // Peticion API
            // Asigno un valor a los atributos con el resultado de la API.
            // this.setAttribute('logo', valor de la peticion);
            const idNameTag = this.shadowRoot.getElementById('name');
            idNameTag.textContent = newVal;
        }

        if(attrName.toLowerCase() === 'description') {
            const idDescriptionTag = this.shadowRoot.getElementById('description');
            idDescriptionTag.textContent = newVal;
        }

        if(attrName.toLowerCase() === 'logo') {
            const idLogoTag = this.shadowRoot.getElementById('logo');
            idLogoTag.src = newVal;
        }
    }
}

customElements.define('brand-section', BrandSection);