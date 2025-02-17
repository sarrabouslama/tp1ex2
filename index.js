document.querySelector(".colorPicker").addEventListener("input", function() {
    document.querySelector(".text").style.color = this.value;
});

document.querySelector(".fontSizePicker").addEventListener("input", function() {
    document.querySelector(".text").style.fontSize = this.value + "px";
});

document.querySelector(".fontFamilyPicker").addEventListener("input", function() {
    document.querySelector(".text").style.fontFamily = this.value;
});
