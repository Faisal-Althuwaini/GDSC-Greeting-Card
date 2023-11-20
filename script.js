document.getElementById("text").addEventListener("keyup", function() {

    let querytext = document.querySelector("span");

    if (this.value != "") {
    querytext.innerHTML = this.value
    }
    else {
        querytext.innerHTML = "اكتب اسمك هنا"
    }


})


function myfunc(){
    // if you are using a different 'id' in the div, make sure you replace it here.
    var element = document.getElementById("capture");

    html2canvas(element, {
        scale:4   
    } ).then(function(canvas) {
        canvas.toBlob(function(blob) {
            window.saveAs(blob, "GDSC");
        });
    });
};