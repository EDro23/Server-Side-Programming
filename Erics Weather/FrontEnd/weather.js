 
 document.addEventListener('DOMContentLoaded', () => {
    const select = document.getElementById('citySelect');
    const display = document.getElementById('cityDisplay');
    const report = document.getElementById('report');

    select.addEventListener('change', () => {
        if (select.value === "") {
            display.textContent = "No city selected.";
        } else {
            const selectedText = select.options[select.selectedIndex].text;
            display.textContent = "You selected: " + selectedText;

            fetch("http://localhost:3000/api/weather", {
                method: "POST", 
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ city: selectedText })
            })
                .then(response => response.json())
                .then(weather => {
                    report.textContent = `Weather in ${selectedText}: ${weather.description}, ${weather.temperature}°C, Wind: ${weather.windSpeed}`;
                })
                .catch(error => {
                    console.error("There was a problem with the fetch operation:", error);
                });
        }
    });
});