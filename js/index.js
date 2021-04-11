// navbar here 
document.querySelector('.burger').addEventListener('click',()=>{

    document.querySelector('nav ul').classList.toggle('active');
    document.querySelector('.header-content').classList.toggle('header-content1');
    document.querySelector("nav").classList.toggle('nav-active');      
    
    //.style.position="fixed";

});

window.addEventListener('scroll',()=>{
/*
   if(document.body.scrollTop>= 10)
   {
       document.querySelector('nav').style.opacity="0";
       console.log("asdas")
   }
   else if (document.body.scrollTop>150)
   {
    document.querySelector('nav').style.opacity="1";
   }

*/


if(window.scrollY >= 150 )
{
    document.querySelector('nav').style.opacity="0.9";
       console.log("asdas")
}
else
{
    document.querySelector('nav').style.opacity="1";

}



  
    
});
// spinner page here 

window.addEventListener('load',()=>{

    document.querySelector('.loader').classList.add('fade');
  

});


setTimeout(()=>{

    document.querySelector('.loader').remove();

}, 1000)