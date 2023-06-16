var s="";
var n=0;
var a=Math.ceil(Math.random()*100);
//console.log(a);
document.getElementById("check").onclick = function(){
    
    var inp = parseInt(document.getElementById("num").value);
        
    if(inp<a){
        n++;
       s= "Try "+n+" ,Too high! Try a greater number";  
    }
    if(inp>a){
        n++;
        s = "Try "+n+" ,Too low! Try a smaller number";  
    }
    if(inp==a){
        n++;
        s = "Congratulations!!! You have got the number in "+n+" times"; 
        n=n-1;
      
    }

    document.getElementById("dis").textContent =s;
}

