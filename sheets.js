$.post('https://node.c-development.com', {id_token:"key"})
        .then(function(user) {
            // The user is now signed in on the server //too
            // and the user should now have a session //cookie
            // for the whole site. 
  console.log("Key Retrieved")
        
  
  
      
$.get(`https://sheets.googleapis.com/v4/spreadsheets/1Df2YX5DcUY1bWJRlxcona9RsL0iEVH_W9RM7P57KXwk/values/Sheet1!A3:C?key=${user}`, function (response2) {
//var source = $(`${response}`);
//$('#files js-navigation-container js-active-navigation-container').html(source),function(responce2){
console.log(response2)
        response2.values.forEach(function(e){
                console.log(e)
        document.getElementById("box2").innerHTML += `<p> ${e[0]}: </p> <p> ${e[1]}</p> <p>${e[2]}</p> <p></p><hr>`        })
        
//}});

}
)
        $.get(`https://sheets.googleapis.com/v4/spreadsheets/1Df2YX5DcUY1bWJRlxcona9RsL0iEVH_W9RM7P57KXwk/values/Sheet1!E3:E?key=${user}`, function (response3) {
              console.log(response3)
                document.getElementById("mainbody").innerHTML+= response3.values[0] 
                 document.getElementById("announce").innerHTML= response3.values[14]
                var length = document.getElementById("announce").innerHTML= response3.values[14]
                var splot = document.getElementById("announce").innerHTML.split("");
              var initial =  document.getElementById("announce").getBoundingClientRect().width / 16 
              var height2 =  document.getElementById("announce").getBoundingClientRect().height
              console.log(initial)
              document.getElementById("announce").style.height = height2
                var inlined = initial
               setInterval(function(){
                       inlined +=-.05
                      
                    
                 document.getElementById("announce").style.textIndent = inlined.toString() + "em"
                       if(inlined  < initial * -1){
                       inlined = initial
                       }
},10)
                
                
        });

 }) 
 
