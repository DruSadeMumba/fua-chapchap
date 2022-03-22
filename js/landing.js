let today = new Date();
let year = today.getFullYear();

document.getElementById("license-year").innerHTML = year;

function Reviews(name, comment) {
    this.customerName = name;
    this.customerComment = comment;
}
Reviews.prototype.fullReview = function(){
    return this.customerName + " " + says + " " + this.customerComment;
}
$document.ready(function(){
    $("form#post").submit(function(event){
        event.preventDefault();

        let inputtedCustomerName = $("input#customer-name").val();
		let inputtedCustomerComment = $("textarea#comments").val();
		
		let newReview = new Reviews(inputtedCustomerName, inputtedCustomerComment);

		$("ul#reviews").append("<li>" + fullReview() + "</li>");
    })
})