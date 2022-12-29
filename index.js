var MenuItems = document.getElementById("MenuItems");

MenuItems.style.maxHeight = "0px";


function menutoggle(){
    if(MenuItems.style.maxHeight == "0px" )
    {
        MenuItems.style.maxHeight = "200px";
    }
    else
    {
        MenuItems.style.maxHeight = "0px";
    }
}







    /*------Forms--------*/


    var LoginForm = document.getElementById("LoginForm");
    var RegForm = document.getElementById("RegForm");
    var Indicator = document.getElementById("Indicator");


        function register(){

            RegForm.style.transform = "translateX(0px)";
            LoginForm.style.transform = "translateX(0px)";
            Indicator.style.transform = "translateX(100px)";

        }

        function login(){

            RegForm.style.transform = "translateX(300px)";
            LoginForm.style.transform = "translateX(300px)";
            Indicator.style.transform = "translateX(0px)";


        }


    /*----------------js for account page-------------*/


    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');
    
    signUpButton.addEventListener('click', () =>
    container.classList.add('right-panel-active'));
    
    signInButton.addEventListener('click', () =>
    container.classList.remove('right-panel-active'));




        /*<p>&#9733; &#9733; &#9733; &#9733; &#9733; &#9734;</p>--*/