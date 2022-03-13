function calculateTip(){
    let amount = document.querySelector('#amount').value;
    let persion = document.querySelector('#persion').value;
    let service = document.querySelector('#service').value;

    console.log(service);
    console.log(persion+"persion");
    console.log(amount);
    if(amount === '' && service === 'select'){
        alert("Please Enter Valid Values");
        return;
    }
    if(persion === '1'){
        document.querySelector('#each').style.display = 'none';
    }else{
        document.querySelector('#each').style.display = 'block';
    }

    let total = (amount * service) / persion;
    console.log(total+"total");
    total = Math.round(total * 100)/ 100;
    total = total.toFixed(2);
    console.log(total);

    document.querySelector('#tip').style.display = 'block';
    document.querySelector('#total').innerText= total;

}