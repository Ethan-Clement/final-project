
//comment obj
//name
//post


/*<form>
  <label for="Display Name">Display Name</label>
  <input id="displayName" placeholder="Display Name">
</div>
    <label for="Comment">Comment</label>
    <input id="comment" placeholder="Comment">
  </div>
  <div id="submitButton">Submit</div>
  <div id="output"></div>
</form>*/


$('#submitButton').on('click', function(){
    console.log('click')
$('#comment').append(
    "<div class='commentApp'>" +
        "<img class='image' src='circle.png' alt='Circle'>" +
        "<h5>" + (displayName.value) + "</h5>" +
        "<h2>" + (fComment.value) + "</h2>" +
        "<div class='editDelete'>" +
            "<p class='delete'>Delete</p>" +
            "<p class='edit'>Edit</p>" +
        "</div>" +
        "<div class='noShow editBox'>" +
            "<input class='submitButtonEdit2' type='text' placeholder='" + (fComment.value) + "'>" +
            "<div class='submitButtonEdit'>Submit</div>" + 
        "</div>" +
    "</div>")
});
$('#comment').on('click', '.delete', function(){
console.log('Delete')
let commentParent = $(this).parents()[1];
$(commentParent).remove()
})
$('#comment').on('click', '.edit', function(){
console.log('Edit')
let pdiv = $(this).parents()[0]
let editdiv = $(pdiv).next()[0]
$(editdiv).toggleClass("noShow")
})
$('#comment').on('click', '.submitButtonEdit', function(){
console.log('Edit2')
let pdiv = $(this).parents()[0]
$(pdiv).toggleClass("noShow")
let padiv = $(this).parents()[0]
let bdiv = $(padiv).children()[0]
let varval = $(bdiv).val()
let pardiv = $(this).parents()[1]
let cdiv = $(pardiv).children()[2]
$(cdiv).text($(varval))
})
//$(this) to select what is clicked on, delete .remove()