const ageCalculater = (day, month, year) => {
    // Convert inputs to numbers
    let dayOfBirth = Number(day);
    let monthOfBirth = Number(month);
    let yearOfBirth = Number(year);

    // Get the current date
    let today = new Date();
    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth() + 1; // getMonth() returns 0-based month
    let currentDay = today.getDate();

    // Array of days in each month
    let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Adjust February for leap years
    if ((currentYear % 4 === 0 && currentYear % 100 !== 0) || (currentYear % 400 === 0)) {
        daysInMonth[1] = 29;
    }

    // Adjust the current date if necessary
    if (dayOfBirth > currentDay) {
        currentMonth -= 1;
        currentDay += daysInMonth[currentMonth - 1];
    }
    if (monthOfBirth > currentMonth) {
        currentYear -= 1;
        currentMonth += 12;
    }

    // Calculate the differences
    let years = currentYear - yearOfBirth;
    let months = currentMonth - monthOfBirth;
    let days = currentDay - dayOfBirth;

    // Format the result
    let age = `${days} days ${months} months ${years} years`;

    return age;
};

function calculateAge() {
    // Get input values
    let day = document.getElementById('day').value;
    let month = document.getElementById('month').value;
    let year = document.getElementById('year').value;

    // Calculate age
    let age = ageCalculater(day, month, year);

    // Display the result
    document.getElementById('result').innerText = `Your age is: ${age}`;
}
