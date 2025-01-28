const today = new Date();
const day = document.querySelector('.day');
const month = document.querySelector('.mouth');
const year = document.querySelector('.year');
const button = document.querySelector('.img');

const errorDay = document.querySelector('.error-invalid-day');
const errorMonth = document.querySelector('.error-invalid-mouth');
const errorYear = document.querySelector('.error-invalid-year');

const requiredDay = document.querySelector('.required-field-day');
const requiredMonth = document.querySelector('.required-field-mouth');
const requiredYear = document.querySelector('.required-field-year');


function calculateAge() {
    errorDay.style.display = 'none';
    errorMonth.style.display = 'none';
    errorYear.style.display = 'none';
    requiredDay.style.display = 'none';
    requiredMonth.style.display = 'none';
    requiredYear.style.display = 'none';

    const birthDay = parseInt(day.value);
    const birthMonth = parseInt(month.value);
    const birthYear = parseInt(year.value);

    if (!day.value) {
        requiredDay.style.display = 'block';
        return;
    }
    if (!month.value) {
        requiredMonth.style.display = 'block';
        return;
    }
    if (!year.value) {
        requiredYear.style.display = 'block';
        return;
    }

    if (birthDay > 31 || birthDay < 1) {
        errorDay.style.display = 'block';
        return;
    }
    if (birthMonth > 12 || birthMonth < 1) {
        errorMonth.style.display = 'block';
        return;
    }
    if (birthYear > today.getFullYear() || birthYear < 1900) {
        errorYear.style.display = 'block';
        return;
    }
    if((birthDay==31 && birthMonth==04)||(birthDay==31 && birthMonth==06)
    ||(birthDay==31 && birthMonth==09)||(birthDay==31 && birthMonth==11)){
      errorDay.style.display = 'block';
      errorMonth.style.display = 'block';
      return;
    }

    let years = today.getFullYear() - birthYear;
    let months = today.getMonth() + 1 - birthMonth;
    let days = today.getDate() - birthDay;

    if (days < 0) {
        months--;
        days += 30;
    }
    if (months < 0) {
        years--;
        months += 12;
    }
    document.querySelector('.yearsResult').textContent = years;
    document.querySelector('.mouthsResult').textContent = months;
    document.querySelector('.daysResult').textContent = days;
}
button.addEventListener('click', calculateAge);
[day, month, year].forEach(input => {
    input.addEventListener('focus', () => {
        input.style.borderColor = 'hsl(259, 100%, 65%)';
    });

    input.addEventListener('blur', () => {
        input.style.borderColor = 'hsl(0, 0%, 86%)';
    });
});
