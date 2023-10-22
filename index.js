var names = prompt("enter your name");
if(names!=null){
 document.querySelector(".message").textContent="Hiii "+names+", I hope you are eagerly waiting for my marriage"+String.fromCodePoint(0x1F48D)+". This is the right time to announce our engagement"+String.fromCodePoint(0x148d)+" ceremony. Come and join us to celebrate this new chapter of my life"+String.fromCodePoint(0x1F60A);
}
else
document.querySelector(".message").textContent="Hiii, I hope you are eagerly waiting for my marriage"+String.fromCodePoint(0x1F48D)+". This is the right time to announce our engagement"+String.fromCodePoint(0x1F48d)+" ceremony. Come and join us to celebrate this new chapter of my life"+String.fromCodePoint(0x1F60A);

