/* ************************************** E-mail/Password-Click ************************************* */

let button = document.querySelector('#button_plt')

button.addEventListener("click", myFunction);

function myFunction() {
    let email
    let text;
    email = document.getElementById("user_email").value;
    if (email == "") {
        text = "E-mail not entered.";
    }
    document.getElementById("val_email").innerHTML = text;

    let password
    let pasText;
    password = document.getElementById("password").value;
    if (password == "") {
        pasText = "Password not entered."
    }
    document.getElementById("val_password").innerHTML = pasText;
}

//let btn = document.querySelector('#button-cal')

//btn.addEventListener("click", yourFunction);

//function yourFunction() {
//    document.getElementById("subject").innerHTML = "Do you like my art works and design? If you like it, please contact me...";
//}

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


const scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbar-example'
})

$(".navbar ").click(function(event) {
    // check if window is small enough so dropdown is created
    var toggle = $(".navbar-toggler").is(":visible");
    if (toggle) {
        $(".navbar-collapse").collapse('hide');
    }
});