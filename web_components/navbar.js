const template = document.createElement('template');
 
template.innerHTML = `
    <style>


        .container-nav{
            text-align: center;
            position: absolute;
            height: 3.125rem;
            z-index:2;
            top: 0; right: 0; bottom: 0; left:0;


        }

        .marchio{
            margin: .625rem auto;
            max-height: 100vh;
            width: 6.25rem;
            height: 1.875rem;
            display: inline-block;
            background-image: url('img/Definitive/Desktop/Navbar/marchio-white.png');
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
            font-family: 'Montserrat', sans-serif;
            font-size: 1.0rem;
            letter-spacing: .0625rem;
            color: whitesmoke;
            font-weight: bold;
        }

        .teleios{
            display: block;
            height: 100%;
            width: 100%;
            text-decoration: none;
        }

        @media (min-width : 0px) and (max-width: 501px){
            .reflink-nav-item{
                font-size: 0.95rem;
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
            <a href="./index.html" class="teleios"></a>
        </div>
        <div class="nav-menu" id="nav-menu-id">
            <li class="nav-item"><a  href="./index.html" class="reflink-nav-item">Home</a></li>
            <li class="nav-item"><a  href="./about.html" class="reflink-nav-item">About</a></li>
            <li class="nav-item"><a  href="./contacts.html" class="reflink-nav-item">Contacts</a></li>
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