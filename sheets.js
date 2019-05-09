$.post('https://node.c-development.com', {id_token:"key"})
        .then(function(user) {
            // The user is now signed in on the server //too
            // and the user should now have a session //cookie
            // for the whole site. 
  console.log(user)
  
  
      
$.get(`https://sheets.googleapis.com/v4/spreadsheets/17LQRcFltbcj-JjAws34frcPM00Fv99YWXHbVmmDFnD4/values/Sheet1!A1:D5?key=${user}`, function (response2) {
//var source = $(`${response}`);
//$('#files js-navigation-container js-active-navigation-container').html(source),function(responce2){
//console.log(responce2)
//}});
  var cleanText = response2.replace(/<\/?[^>]+(>|$)/g, "");
  var trimmed = cleanText.trim()
  var prep1  = trimmed.split(" ")
  var filtered = prep1.filter(function(value, index, arr){
    return value.includes(".txt")
})
console.log(filtered)
}
)

 })