const buttonImgsTemplate = document.createElement('template');
 
buttonImgsTemplate.innerHTML = `
    <style>

    
    .button-imgs{
        outline:none;
		width: 20px;

        border:none;
        padding-top: 5px;
        padding-bottom: 10px;
        text-align: center;
        color: #000;
        text-transform: uppercase;
        font-weight: 600;
        margin-left: 20px; 
        cursor: pointer;
        display: inline-block;
    }

    .outline {
        background-color: #f5f5f5;
        border: 3px solid #00d7c3;
        border-radius: 50px;
        -webkit-transition: all .15s ease-in-out;
        transition: all .15s ease-in-out;
        color: #00d7c3;
    }

    .outline:hover {
        box-shadow: 0 0 10px 0 #00d7c3 inset, 0 0 10px 2px #00d7c3;
        border: 3px solid #00d7c3;
    }


    
 

    @media (min-width : 0px) and (max-width: 767px){
		

	}
    </style>
    
    <Button class="button-imgs outline" id="button-imgs">
	    
    </Button>
    
    
	
        
`;

customElements.define('button-imgs',
  class extends HTMLElement {
    constructor() {
      super();

		const templateContent = buttonImgsTemplate.content;

    	this.attachShadow({mode: 'open'}).appendChild(
        	templateContent.cloneNode(true)
      );
    }
  }
);


containerMain = document.querySelectorAll('button-imgs');

containerMain.forEach(function (item) {
    
	  var functionToCall;
	  var idProp;
	  var num

    [item.attributes].forEach(attr => {

		functionToCall = attr[0].value;
		idProp = attr[1].value;
		num = attr[2].value;



	  });
	  
	item.shadowRoot.getElementById('button-imgs').setAttribute( "onClick", "javascript: " + functionToCall + "(" + idProp +"," + num +")" + ";" );

});