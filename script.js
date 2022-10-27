let allchar="12jklmn789!@%0ab*(c3456defghiopt#$uvwxyzABC^&)DEFGHIJKLMNOPQqrsRSTUVWXYZ",
btnEle=document.getElementById("gen"),passwrd="";
inpCharEle=document.getElementById("noChar"),
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
    console.log("hi");
    resetRes();
    let noChar=inpCharEle.value;
    for(i=0;i<noChar;i++){
        let random=ranGen(noChar);
        passwrd+=allchar.substring(random,(random+1));
    }
    console.log(passwrd);
    result.style.display="block";
    resPass.innerHTML="The Generated Password is "+passwrd
    inpCharEle.value=""
};

btnEle.addEventListener("click",ranPassGen);
console.log(btnEle);