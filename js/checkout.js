function weight() {
    var clothesWeight = document.getElementById('number').value;
    var b= 100;
    var c= clothesWeight*b;
    if (clothesWeight == '') {
        alert('Please input clothes weight');
        
    } else {
        alert('Your selected weight is' + ' ' + clothesWeight);
        
    }
    document.getElementById('amount').innerHTML=c;
}
    
    
    

