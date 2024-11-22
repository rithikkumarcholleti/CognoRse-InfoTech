let countdownInterval;
let timerRunning = false;

function startTimer() {
    // Get the user-input target date
    const targetDate = document.getElementById("target-date").value;
    if (!targetDate) {
        alert("Please set a target date and time.");
        return;
    }

    // Parse the date string into a Date object
    const targetTime = new Date(targetDate).getTime();

    // Clear any existing intervals
    clearInterval(countdownInterval);

    // Start the countdown if not already running
    if (!timerRunning) {
        timerRunning = true;

        // Update the countdown every second
        countdownInterval = setInterval(function() {
            const now = new Date().getTime();
            const distance = targetTime - now;

            // Calculate days, hours, minutes, and seconds
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display the result
            document.getElementById("time").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

            // If the countdown is finished, display a message
            if (distance < 0) {
                clearInterval(countdownInterval);
                document.getElementById("time").innerHTML = "TIME'S UP!";
                document.getElementById("timerButton").innerHTML = "Start Timer"; // Reset button text
                timerRunning = false;
            }
        }, 1000);

        document.getElementById("timerButton").innerHTML = "Stop Timer"; // Change button text to Stop Timer
    } else {
        stopTimer(); // If timer is running, stop it
    }
}

function stopTimer() {
    clearInterval(countdownInterval); // Clear the interval
    document.getElementById("timerButton").innerHTML = "Start Timer"; // Reset button text
    timerRunning = false; // Reset timer status
}
