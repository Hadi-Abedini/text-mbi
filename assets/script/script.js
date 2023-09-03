const urlParams = new URLSearchParams(window.location.search);
const bmi = urlParams.get('bmi');
document.getElementById('BMI').innerHTML = `${Math.floor(bmi)}+`

const pointerElements = document.querySelectorAll('.pointer');
pointerElements.forEach((element) => {
    element.style.display = 'none';
});

const hrElement = document.querySelector('.hr');

if (bmi >= 18.5 && bmi < 25) {
    pointerElements[0].style.display = 'block';
    hrElement.style.height = '4px';
}
else if (bmi >= 25 && bmi < 30) {
    pointerElements[1].style.display = 'block';
    hrElement.style.height = '4px';
}
else if (bmi >= 30 && bmi < 35) {
    pointerElements[2].style.display = 'block';
    hrElement.style.height = '4px';
}
else if (bmi >= 35 && bmi < 40) {
    pointerElements[3].style.display = 'block';
    hrElement.style.height = '4px';
}
else if (bmi >= 40) {
    pointerElements[4].style.display = 'block';
    hrElement.style.height = '4px';
}