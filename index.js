function load()
{
    var m=document.querySelector("#rules");
   m.style.display="block";
   var span=document.querySelector("#rclose");
    span.onclick=function(){
        m.style.display="none";
    }
}
function startime(){
    //alert("time started!");
    var m=document.querySelector("#rules");
    m.style.display="none";
    var btn=document.querySelector("#who-are-we");
    btn.innerHTML="STOP";
    btn.style.background="black";
    btn.style.color="white";
    btn.onclick=function (){
        alert("Cannot be stopped!");
    };
var time=document.querySelector(".time");
var timeins=60;
var timeinterval=setInterval(myinterval,1000);
function myinterval()
{
    if(timeins==0)
    {
        sorry();
        clearInterval(timeinterval);
    }
   var minutes=Math.floor(timeins/60);
   var seconds=Math.floor(timeins%60);
   seconds=seconds>9?seconds:"0"+seconds;
   time.innerHTML="0"+minutes+":"+seconds;
   timeins--;
}
}
var a=[];
var mp=new Map();
var c=0;
mp.set("r1c1","r3c3");//html
mp.set("r1c2","r4c4");//css
mp.set("r1c3","r4c3");//js
mp.set("r1c4","r4c2");//react
mp.set("r2c1","r3c4");//php
mp.set("r2c2","r3c1");//vs
mp.set("r2c3","r4c1");//node
mp.set("r2c4","r3c2");//boot
mp.set("r3c3","r1c1");//html
mp.set("r4c4","r1c2");//css
mp.set("r4c3","r1c3",);//js
mp.set("r4c2","r1c4");//react
mp.set("r3c4","r2c1");//php
mp.set("r3c1","r2c2");//vs
mp.set("r4c1","r2c3");//node
mp.set("r3c2","r2c4");//boot
var imgmp=new Map();
imgmp.set("r1c1","images/htmlpng.png");
imgmp.set("r3c3","images/htmlpng.png");
imgmp.set("r1c2","images/csspng.png");
imgmp.set("r4c4","images/csspng.png");
imgmp.set("r1c3","images/jsimg.png");
imgmp.set("r4c3","images/jsimg.png");
imgmp.set("r1c4","images/reactpng.png");
imgmp.set("r4c2","images/reactpng.png");
imgmp.set("r2c1","images/PHPpng.png");
imgmp.set("r3c4","images/PHPpng.png");
imgmp.set("r2c2","images/vspng.png");
imgmp.set("r3c1","images/vspng.png");
imgmp.set("r2c3","images/nodejspng.png");
imgmp.set("r4c1","images/nodejspng.png");
imgmp.set("r2c4","images/bootstrappng.png");
imgmp.set("r3c2","images/bootstrappng.png");
function replyclick()
{
    
    var id=event.target.id;
    //alert(id);
   document.getElementById(id).src=imgmp.get(id);
    work(id);

}
function work(id)
{
    a.push(id);
    if(a.length==2)
    {
         if(mp.get(a[0])==a[1])
         { 
            success(a);
             a.length=0;
         }
         else
         {
            //alert("f");
             failure(a);
             a.length=0;
         }
    }
}
function success(array)
{
   c++;
   var a1=document.getElementById(array[0]);
   var a2=document.getElementById(array[1]);
    a1.addEventListener("click",()=>(
        event.preventDefault()
    ));
    a2.addEventListener("click",()=>{
        event.preventDefault();
    });
    if(c==8)
    {
      congo();
    }
}
function failure(array)
{
    var a1=document.getElementById(array[0]);
    var a2=document.getElementById(array[1]);
    setTimeout(()=>{
    a1.src="images/bgimg.jpg";
    a2.src="images/bgimg.jpg";
    },500);
}
function congo(){
    var modal=document.querySelector("#congo");
    modal.style.display="block";
    var span=document.querySelector("#cclose");
    span.onclick=function(){
        window.close();
    }
}
function sorry(){
    var modal=document.querySelector("#sorry");
    modal.style.display="block";
    var span=document.querySelector("#closee");
    span.onclick=function(){
        modal.style.display="none";
        window.location.reload();
    }
}