$.post('https://node.c-development.com', {id_token:"key"})
        .then(function(user) {
            // The user is now signed in on the server //too
            // and the user should now have a session //cookie
            // for the whole site. 
  console.log("Key Retrieved")
        
  
  
      
$.get(`https://sheets.googleapis.com/v4/spreadsheets/1Df2YX5DcUY1bWJRlxcona9RsL0iEVH_W9RM7P57KXwk/values/Sheet1!A3:D?key=${user}`, function (response2) {
//var source = $(`${response}`);
//$('#files js-navigation-container js-active-navigation-container').html(source),function(responce2){
console.log(response2)
        response2.values.forEach(function(e){
        document.getElementById("box2").innerHTML += `<p> ${e[0]}: </p> <p> ${e[1]}</p> <p>e[2]</p> <p></p><hr>`        })
        
//}});

}
)

 })
 
