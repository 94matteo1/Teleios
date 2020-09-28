const dualContainerTemplate = document.createElement('template');
 
dualContainerTemplate.innerHTML = `
	<style>

    .background{
        max-width: 100%;
        margin: 0;
        padding: 0;
        border: 0;
       
        display: flex;
        flex-flow: row wrap;
        margin: 3.125rem auto 0;
        margin-top: 0
    }

    .single-quod{
        flex: 1 1 49.5%;
        height: 580px;
        
        padding-bottom: 10px;
    }

    .left{
        padding: 0 5px 10px 0;
    }

    .right{
        padding: 0 0 10px 5px;
    }


    .item{

        width: 100%;
        height: 100%;
        display: block;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }

    .item-mobile {
		width:100%;
		height: 100%;
		background-position: center bottom; 
		background-repeat: no-repeat;
		display: flex;
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
        font-size: 28px;
        line-height: 1;
        letter-spacing: .0625rem;
        text-transform: uppercase;
     
    }

    .txtSmall{
        font-family: 'Montserrat', sans-serif;
        font-size: 20px;
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

        .item-mobile{
			
			background-size: cover;
			width:100%!important;
			
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

    <ul class="background">
        <div class="single-quod left"
            <div >
                <div class="item" id="item1" >
                    <div class="item-mobile" id="item1-mobile">
                        <h1 class="textContainer">
                            <slot name="quodTextBig" class="txtBig">My default text 3</slot>
                            <slot name="quodTextSmall" class="txtSmall">My default text 3</slot>
                        </h1>
                    </div>
                </div>    						
            </div>
        </div>
        <div class="single-quod right"
            <div>
                <div class="item" id="item2">
                    <div class="item-mobile" id="item2-mobile">
                        <h1 class="textContainer">
                            <slot name="quodTextBig2" class="txtBig">My default text 3</slot>
                            <slot name="quodTextSmall2" class="txtSmall">My default text 3</slot>
                        </h1>
                    </div>
                </div>    						
            </div>
           
        </div>
    </ul>

    
	
        
`;

customElements.define('dual-container',
  class extends HTMLElement {
    constructor() {
      super();

	  const templateContent = dualContainerTemplate.content;

      this.attachShadow({mode: 'open'}).appendChild(
        templateContent.cloneNode(true)
      );
    }
  }
);


containerMain = document.querySelectorAll('dual-container');

containerMain.forEach(function (item) {

    var item1_backCol;
	var item1_desktopUrl;
    var item1_mobileUrl;

    var item2_backCol;
	var item2_desktopUrl;
	var item2_mobileUrl;

	[item.attributes].forEach(attr => {

        item1_backCol = attr[0].value;

        item1_desktopUrl = attr[1].value;

        item1_mobileUrl = attr[2].value;

        item2_backCol = attr[3].value;
        item2_desktopUrl = attr[4].value;

        item2_mobileUrl = attr[5].value;
    });
    
    item.shadowRoot.getElementById('item1').style.backgroundColor=item1_backCol
	item.shadowRoot.getElementById('item1').style.backgroundImage=item1_desktopUrl
    item.shadowRoot.getElementById('item1-mobile').style.backgroundImage=item1_mobileUrl

    item.shadowRoot.getElementById('item2').style.backgroundColor=item2_backCol
	item.shadowRoot.getElementById('item2').style.backgroundImage=item2_desktopUrl
    item.shadowRoot.getElementById('item2-mobile').style.backgroundImage=item2_mobileUrl
 

});