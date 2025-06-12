let dataCollection = document.querySelector(".data-collection");
let dtcollection = document.querySelector("#data-collection");
let buttons = document.querySelectorAll(".button");
let foryes=document.querySelector("#foryes");
let yes = document.querySelector(".yes");
let no = document.querySelector(".no");
let playerXname = document.querySelector(".playerXname");
let playerOname = document.querySelector(".playerOname");
let submit=document.querySelector(".submit");
let startCancel=document.querySelector(".start-cancel");
let btns=document.querySelectorAll(".btn");

foryes.style.display="none";
dataCollection.style.display="none";

btns.forEach(btn=>{
  btn.addEventListener("click", ()=>{
    if (btn.innerText==="Start"){
      dataCollection.style.display="flex";
      startCancel.style.display="none";
    }
  })
})


buttons.forEach(button => {
  button.addEventListener("click", () => {
    if(button.innerText==="Yes"){
    dataCollection.style.display ="none";
    foryes.style.display="block";
    dtcollection.style.width="600px";}
    else if(button.innerText==="No"){
    dtcollection.style.display="none";
    }
  });
});
submit.addEventListener("click",()=>{
  console.log(playerXname.value);
  console.log(playerOname.value);
  dtcollection.style.display="none";
})
