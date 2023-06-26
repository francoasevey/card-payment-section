let credit_number = document.getElementsByName('credit-number')[0];

credit_number.addEventListener('keyup', () => {
    let number4 = (credit_number.value).slice(0,5);
    if (5000 >= number4) {
        document.getElementById('master').src = "img/master.png";
    } else {
        document.getElementById('master').src = "img/visa.png";
    }
})