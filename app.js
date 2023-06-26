let credit_number = document.getElementsByName('credit-number')[0];

credit_number.addEventListener('keyup', () => {
    let number4 = (credit_number.value).slice(0,5);
    if (5000 >= number4) {
        document.getElementById('master').src = "img/master.png";
    } else {
        document.getElementById('master').src = "img/visa.png";
    }
})

const img = ["img/air1.png", "img/Airpods.png", "img/air3.png"];

Array.from(document.getElementsByClassName('card_img')).forEach((ele, i)=>{
    ele.addEventListener('click', () => {
    document.getElementById('poster').src = img[i];
    document.getElementsByClassName("card_img")[i].getElementsByClassName.boxShadow = "0px 0px 20px rgb(0,0,0,.2"
    })
})