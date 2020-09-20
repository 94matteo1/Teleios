

const footer = document.createElement('template');
 
footer.innerHTML = `
<style>
    .main-footer{
        background: #091d3e;
        margin: 0;
        border: 0;
        display: block;
        padding: 3.125rem .625rem;
  
        position: relative;
        bottom: 0;
    }

    .text-footer{

        letter-spacing: .0625rem;
        text-align: center;
        align-items: center;
        justify-content: center;
        height: 100%;
        display: flex;
    }
</style>

<div class="main-footer">
    <h1 class="text-footer"">
        <span class="text-little" style="color: white;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</span>
    </h1>
</div>
`;
 
class Footer extends HTMLElement {
  constructor() {
    super();
 
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(footer.content.cloneNode(true));
  }
}
 
window.customElements.define('foo-ter', Footer);