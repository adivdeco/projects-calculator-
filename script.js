let button = document.querySelectorAll("button")
let inp = document.querySelector("input")

let arraybutton= Array.from(button);
 let val=''

arraybutton.forEach(btn => {
    btn.addEventListener("click",function(event){
      
 if (event.target.innerHTML == 'Del') {
            val = val.substring(0 , val.length-1);
            inp.value=val;
        }
else if(event.target.innerHTML=='C'){
            val=''
            inp.value=val
        }
else if(event.target.innerHTML=='='){
         val = eval(val);
         inp.value = val;
         }    
else{
    val += event.target.innerHTML;
    inp.value=val;
   }
   

       
        console.log(event.target.innerHTML)
    })
});



