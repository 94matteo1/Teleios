

const footer = document.createElement('template');
 
footer.innerHTML = `
<style>
    .main-footer{
        background: #f5f5f5;
        margin: 0;
        border: 0;
        display: block;
        padding: 1.125rem;
  
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
        font-family: 'Montserrat', sans-serif;
        font-size:20px;
    }



    .social{
        margin: .625rem auto;
        max-height: 100vh;
        width: 6.25rem;
        height: 1.875rem;
 
        background-image: url('img/test/marchio-white.png');

    }

    .container-social{
        display:flex;
     
    }

    @media (min-width : 0px) and (max-width: 767px){

        .main-footer{

            padding: 0.25rem;

        }

        .text-footer{

            font-size:12px;
        }

    }
</style>

<div class="main-footer">
    <h1 class="text-footer"">
        <span class="text-little" style="color:  #091d3e;">info@teleios.tech - via Varesina 3, 22075 Lurate Caccivio (Co), Italy - +39 / 391 76 72 613 </span>
        
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