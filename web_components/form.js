const form = document.createElement('template');
 
form.innerHTML = `


<style>

.info-contacts{
    height: 6.250rem;
    padding-top: 3.125rem;
}


.text-center{
    
    letter-spacing: .0625rem;
    text-align: center;
    align-items: center;
    justify-content: center;
    height: 100%;
    display: flex;
}

.form-text{
    font-family: 'Roboto', sans-serif;
    font-size: 1.125rem;
    line-height: 1.5;
    display: block;
    letter-spacing: .0625rem;
}

.form{
    background-color: #091d3e; 
    height: 100%;
    min-height: 75vh;
    padding-bottom: 3.125rem;
}
  
.col-50 {
    float: left;
    width: 50%;
    margin-top: 6px;
    margin-left: 25%;
}

.col-25 {
    float: left;
    width: 5%;
    margin-top: 22px;
    margin-left: 25%;
}

.col-75 {
    float: left;
    width: 50%;
    margin-top: 6px;
}


.form-text{
    color: whitesmoke;
    font-family: 'Roboto', sans-serif;
}

.row:after {
    content: "";
    display: table;
    clear: both;
}

.contact-info-container{
    
    width: 75%;
    height: 100%;
    position: relative;

}

input[type=text], select, textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
    font-family: 'Roboto', sans-serif;
}
  
label{
    padding: 12px 12px 12px 0;
    display: inline-block;
    font-family: 'Roboto', sans-serif;
}
  
input[type=submit] {
    background-color: #4CAF50;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    float: right;
    font-family: 'Roboto', sans-serif;
}
  
input[type=submit]:hover{
    background-color: #45a049;
    font-family: 'Roboto', sans-serif;
}

.product-button{
    margin-top: 10%;
    width: 120px ;
    font-family: 'Roboto', sans-serif;
    font-size: medium;
    height: 50px;
    border-radius: 35px;
    color: whitesmoke;
    background-color: #0071e3;
    float: right;
}


@media (min-width : 0px) and (max-width: 767px){
    .info-contacts{
        width: 75%;
        margin-left: 12.5%;
        padding-top: 5.125rem;
    }

    .col-50{
        margin-left: 10%;
        width: 75%;
    }

    .col-25{
        margin-left: 10%;

    }

    .col-75{
        margin-left: 5%;
        width: 75%;
    }


}


</style>

<script src="https://unpkg.com/@webcomponents/webcomponentsjs@^1.0.0/webcomponents-loader.js"></script>

<form class="form" action="email_form.php" method="post" name="form">
    <div class="info-contacts" >
        <h1 class="text-center"">
            <span class="form-text" style="color: white;">Fill the form below for further information, an expert from our team will get back to you as soon as possible</span>
        </h1>
    </div>
    <div class="row" >
        <div class="col-50" style="margin-top: 3.25em">
            <input type="text" id="fname" name="firstname" placeholder="Name*">
        </div>
    </div>
     <div class="row">
        <div class="col-50">
            <input type="text" id="lname" name="lastname" placeholder="Lastname*">
        </div>
    </div>
    <div class="row">
        <div class="col-50">
            <input type="text" id="lname" name="email" placeholder="Email*">
        </div>
    </div>
    <div class="row">
        <div class="col-50">
            <textarea id="subject" name="msg" placeholder="Your question" style="height:200px"></textarea>
        </div>
    </div>

    <div class="row">
        <div class="col-50">           

            <button type="submit" name="submit" value="Send" class="btn btn-primary product-button">Submit</button>
        </div>
    </div>
</div>
   
</form>



`;


 
class Form extends HTMLElement {
  constructor() {
    super();
 
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(form.content.cloneNode(true));
  }
}
 
window.customElements.define('fo-orm', Form);


