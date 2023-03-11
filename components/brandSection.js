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
            height: 180px;
            width: 290px;
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
                        <img src="assets/brand-logos/cube.png" id="brand-logo" alt="card-bike">
                 </div>
                    <div class="brand-info-wrapper">
                        <h2 id="brand-name">CUBE </h2>
                        <p id="brand-decription">Themes in the Mobirise website builder offer multiple blocks: intros,
                        sliders, galleries, forms, articles, and so on. Start a project and click on the
                        red plus buttons to see the blocks available for your theme.</p>
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
}

customElements.define('brand-section', BrandSection);