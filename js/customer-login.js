function validateForm() {
    var firstName = document.getElementById("inputFirstName").value;
    var secondName = document.getElementById("inputSecondName").value;
    var phoneNumber = document.getElementById("phone").value;
    var emailAccount = document.getElementById("emailAddress").value;

    if (firstName == "" || secondName == "" || phoneNumber == "" || emailAccount == "") {
        alert("Please ensure you have filled all the fields !");
    } else {
        alert("Thank you" + " " + firstName + " " + secondName + " " + "for your subscription to FuaChapChap !")
    };
}
