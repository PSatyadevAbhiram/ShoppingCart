let inputElement =  document.querySelector('input');

function decrementCounter(event){
    let inputLength = inputElement.value;
    let getCounter = document.getElementById('counter');
    getCounter.textContent = (inputLength.length) + '/10';
    if(10-inputLength.length <= 5){
        inputElement.style.color = 'red';
        inputElement.style.backgroundColor = 'beige';
    }
    else{
        inputElement.style.color = 'black';
        inputElement.style.backgroundColor = 'white'
    }
    if(10-inputLength.length < 0){
        alert('Username Cannot exceed 10 characters');
    }

}

inputElement.addEventListener('input', decrementCounter);

