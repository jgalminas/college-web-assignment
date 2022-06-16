
    //getting all elements used in the calculator and asigning them to variables
    var calculateButton = document.getElementById('calculate');
    var result = document.getElementById('result')
    var addHeight = document.getElementById('+height')
    var addWidth = document.getElementById('+width')
    var removeHeight = document.getElementById('-height')
    var removeWidth = document.getElementById('-width')

    var wallpaperRadio = document.getElementById('wallpaper')
    
calculateButton.onclick = function calculate() {
    //taking values from input fields, calculating square metres and subtracting areas which don't need to be painted
    sqrMetres = parseInt((addHeight.value * addWidth.value) - (removeHeight.value * removeWidth.value));

    //deciding which equation to use by checking the radio button state and then passing the results to an h3 element
    if (wallpaperRadio.checked) {
        result.textContent = 'You will aproximately need ' + parseFloat(sqrMetres / 5).toFixed(2) + ' rolls of wallpaper.'
    } else {
        result.textContent = 'You will approximately need ' + parseFloat(sqrMetres / 12).toFixed(2) + ' litres of paint.'
    }
    //setting background color of the container which holds the result text to make it stand out a little
    result.style.backgroundColor = '#353430';

};
