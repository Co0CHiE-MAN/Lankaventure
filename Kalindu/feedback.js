const radioError = document.getElementById("feedbackRadioError");
const textError = document.getElementById("feedbackTextError");
const dropdownError = document.getElementById("feedbackDropdownError");
const radioErrorCont = document.getElementById("radioCont");
const textErrorCont = document.getElementById("textCont");
const modeErrorCont = document.getElementById("modeCont");
const radios = document.getElementsByName('rating');
const dropdown = document.getElementById("mode");
let radiostatus = false;
let textstatus = false;
let modestatus = false;
let mode = "";
let rating = 0;



function validateAndSendEmail() {
    if (validation()) {
        sendEmail(feedbackText, rating, mode);
        return true; // allow form submission
    } else {
        return false; // prevent form submission
    }
}

function validation() {
    let radioButtons = document.feedbackForm.rating;
    let feedbackText = document.getElementById("feedbackText");
    let dropdown = document.getElementById("mode");

    for (let i in radioButtons) {
        if (radioButtons[i].checked) {
            radiostatus = true;
            rating = Number(i) + 1;
            break;
        }
    }
    if (feedbackText.value.trim() == "") {
        textstatus = false
        textError.style.display = "block";
        textErrorCont.style.borderColor = "red";
    } else {
        textstatus = true;
        textError.style.display = "none";
        textErrorCont.style.borderColor = "#a1a1a1";
    }

    if (radiostatus) {
        // alert("Validation success!")
        radioError.style.display = "none";
        radioErrorCont.style.borderColor = "#a1a1a1";
    } else {
        // alert("Please select a radio button!")
        radioError.style.display = "block";
        radioErrorCont.style.borderColor = "red";
        // return false;
    }
    if (dropdown.selectedIndex === 0) {
        modestatus = false;
        feedbackDropdownError.style.display = "block";
        modeErrorCont.style.borderColor = "red";
    }else {
        mode = dropdown.value;
        modestatus = true;
        feedbackDropdownError.style.display = "none";
        modeErrorCont.style.borderColor = "#a1a1a1";
    }

    if (radiostatus && textstatus && modestatus) {
        // alert("successfull!");
        return true;
    } else {
        return false;
    }
    
    
}

function sendEmail(feedbackText, rating, mode) {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "lankaventure.services@gmail.com",
        Password: "3357CDFE59E70B479655DF98A5862C58B596",
        To: "kalindugunathilake123@gmail.com",
        From: "lankaventure.services@gmail.com",
        Subject: "A Feedback on LankaVenture",
        Body: `You have recieved a new feedback on LankaVenture,
        <br>
        <br>Rating: ${rating} out of 10,
        <br>Feedback: ${feedbackText.value}
        <br>Info Mode: ${mode}
        <br>
        <br>Thankyou,
        <br>LankaVenture Team.`
    }).then(message => {
        if (message == "OK") {
            console.log("Feedback sent successfully!")
        }else{
            alert(message);
        }
    }).catch(error => {
        alert("An error occurred while sending your feedback.");
        console.error(error);
    });
    alert("Thankyou! Your feedback was sent successfully.")
}


for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener('click', function () {
        radioError.style.display = "none";
        radioErrorCont.style.borderColor = "#a1a1a1"; // change the border color to the radio button's value
    });
}

feedbackText.addEventListener('keyup', function () {
    if (feedbackText.value.length > 0) {
        textError.style.display = "none";
        textErrorCont.style.borderColor = "#a1a1a1"; // change the background color to green
    }
});

dropdown.addEventListener('change', function(){
    if (dropdown.selectedIndex === 0) {
        feedbackDropdownError.style.display = "block";
        modeErrorCont.style.borderColor = "red";
    } else {
        feedbackDropdownError.style.display = "none";
        modeErrorCont.style.borderColor = "#a1a1a1";
    }
})