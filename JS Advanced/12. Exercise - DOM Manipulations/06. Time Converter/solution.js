function attachEventsListeners() {

    let days = document.getElementById("days");
    let buttonDay = document.getElementById("daysBtn");
    let hours = document.getElementById("hours");
    let buttonHours = document.getElementById("hoursBtn");
    let minutes = document.getElementById("minutes");
    let buttonMinutes = document.getElementById("minutesBtn");
    let seconds = document.getElementById("seconds");
    let buttonSeconds = document.getElementById("secondsBtn");

    buttonDay.addEventListener("click", funcDay);
    buttonHours.addEventListener("click", funcHours);
    buttonMinutes.addEventListener("click", funcMinutes);
    buttonSeconds.addEventListener("click", funcSeconds);

    function funcDay() {
        let numberDays = days.value;
        hours.value = numberDays * 24;
        minutes.value = numberDays * 1440;
        seconds.value = numberDays * 86400;
    }

    function funcHours() {
        let numberHours = hours.value;
        if (numberHours >= 24) {
            days.value = numberHours / 24;
        }
        minutes.value = numberHours * 60;
        seconds.value = numberHours * 3600;
    }

    function funcMinutes() {
        let numberMinutes = minutes.value;
        if (numberMinutes >= 1440) {
            days.value = numberMinutes / 1440;
        }
        if (numberMinutes >= 60) {
            hours.value = numberMinutes / 60;
        }
        seconds.value = numberMinutes * 60;
    }

    function funcSeconds() {
        let numberSeconds = seconds.value;
        if (numberSeconds >= 86400) {
            days.value = numberSeconds / 86400;
        }
        if (numberSeconds >= 3600) {
            hours.value = numberSeconds / 3600;
        }
        if (numberSeconds >= 60) {
            minutes.value = numberSeconds / 60;
        }
    }

}
