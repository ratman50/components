const mySlides=document.querySelectorAll(".mySlides");
let ind=1;

const prev=document.querySelector(".prev");
const next=document.querySelector(".next");
let inde=1;
showMenu(inde);
prev.addEventListener("click",()=>{
    --inde;
    inde=showMenu(inde);
})
next.addEventListener("click",()=>{
    ++inde;
    inde=showMenu(inde);
})




function showMenu(inde)
{
    mySlides.forEach(item=>{
        item.style.display="none";
    })
    let length=mySlides.length;
    if(inde>length)
        inde=1;
    if(inde<1)
        inde=length;
    mySlides[inde-1].style.display="";
    return inde;
}

