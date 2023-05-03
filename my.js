let button1 = document.getElementById("button_1_form")
let input1 = document.getElementById("input_1_form")
let input2 = document.getElementById("input_2_form")

function textChange() {
    input1.value = 1
    button1.value = 1
}

function sendAlert() {
    alert(input2.value);
}