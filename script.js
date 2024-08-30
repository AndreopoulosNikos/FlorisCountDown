function updateCountdown(targetDate) {
  const currentDate = new Date();
  const difference = targetDate - currentDate;

  if (difference <= 0) {
    // Countdown expired
    // Clear the interval to stop further updates
    clearInterval(intervalId);
  } else {
    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Update HTML element with the countdown
    document.getElementById("countdown").innerHTML = `${days} ${
      days === 1 ? "day" : "days"
    }, <br> ${hours} ${hours === 1 ? "hour" : "hours"}, <br> ${minutes} ${
      minutes === 1 ? "minute" : "minutes"
    } <br> and <br> ${seconds} ${
      seconds === 1 ? "second" : "seconds"
    } <br> remaining until <br> Flori is Coming Back!!`;
  }
}

const targetDate = new Date("2024-09-08T00:00:00");

// Set the interval and store the interval ID
const intervalId = setInterval(() => {
  updateCountdown(targetDate);
}, 1000);
