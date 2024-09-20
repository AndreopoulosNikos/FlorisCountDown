function updateElapsedTime() {
  const currentDate = new Date();

  // Set the target date to September 18, 2024
  const targetDate = new Date(2024, 8, 18); // Month is 0-indexed, so 8 represents September
  targetDate.setHours(0, 0, 0, 0); // Set to midnight (start of the day)

  const difference = currentDate - targetDate;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  // Update HTML element with the time elapsed
  document.getElementById("countdown").innerHTML = `${days} ${
    days === 1 ? "day" : "days"
  }, <br> ${hours} ${hours === 1 ? "hour" : "hours"}, <br> ${minutes} ${
    minutes === 1 ? "minute" : "minutes"
  } <br> and <br> ${seconds} ${
    seconds === 1 ? "second" : "seconds"
  } <br> since Flori and I <br> haven't talked.<br>😢😢😢`;
}

// Set the interval and store the interval ID
const intervalId = setInterval(updateElapsedTime, 1000);
