const containerMainTemplate = document.createElement('template');
 
containerMainTemplate.innerHTML = `
	<style>
    .background{
        padding-bottom: 10px;
        background-color: #f5f5f5;
    }

    .item{
        background-position: center bottom;
        background-repeat: no-repeat;
        background-size: cover;
        min-height: 75vh;
    }

    .itemMobile{
        width:100%;
		height: 100%;
		background-position: center bottom; 
		background-repeat: no-repeat;
        min-height: 75vh;
		background-size: 0 0;
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

	<div class="background">
        <div id="backColor">
            <div class="item" id="back">
                <div class="itemMobile" id="backMobile">
                    <video autoplay loop muted playsinline>
                        <source src="img/giftomp4.webm" type="video/webm">
                        <source src="./img/Def/Desktop/Index/video.mp4" type="video/mp4">
                            <h1 class="textContainer">
                            <slot name="containerMaintextBig" class="txtBig">My default text 3</slot>
                             <slot name="containerMaintextSmall" class="txtSmall">My default text 3</slot>
                         </h1>
                    </video>
                </div>
            </div>
        </div>  
    </div>

    
	
        
`;

customElements.define('container-main',
  class extends HTMLElement {
    constructor() {
      super();

	  const templateContent = containerMainTemplate.content;

      this.attachShadow({mode: 'open'}).appendChild(
        templateContent.cloneNode(true)
      );
    }
  }
);


containerMain = document.querySelectorAll('container-main');




containerMain.forEach(function (item) {
    var backgroundCol;
    var gradientCol;
	var desktopUrl;
	var mobileUrl;

	[item.attributes].forEach(attr => {
        backgroundCol = attr[0].value;
        gradientCol = attr[1].value;
		//Mobile background image
        desktopUrl = "url("+attr[2].value+")";
        mobileUrl = "url("+attr[3].value+")";

	
    });
    
    item.shadowRoot.getElementById('backColor').style.backgroundColor=backgroundCol
	item.shadowRoot.getElementById('back').style.backgroundImage=gradientCol + desktopUrl
    item.shadowRoot.getElementById('backMobile').style.backgroundImage=gradientCol + mobileUrl
    

});
