let allchar="12jklmn789!@%0ab*(c3456defghiopt#$uvwxyzABC^&)DEFGHIJKLMNOPQqrsRSTUVWXYZ",
btnEle=document.getElementById("gen"),passwrd="";
inpCharEle=document.getElementById("noChar"),
copyEle=document.getElementById("copy"),
resPass=document.getElementById("passRes"),result=document.getElementById("result"),
ranGen=(numChar)=>{
    let ran=Math.floor(Math.random()*numChar);
    console.log(ran);
    return ran;
},resetRes=()=>{
    // resPass.innerHTML="";
    passwrd="";
        
},
ranPassGen=()=>{
    resetRes();
    let noChar=inpCharEle.value;
    for(i=0;i<noChar;i++){
        let random=ranGen(noChar);
        passwrd+=allchar.substring(random,(random+1));
    }
    console.log(passwrd);
    result.style.display="block";
    resPass.innerHTML="The Generated Password is ";
    copy=document.createElement("span");
    copy.setAttribute("id","copy-text");
    resPass.appendChild(copy);
    copy.innerHTML=passwrd;
    inpCharEle.value=""
};

copyEle.addEventListener("click",()=>{
    copyText=document.getElementById("copy-text").innerHTML;
    navigator.clipboard.writeText(copyText).then(()=>{
        alert("Password has been copied");
    })

})
btnEle.addEventListener("click",ranPassGen);
console.log(btnEle);