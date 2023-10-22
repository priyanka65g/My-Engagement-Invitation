var names = prompt("enter your name");
if(names!=null){
 document.querySelector(".message").textContent="Hiii "+names+", I hope you are eagerly waiting for my marriage. This is the right time to announce our engagement ceremony. Come and join us to celebrate this new chapter of my life";
}
else
document.querySelector(".message").textContent="Hiii, I hope you are eagerly waiting for my marriage. This is the right time to announce our engagement ceremony. Come and join us to celebrate this new chapter of my life"+String.fromCodePoint(0x1FAE3);

