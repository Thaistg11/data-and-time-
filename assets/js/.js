function updateDateTime() {
    const now = new Date();
    const dateElement = document.getElementById('date');
    const timeElement = document.getElementById('time');
    
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = now.toLocaleDateString('en-US', options);
    const formattedTime = now.toLocaleTimeString('en-US');
    
    dateElement.textContent = formattedDate;
    timeElement.textContent = formattedTime;
}

updateDateTime();
setInterval(updateDateTime, 1000); // Update every secon