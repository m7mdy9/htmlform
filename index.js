document.addEventListener("DOMContentLoaded", function() {
    var catimage = document.getElementById("cat1")
    document.getElementById("yes1").addEventListener("submit", function(event) {
        event.preventDefault();
        // alert("form submitted!!");
        catimage.style.visibility = "visible"
        } );
});
