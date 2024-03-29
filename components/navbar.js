let template = `
<style>
    li, a {
            font-family: 'Montserrat', sans-serif;
            font-weight: 600;
            font-size: 16px;
            color: black;
            text-decoration: none;
        }

        header {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            padding: 30px 10%;
            background-color: #ffffff;
            height: 15px;
            box-shadow: 0 -6px 5px 5px rgba(0,0,0,0.5);
            margin-bottom: 60px;
        }

        .logo {
            cursor: pointer;
            margin-right: auto;
            width: 100px;
        }

        .nav_links {
            list-style: none;
        }

        .nav_links li {
            display: inline-block;
            padding: 0px 20px;
        }

        .nav_links li a {
            color: #232323;
            transition: all 0.3s ease 0s;
        }

        .nav_links li a:hover {
            color: var(--hover-blue);
        }
</style>

   <header>
        <img class="logo" src="../pages/assets/logo.png" alt="logo" id="logo">
        </header>
`;

class NavBar extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = template;
  }

  connectedCallback() {
    const logo = this.shadowRoot.querySelector("#logo");
    logo.addEventListener("click", () => {
      location.href = "http://127.0.0.1:5500";
    });
  }
}

customElements.define("nav-bar", NavBar);
