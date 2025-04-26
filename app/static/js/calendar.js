// calendar.js
document.addEventListener("DOMContentLoaded", function () {
   const currentDate = new Date();

   function renderCalendar() {
       const monthYear = document.getElementById("month-year");
       const calendarDays = document.getElementById("calendar-days");

       const month = currentDate.getMonth();
       const year = currentDate.getFullYear();

       monthYear.textContent = `${currentDate.toLocaleString("default", { month: "long" })} ${year}`;

       const firstDay = new Date(year, month, 1).getDay();
       const totalDays = new Date(year, month + 1, 0).getDate();

       calendarDays.innerHTML = "";

       for (let i = 0; i < firstDay; i++) {
           calendarDays.appendChild(document.createElement("div"));
       }

       for (let day = 1; day <= totalDays; day++) {
           const cell = document.createElement("div");
           cell.classList.add("calendar-day");
           cell.textContent = day;

           const today = new Date();
           if (
               day === today.getDate() &&
               month === today.getMonth() &&
               year === today.getFullYear()
           ) {
               cell.classList.add("today");
           }

           calendarDays.appendChild(cell);
       }
   }

   document.getElementById("prev-month").addEventListener("click", () => {
       currentDate.setMonth(currentDate.getMonth() - 1);
       renderCalendar();
   });

   document.getElementById("next-month").addEventListener("click", () => {
       currentDate.setMonth(currentDate.getMonth() + 1);
       renderCalendar();
   });

   renderCalendar();
});
