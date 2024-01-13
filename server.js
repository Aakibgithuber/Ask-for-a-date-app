function generateCalendar(date) {
    var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    var currentDate = new Date(firstDay);
  
    // Clear existing content in the calendar body
    calendarBody.innerHTML = '';
  
    while (currentDate <= lastDay) {
      var row = document.createElement('tr');
  
      for (var i = 0; i < 7; i++) {
        var cell = document.createElement('td');
  
        if (currentDate.getMonth() === date.getMonth()) {
          cell.textContent = currentDate.getDate();
          cell.setAttribute('data-date', currentDate.toISOString().split('T')[0]);
          cell.addEventListener('click', function() {
            saveAndNavigateToNextPage(this.getAttribute('data-date'));
          });
        }
  
        row.appendChild(cell);
        currentDate.setDate(currentDate.getDate() + 1);
      }
  
      calendarBody.appendChild(row);
    }
  }
  