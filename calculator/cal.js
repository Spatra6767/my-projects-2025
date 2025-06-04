let boxes=document.querySelectorAll(".box");
let liveType=document.querySelector(".live-type");
let Equal=document.querySelector(".equal");
let Result=document.querySelector(".result");
let Ac=document.querySelector(".Ac");
let Cross=document.querySelector(".cross");
let backCross=document.querySelector(".back-cross");


let i=0;
let dataSave=[];

boxes.forEach((box)=>{
  box.addEventListener("click",()=>{
    liveType.innerText+=box.innerText;
    
    dataSave[i]=liveType.innerText;
    console.log(`Saved Input [${i}]: ${(dataSave[i])}`);
    i++;

     text=liveType.innerText;
     replacedtext=(text.replace(/X/g, "*")).replace(/÷/g, "/");
     textValue=eval(replacedtext);
   
   if(refresh===true){
      Result.innerText='';
      liveType.innerText=box.innerText;
      refresh=false;
    }
  })
})
 
 
Equal.onclick=()=>{
Result.innerText=textValue;
console.log(textValue);
refresh=true;
i=0;
}
Ac.onclick=()=>{
  liveType.innerText="";
  Result.innerText="";
  i=0;
}

backCross.onclick=()=>{
  if(i>1){
   liveType.innerText=`${dataSave[i-2]}`;}
   else{
    liveType.innerText='';
   }
   i--;
   text=liveType.innerText;
     replacedtext=(text.replace(/X/g, "*")).replace(/÷/g, "/");
     textValue=eval(replacedtext);
   

}

