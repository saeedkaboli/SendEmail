//variable
var El={
    Rest:document.getElementById("Res"),
    Send:document.getElementById("Sen"),
    Email:document.getElementById("email"),
    Sub:document.getElementById("Subject"),
    mes:document.getElementById("Message"),
    Box:document.getElementById("Box")
}

//Event
El.Rest.addEventListener("click",removeValue);
El.Email.addEventListener("mouseleave",email);
El.Sub.addEventListener("mouseleave",SubJect);
El.mes.addEventListener("focus",SubJect);
// El.Send.addEventListener("click",All);
El.mes.addEventListener("mouseleave",MaSS);
El.Box.addEventListener("mousemove",All);
El.Send.addEventListener("click",Sent);
// All();


//function
// function btn Rest
function removeValue(){
    El.Email.value="";
    El.Sub.value="";
    El.mes.value="";
    El.Email.style.background="";
    El.Sub.style.background="";
    El.mes.style.background="";
    if(El.Box.children=="img"){
        Image.remove();
    }

}
// ValueData Email
function email(){
    var t=El.Email.value;
    var  b=t.slice(-10);
    // console.log(b);
if(b !="@gmail.com" || b==-1){
// alert("خطا!")
El.Email.style.background="#ff3949"
El.Email.style.borderBottom="1px solid #ff3949";
}
else{
    El.Email.style.background="#02c95c";
    El.Email.style.borderBottom="1px solid #02c95c";
    return true;
}

}
// ValueDate Subject
function SubJect(){
    var S=El.Sub.value;
    // console.log(S);
    if(S==""){
        El.Sub.style.background="#ff3949"
        El.Sub.style.borderBottom="1px solid #ff3949";
    }
    else{
        El.Sub.style.background="#02c95c";
        El.Sub.style.borderBottom="1px solid #02c95c";
        return true;   
    }
}
// ValueDate Box Massege
function MaSS(){
    let M=El.mes.value;
    if(M==""){
        El.mes.style.background="#ff3949"
        El.mes.style.borderBottom="1px solid #ff3949";
    }
    else{
        El.mes.style.background="#02c95c";
        El.mes.style.borderBottom="1px solid #02c95c";
        return true; 
    }
}
function All(e){
    e.preventDefault();
    var E=El.Email.style.background;
    var S=El.Sub.style.background;
    // console.log(E);
    // console.log(S);
    if(E=="rgb(255, 57, 73)"  || E=="rgb(0, 97, 153)" || E==""){
        El.Send.style.background="gray";
        El.Send.style.cursor="none";
    }
    else{
        El.Send.style.background="blue";
        El.Send.style.borderRadius="10px";
        El.Send.style.cursor="pointer";
    }
}
function Sent(e){
    var Sb=El.Send.style.background
    if(Sb=="blue"){
        El.Box.style.height="500px";
        if(e.target.id=="Sen"){
            var parent=e.target.parentElement.parentElement.parentElement;
             var Ok=document.createElement("div");
             var png=document.createElement("img");
             png.src="mail.png"
             Ok.id="Img";
             parent.append(Ok);
             setTimeout(function(){
                 png.style.transition="2s";
                Ok.append(png)
             },"2000")
           
        }
    }
    else{
        console.log("E");
    }
}


