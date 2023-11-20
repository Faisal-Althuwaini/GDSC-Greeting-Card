// Changing the text inside the photo when textarea is changed

document.getElementById("text").addEventListener("keyup", function() {

    let querytext = document.querySelector("span");

    if (this.value != "") {
    querytext.innerHTML = this.value
    }
    else {
        querytext.innerHTML = "اكتب اسمك هنا"
    }


})

// if first choice in the menu is clicked change the bg 
document.getElementById("first-bg").addEventListener("click", function() {
    document.getElementById("img").src="/assets/1.png";
})

// if second choice in the menu is clicked change the bg 
document.getElementById("second-bg").addEventListener("click", function() {
    document.getElementById("img").src="/assets/2.png";
})

// if third choice in the menu is clicked change the bg 
document.getElementById("third-bg").addEventListener("click", function() {
    document.getElementById("img").src="/assets/3.png";
})



// html2canvas capture the div including the design and save it
function myfunc(){
    var element = document.getElementById("capture");

    html2canvas(element, {
        scale:4   
    } ).then(function(canvas) {
        canvas.toBlob(function(blob) {
            window.saveAs(blob, "GDSC");
        });
    });
};