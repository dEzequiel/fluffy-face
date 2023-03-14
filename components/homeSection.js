var template = `
    <style>

        * {
        background-color: #bed3f9;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        }

        .container {
            font-family: 'Jost', sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: 500;
            font-size: 16px;
            margin-top: 10%;
        }

        .text-wrapper {
            width: 600px;
            height: 353px;
        }

        .text-wrapper h1 {
            font-size: 53px;
        }

        .text-wrapper p {
           font-size: 19px;
           margin-top: 20px;
           margin-bottom: 20px;
        }

        .image-wrapper img {
            height: 450px;
            width: 600px;
        }

        .text-wrapper button {
            margin-top: 15px;
            padding: 13px 25px;
            cursor: pointer;
            background-color: var(--button-blue-background);
            border: none;
            color: #ffffff  ;
            box-shadow: 0px 2px 5px -1px gray;
            border-radius: 4px;
            font-size: 18px;
            font-weight: 600;
            transition: 0.5s;
        }

        button:hover {
            background-color: var(--hover-blue);
        }
    </style>

<section id="fluffy-bike-welcome">
            <div class="container">
             <div class="text-wrapper">
                <h1><strong>Fluffy Bike</strong></h1>
                <p>
                    Welcome to our online store dedicated to
                    providing you with the best selection of
                    bicycles on the market! Whether you're an avid cyclist or
                    simply looking for a fun way to get around town, we have the
                    perfect bike for you. Our inventory includes a wide range of styles,
                    from mountain bikes to road bikes to electric bikes and everything in between.
                </p>
                <div>
                    <a class="" href=""><button>Catalog </button></a>
                </div>
                </div>
                <div class="image-wrapper">
                    <img class="logo" src="assets/bike1.png" alt="logo">
                </div>

            </div>
        </section>`;


class HomeSection extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = template;
    }
}

customElements.define('home-section', HomeSection);