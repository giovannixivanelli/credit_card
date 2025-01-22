const nameInput = document.getElementById('nameInput');
const surnameInput = document.getElementById('surnameInput');
const colorSelect = document.getElementById('colorSelect');
const imageSelect = document.getElementById('imageSelect');
const card = document.getElementById('card');

const userName = document.querySelector('.holder-name');
const userSurname = document.querySelector('.holder-surname');

nameInput.addEventListener('input', () => {
    userName.textContent = nameInput.value.toUpperCase() || 'IVAN';
});

nameInput.addEventListener('focus', () => {
    nameInput.style.borderColor = 'blue';
    nameInput.style.backgroundColor = '#f0f8ff';
});

nameInput.addEventListener('blur', () => {
    nameInput.style.borderColor = '#ccc';
    nameInput.style.backgroundColor = 'white';
});

surnameInput.addEventListener('input', () => {
    userSurname.textContent = surnameInput.value.toUpperCase() || 'IVANOV';
});

surnameInput.addEventListener('focus', () => {
    surnameInput.style.borderColor = 'blue';
    surnameInput.style.backgroundColor = '#f0f8ff';
});

surnameInput.addEventListener('blur', () => {
    surnameInput.style.borderColor = '#ccc';
    surnameInput.style.backgroundColor = 'white';
});

imageSelect.addEventListener('change', () => {
    if (imageSelect.value === 'mountain') {
        card.style.backgroundImage = "url('img/mountains-1.jpg')";
        card.style.color = 'white';
        card.style.backgroundSize = 'cover';
        colorSelect.value = 'empty_color';
    } else if (imageSelect.value === 'empty_picture') {
        card.style.backgroundImage = '';
        card.style.color = 'black';
    } else {
        card.style.backgroundImage = "url('img/lake-1.jpg')";
        card.style.color = 'white';
        card.style.backgroundSize = 'cover';
        colorSelect.value = 'empty_color';
    }
});

colorSelect.addEventListener('change', () => {
    if (colorSelect.value === 'empty_color') {
        card.style.backgroundColor = '';
        card.style.color = 'black';
        imageSelect.value = 'empty_picture';
        card.style.backgroundImage = '';
    } else {
        card.style.backgroundColor = colorSelect.value;
        card.style.color = 'white';
        imageSelect.value = 'empty_picture';
        card.style.backgroundImage = '';
    }
});
