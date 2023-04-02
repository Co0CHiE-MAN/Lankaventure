const form = document.querySelector('#feedbackForm');
const feedbackText = document.querySelector('#feedbackText');
const feedbackTextError = document.querySelector('#feedbackTextError');

// form.addEventListener('submit', function (event) {
//     if (feedbackText.value.trim() === '') {
//         event.preventDefault();
//         feedbackTextError.classList.add('show');
//         console.log("hi");
//     }
// });
.function validate() {
    var input = document.getElementById('feedbackText');
    var inputValue = input.ariaValueMax.trim();

    if (inputValue === "") {
        input.style.borderColor = "red";
    }else {
        document.form
    }
}