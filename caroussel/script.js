const mySlides=document.querySelectorAll(".mySlides");
const caption=document.querySelector(".caption");
let title=["The Woods","Cinque Terre","Mountains and fjords","Northern Lights","Nature and sunrise","Snowy Mountains"];
let ind=1;

const prev=document.querySelector(".prev");
const next=document.querySelector(".next");
const image=document.querySelectorAll(".image");
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
    document.querySelector(".image_active").classList.remove('image_active');
    let length=mySlides.length;
    if(inde>length)
        inde=1;
    if(inde<1)
        inde=length;
    mySlides[inde-1].style.display="";
    caption.innerText=title[inde-1];
    image[inde-1].classList.add('image_active');
    return inde;
}

