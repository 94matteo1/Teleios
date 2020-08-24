const template = document.createElement('template');
 
template.innerHTML = `
    <style>


        .container-nav{
            text-align: center;
            position: relative;
            background: #222;
            height: 3.125rem;
      
        }

        .marchio{
            margin: .625rem auto;
            max-height: 100vh;
            width: 6.25rem;
            height: 1.875rem;
            display: inline-block;
            background-image: url('img/test/marchio.png');
        }

        .nav-menu{
            visibility: "visible";
            display: inline-block;
            height: 1.875rem;
            
        }

        .nav-item{
            max-height: 1.5rem;
            display: block;
            float: left;
            line-height: 1;
            padding: 0 1.25rem;
            margin-top:-3px;
        }
  
        .reflink-nav-item{
            text-decoration: none;

            font-family: 'Roboto', sans-serif;
            font-size: 1.0rem;
            letter-spacing: .0625rem;
            color: whitesmoke;
        }

        @media (min-width : 0px) and (max-width: 501px){
            .reflink-nav-item{
                font-size: 0.80rem;
            }
        }

        @media (min-width : 0px) and (max-width: 461px){
            .container-nav{
                height: 5.5rem;
            }
        }
  
 
    </style>
 
    <div class="container-nav">
        <div class="marchio">
        </div>
            <div class="nav-menu" id="nav-menu-id">
                <li class="nav-item"><a  href="./index.html" class="reflink-nav-item">Home</a></li>
                <li class="nav-item"><a  href="./simulatore-info.html" class="reflink-nav-item">Products</a></li>
                <li class="nav-item"><a  href="./about.html" class="reflink-nav-item">About</a></li>
                <li class="nav-item"><a  href="./contacts.html" class="reflink-nav-item">Contatti</a></li>
                
        </div>
    </div>
        
`;
 
class NavBar extends HTMLElement {
  constructor() {
    super();
 
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
  }
}
 
window.customElements.define('nav-bar', NavBar);