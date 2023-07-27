document.addEventListener('DOMContentLoaded', function() {
    const colorPicker = document.getElementById('color-picker');
    const colorBox = document.getElementById('color-box');

    colorPicker.addEventListener('change', function() {
        const selectedColor = colorPicker.value;
        colorBox.style.backgroundColor = selectedColor;
    });
});
