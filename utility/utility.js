function getBtnID(id){
    const value = document.getElementById(id).innerText;
    const convertedValue = parseInt(value);
    return convertedValue;
}

function getNumberID(id){
    const result = document.getElementById(id)
    .addEventListener('click', function(){
        alert('Board update Successfully')
        const navNumber = getBtnID('nav-number')
        const sum = navNumber + 1;
        document.getElementById('nav-number').innerText = sum;
        const cartNumber = getBtnID('card-number');
        const rest = cartNumber - 1;
        document.getElementById('card-number').innerText = rest;
        if(rest <= 0){
            alert('Congrats !!! You have completed all the current task')
        }
        document.getElementById(id).disabled = true;
    })
    return result;
}
