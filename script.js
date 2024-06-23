var index = 1
slideFun(index)

function addSlide(num) {
    index = index + num
        // console.log(index)
    slideFun(index)
}

function slideFun(idx) {
    var allDivs = document.querySelectorAll(".slides")



    if (idx <= 0) {
        index = allDivs.length
    }

    if (idx > allDivs.length) {
        index = 1
    }

    for (var i = 0; i < allDivs.length; i++) {
        allDivs[i].style.display = "none"
    }

    allDivs[index - 1].style.display = "block"
}

// SIGN BUTTON 

function SignPage() {
    window.location.href = "index-2.html"
}



//how to automate above slider

function automateSlide() {
    addSlide(1)

    //call above function after each 4 seconds
    setTimeout(automateSlide, 4000)
}
automateSlide()