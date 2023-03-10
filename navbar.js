// This file will be the navbar web component.

// Template
const template = document.createElement('template')
template.innerHTML = `
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
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
                transition: all 0.3s ease 0s;
        }

        .nav_links li a:hover {
            color: #0088a9;
        }
</style>

   <header>
        <img class="logo" src="assets/logo.png" alt="logo">
            <nav>
                <ul class="nav_links">
                <li><a href="#">About us</a></li>
                <li><a href="#">Bikes</a></li>
                <li><a href="#">Contact us</a></li>
                </ul>
            </nav>
        </header>
`;

class NavBar extends HTMLElement {
    constructor(){
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        let clone = template.content.cloneNode(true);
        shadowRoot.append(clone);
    }
}

customElements.define('nav-bar', NavBar);