const numbersArray = document.querySelectorAll('.number');
const submit = document.getElementById('submit');
const cardContent = document.querySelector('.card-content');
const thankCard = document.querySelector('.thank-card');
const rating = document.querySelector('.rating');

let selectedNumber = "";

numbersArray.forEach((element, index, array) => {
    element.addEventListener('click', function() {
        if (array[index].classList.contains('active')) {
            removeClass(array[index], 'active');
            selectedNumber = "";
        } else {
            clearClassList();
            addClass(array[index], 'active');
            selectedNumber = array[index].textContent;
        }
    });
});

submit.addEventListener('click', function() {
    rating.textContent = `You selected ${selectedNumber} out of 5`;
    thankCard.style.display = 'flex';
    cardContent.style.display = 'none';
});

function addClass(element, className) {
    element.classList.add(className);
}

function removeClass(element, className) {
    element.classList.remove(className);
}

function clearClassList() {
    numbersArray.forEach(element => {
        element.classList.remove('active');
    });
}