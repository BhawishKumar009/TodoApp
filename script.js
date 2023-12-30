const inptask=document.getElementById("inptask");
const taskbtn=document.getElementById("butn");
const bottom=document.getElementById("bottom");
const BottomElement=document.getElementById("bottomElement");
var counter=0;
var bottomElement;
var para;
var Tickbtn;
var Xbtn;
var para;

taskbtn.addEventListener("click",()=>{
    counter+=1
    para=document.createElement("p");
    Xbtn=document.createElement("button");
    Tickbtn=document.createElement("button");
    bottomElement=document.createElement("div");
    BottomElement.appendChild(bottomElement);
    const taskId=counter;
    bottomElement.id=taskId;
    Tickbtn.innerHTML="✓"
    Xbtn.innerHTML="X";
    Tickbtn.style.padding="8.5px";
    Xbtn.style.padding="10px";
    bottomElement.appendChild(Tickbtn);
    bottomElement.appendChild(Xbtn);
    bottomElement.appendChild(para);
    para.innerText=inptask.value;
    console.log(counter);
    TickFunction(taskId);
    Xfunction(taskId);
    inptask.value="";
});

const TickFunction = (taskId) => {
    if (Tickbtn) {
      Tickbtn.addEventListener("click", () => {
        const taskContainer=document.getElementById(taskId);
        const paraElement=taskContainer.querySelector("p");
        
        console.log(taskContainer);
        paraElement.style.textDecoration="line-through";
      });
    }
  };
const Xfunction=(taskId)=>{
    Xbtn.addEventListener("click",()=>{
        const taskContainer=document.getElementById(taskId);
        taskContainer.remove();
        counter-=1
       

    })
}
  
