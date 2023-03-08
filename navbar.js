// This file will be the navbar web component.

// Template
const template = document.createElement('template')
template.innerHTML = `
<style>
ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #4CAF50;
      }

      li {
        float: left;
      }

      li a {
        display: block;
        padding: 8px;
      }
</style>

   <ul>
        <li><a href="{{#option-link}}">{{option}}</a></li>
   </ul>
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