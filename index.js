

var scrolling=document.getElementById('intro');
scrolling.addEventListener("click",function(event){
 
event.preventDefault();

    var current=0;
    var target=762;
    var scrollInterval= 
setInterval(function(){
    if(current>=target){
        clearInterval(scrollInterval);
        }
    current+=70;
    window.scrollBy(0,70);
     
},50);


});

var skill=document.getElementById('skill');
skill.addEventListener("click",function(event){
 
event.preventDefault();

    var current=0;
    var target=1209;
    var scrollInterval= 
setInterval(function(){
    if(current>=target){
        clearInterval(scrollInterval);
        }
    current+=70;
    window.scrollBy(0,70);
     
},50);


});

var skill=document.getElementById('touch');
skill.addEventListener("click",function(event){
 
event.preventDefault();

    var current=0;
    var target=1681;
    var scrollInterval= 
setInterval(function(){
    if(current>=target){
        clearInterval(scrollInterval);
        }
    current+=70;
    window.scrollBy(0,70);
     
},50);


});

