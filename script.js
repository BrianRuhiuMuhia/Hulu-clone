const modal=document.querySelector(".modal");
const logInBtn=document.querySelector(".header__btn");
const closeBtn=document.querySelector(".close-btn");
const body=document.querySelector("body");
logInBtn.addEventListener("click",function()
{
    modal.classList.add("show")
    body.style.overflowY="hidden"
})
closeBtn.addEventListener("click",function()
{
    modal.classList.remove("show")
    body.style.overflowY="scroll"
})