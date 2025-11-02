// === Realtime Sensor Monitoring Chart ===
export function initDashboard() {
    const ctx = document.getElementById("sensorChart").getContext("2d");
    const dataPoints = { labels: [], ph: [], humidity: [], temperature: [] };

    const sensorChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: dataPoints.labels,
            datasets: [
                {
                    label: "pH Tanah",
                    data: dataPoints.ph,
                    borderColor: "#4caf50",
                    backgroundColor: "rgba(76,175,80,0.2)",
                    borderWidth: 3,
                    fill: true,
                    tension: 0.3,
                    pointRadius: 4,
                    pointBackgroundColor: "#388e3c",
                },
                {
                    label: "Kelembapan (%)",
                    data: dataPoints.humidity,
                    borderColor: "#2196f3",
                    backgroundColor: "rgba(33,150,243,0.2)",
                    borderWidth: 3,
                    fill: true,
                    tension: 0.3,
                    pointRadius: 4,
                    pointBackgroundColor: "#1976d2",
                },
                {
                    label: "Suhu (°C)",
                    data: dataPoints.temperature,
                    borderColor: "#ff9800",
                    backgroundColor: "rgba(255,152,0,0.2)",
                    borderWidth: 3,
                    fill: true,
                    tension: 0.3,
                    pointRadius: 4,
                    pointBackgroundColor: "#e65100",
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: "bottom",
                    labels: {
                        font: { size: 13, weight: "bold" },
                        color: "#2e8b57",
                    },
                },
                tooltip: {
                    backgroundColor: "#2e8b57",
                    titleFont: { size: 14, weight: "bold" },
                    bodyFont: { size: 13 },
                    displayColors: false,
                },
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: { color: "rgba(0,0,0,0.1)" },
                    ticks: { color: "#333", font: { size: 13 } },
                },
                x: {
                    grid: { color: "rgba(0,0,0,0.05)" },
                    ticks: { color: "#333", font: { size: 12 } },
                },
            },
        },
    });

    setInterval(() => {
        const ph = (6 + Math.random()).toFixed(2);
        const hum = (70 + Math.random() * 10).toFixed(1);
        const temp = (27 + Math.random() * 2).toFixed(1);

        document.getElementById("phValue").innerText = ph;
        document.getElementById("humidityValue").innerText = hum + "%";
        document.getElementById("temperatureValue").innerText = temp + "°C";

        const now = new Date().toLocaleTimeString("id-ID", { hour12: false });
        dataPoints.labels.push(now);
        dataPoints.ph.push(ph);
        dataPoints.humidity.push(hum);
        dataPoints.temperature.push(temp);

        if (dataPoints.labels.length > 10) {
            dataPoints.labels.shift();
            dataPoints.ph.shift();
            dataPoints.humidity.shift();
            dataPoints.temperature.shift();
        }

        sensorChart.update();
    }, 3000);


}
