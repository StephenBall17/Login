function validation(){
    var username=doucment.getElementByID("username").value;
    var password=doucment.getElementByID("password").value;
    if(username=="Stephen"&& password=="Password11"){
        alert("Login successful");
        return false;
    }else{
        alert("Login False");
    }
}