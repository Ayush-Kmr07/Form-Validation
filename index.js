function clearErrors(){

    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }


}
function seterror(id, error){
    
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}


function formValidation(){
    var returnval = true;
    clearErrors();

    
    var phone = document.forms['myForm']["fphone"].value;
    if (phone.length != 10){
        seterror("phone", "*Phone number should be of 10 digits!");
        returnval = false;
    }

    if((phone[0]!=9) && (phone[0]!=8) && (phone[0]!=7) && (phone[0]!=6)){
        seterror("phone","*Phone number should start with 9,8,7 or 6");
        returnval=false;
    }

    var password = document.forms['myForm']["fpass"].value;
    
    var passw= /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    if(password.match(passw)){
        
    }
   else{
    seterror("pass", "Enter Password in Correct Format");
    returnval=false;
   }  

    var cpassword = document.forms['myForm']["fcpass"].value;
    if (cpassword != password){
        seterror("cpass", "*Password and Confirm password should match!");
        returnval = false;
    }

    return returnval;
}


