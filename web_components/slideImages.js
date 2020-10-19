const slideImagesTemplate = document.createElement('template');
 
slideImagesTemplate.innerHTML = `

 

    <style>
    
    .custom-props{
        --background-color:null;
        --background-img:null;
        --background-img-mobile:null;
  
    }
    .background{

        background-color: var(--background-color);
    }

    .item{
        background-position: center bottom;
        background-repeat: no-repeat;
        background-size: cover;
        width:100%;
        height:1080px;
        background-image: var(--background-img);
    }

    .itemMobile{
        width:100%;
		height: 680px;
		background-position: center bottom; 
		background-repeat: no-repeat;
     
        background-size: 0 0;
        background-image: var(--background-img-mobile);
    }

    .textContainer{
        padding-top: 4.375rem;
        max-width: 60%;
        margin: 0 auto;
        text-align: center;
    }

    .txtBig{
        font-family: "Square Sans Serif 7";
        display: block;
        font-size: 38px;
        line-height: 1;
        letter-spacing: .0625rem;
        text-transform: uppercase;
     
    }

    .txtSmall{
        font-family: 'Montserrat', sans-serif;
        font-size: 24px;
        font-weight: bold;
        line-height: 1.5;
        display: block;
        letter-spacing: .0625rem;
        margin-top: .625rem;
    }



  
    

    @media (min-width : 0px) and (max-width: 767px){
		.item{
            background-size: 0 0;
      
        }
        
        .itemMobile{
			
			background-size: cover;
			
        }
        
        .textContainer{
            padding-top: 2.700rem;
            max-width: 80%;
            
        }

        .txtBig{
            font-size: 24px;
        }
    
        .txtSmall{
            font-size: 18px;

        }

	}
    </style>
    
    <div id="customProps">
	    <div class="background">
            <div class="item" id="slide-images-img">
                <div class="itemMobile">
                    <h1 class="textContainer">
                        <slot name="slideImagestextBig" class="txtBig">My default text 3</slot>
                    </h1>
                </div>
            </div>
          
        </div>     
    </div>

    
    
	
        
`;

customElements.define('slide-images',
  class extends HTMLElement {
    constructor() {
      super();

	  const templateContent = slideImagesTemplate.content;

      this.attachShadow({mode: 'open'}).appendChild(
        templateContent.cloneNode(true)
      );
    }
  }
);


slideImages = document.querySelectorAll('slide-images');

var backgroundCol;
var desktopImg;
var mobileImg;

var desktopImg2;
var desktopImg3;
var desktopImg4;

var animPlay = false;;
slideImages.forEach(function (item) {
    

	[item.attributes].forEach(attr => {
        backgroundCol = attr[0].value ;
        desktopImg = "url(" + attr[1].value +")";
        mobileImg = "url(" + attr[2].value +")";

        desktopImg2  = "url(" + attr[3].value +")";
        desktopImg3  = "url(" + attr[4].value +")";
        desktopImg4  = "url(" + attr[5].value +")";
    });
    
    item.shadowRoot.getElementById('customProps').style.setProperty("--background-color", backgroundCol);
    item.shadowRoot.getElementById('customProps').style.setProperty("--background-img", desktopImg);
    item.shadowRoot.getElementById('customProps').style.setProperty("--background-img-mobile", mobileImg);

    item.parentElement.addEventListener("animationstart", function() {
        animPlay = true;
    }, false);

    item.parentElement.addEventListener("animationend", function() {
        item.parentElement.style.animation = null;
        animPlay = false;
    }, false);

});

function changeImage(checkId, num){


    slideImages.forEach(function (item) {
        
        if( item.id === checkId && animPlay === false){
   
            setTimeout(
                function() {
                    if(num == 1)
                        item.shadowRoot.getElementById('customProps').style.setProperty("--background-img",  desktopImg);
                    else if(num == 2)
                        item.shadowRoot.getElementById('customProps').style.setProperty("--background-img",   desktopImg2);
                    else if(num == 3)
                        item.shadowRoot.getElementById('customProps').style.setProperty("--background-img",   desktopImg3);
                    else if(num == 4)
                        item.shadowRoot.getElementById('customProps').style.setProperty("--background-img",   desktopImg4);
                }, 1000);

            item.parentElement.style.animation = "pulse 2s 1 forwards";
           
        }
           
    });
}