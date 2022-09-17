var num = 0;
var upgraded=false;

function clicker(){
    num++;
   document.querySelector(".cookieCounter").innerHTML = num+ " " + "Cookies";
   console.log(num);
   if(num==25){
    alert("You reached 25 cookies! Upgrade!")}

   else if (num ==100){
    alert("You reached 100 cookies! Upgrade!")
   }
}

function cursorClicks(){
    if (num>=25 && upgraded === false){
        upgraded = true;
        console.log("Bought upgrade");
        var intervalID = setInterval(function(){
            clicker();
        }, 1000);}
         else if (num>=100 && upgraded === true){
            upgraded = false;
            console.log("bought granny upgrade");
            var intervalID2 = setInterval(function(){
                clicker();
            }, 100);
         }
        }
    
    