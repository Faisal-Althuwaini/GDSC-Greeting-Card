// Changing the text inside the photo when textarea is changed
document.getElementById("text").addEventListener("keyup", function() {

    let querytext = document.querySelector("#span-1");
    let querytext2 = document.querySelector("#span-2");
    let querytext3 = document.querySelector("#span-3");
    let querytext4 = document.querySelector("#span-4");

    if (this.value != "") {
    querytext.innerHTML = "- " + this.value
    querytext2.innerHTML = "- " + this.value
    querytext3.innerHTML =  "- " +  this.value
    querytext4.innerHTML =  "- " +  this.value
    }
    else {
        querytext.innerHTML = "اكتب اسمك هنا"
        querytext2.innerHTML = "اكتب اسمك هنا"
        querytext3.innerHTML = "اكتب اسمك هنا"
        querytext5.innerHTML = "اكتب اسمك هنا"
    }


})

document.getElementById("span-1").style.display = 'block';
document.getElementById("span-2").style.display = 'none';
document.getElementById("span-3").style.display = 'none';
document.getElementById("span-4").style.display = 'none';

// if first choice in the menu is clicked change the bg 
document.getElementById("first-bg").addEventListener("click", function() {
    document.getElementById("img").src="/assets/1.webp";


    // span.style.marginTop = "250px"
    // span.classList.remove("text-color-white")
    // span.classList.add("text-color-blue")

       
    document.getElementById("span-1").style.display = 'block';
    document.getElementById("span-2").style.display = 'none';
    document.getElementById("span-3").style.display = 'none';
    document.getElementById("span-4").style.display = 'none';

    document.getElementById('capture-story').id = "capture"
    document.getElementById("img").classList.remove("img-story")

})

// if second choice in the menu is clicked change the bg 
document.getElementById("second-bg").addEventListener("click", function() {
    document.getElementById("img").src="/assets/2.webp";
    // let span = document.getElementById("span-name")
    // span.classList.remove("text-color-blue")
    // span.classList.add("text-color-white")
    // span.style.marginTop = "300px"

    document.getElementById("span-2").style.display = 'block';
    document.getElementById("span-1").style.display = 'none';
    document.getElementById("span-3").style.display = 'none';
    document.getElementById("span-4").style.display = 'none';

    
    document.getElementById('capture-story').id = "capture"
    document.getElementById("img").classList.remove("img-story")
 

})

// if third choice in the menu is clicked change the bg 
document.getElementById("third-bg").addEventListener("click", function() {
    document.getElementById("img").src="/assets/3.webp";
    // let span = document.getElementById("span-name")
    // span.classList.remove("text-color-white")
    // span.classList.add("text-color-blue")
    document.getElementById("span-1").style.display = 'none';
    document.getElementById("span-2").style.display = 'none';
    document.getElementById("span-3").style.display = 'block';
    document.getElementById("span-4").style.display = 'none';

    document.getElementById('capture-story').id = "capture"
    document.getElementById("img").classList.remove("img-story")


})

// if fourth choice in the menu is clicked change the bg 
document.getElementById("fourth-bg").addEventListener("click", function() {
    document.getElementById("img").src="/assets/official-story.webp";
    document.getElementById('capture').id = "capture-story"
    document.getElementById("img").classList.add("img-story")

    document.getElementById("span-1").style.display = 'none';
    document.getElementById("span-2").style.display = 'none';
    document.getElementById("span-3").style.display = 'none';
    document.getElementById("span-4").style.display = 'block';



})




// html2canvas capture the div including the design and save it
function myfunc(){

    //  check if capture id exist do this
    if (document.getElementById("capture")) {
        var element = document.getElementById("capture");

        html2canvas(element, {
            scale:4   
        } ).then(function(canvas) {
            canvas.toBlob(function(blob) {
                window.saveAs(blob, "GDSC");
            });
        });
        //  if it's not exist do the story size
    } else {
        var element = document.getElementById("capture-story");

        html2canvas(element, {
            scale:4   
        } ).then(function(canvas) {
            canvas.toBlob(function(blob) {
                window.saveAs(blob, "GDSC");
            });
        });
    }



};


// this for capture story size
// function myfunc() {
//     var element = document.getElementById("capture");


    
//     html2canvas(element, {
//         scale: 4
//     }).then(function(canvas) {
//         canvas.toBlob(function(blob) {
//             window.saveAs(blob, "GDSC");
//         });
//     });
// };

// // pre loader 
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("loader").style.visibility = 'hidden'
}, false);