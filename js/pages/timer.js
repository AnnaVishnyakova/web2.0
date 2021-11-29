import {
    printOutput
}
from "../utils/output.js";
import {
    printTimer
} from "../utils/output_timer.js";


const timerDate = document.getElementById("timerDate");

timerDate.onsubmit = (event) => {
    event.preventDefault();

    const {
        timeDate
    } = timerDate.element

    if (!timeDate.value || isNaN(timeDate.value)) {
        printOutput("Заполните все поля")

        return;
    }

    printTimer(timeDate.value)


}