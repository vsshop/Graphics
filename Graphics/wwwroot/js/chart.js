const config = {
    type: 'line',
    options: {
        responsive: true,
        animation: {
            y: {
                duration: 0
            }
        },
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Line Chart'
            }
        }
    },
};

window.chartStart = function (canvas) {
    

    const data = {
        labels: [], 
        datasets: [{
            label: 'EKG',
            data: [],
            backgroundColor: 'rgba(145, 45, 45, 0.2)',
            borderColor: '#902d2dcc',
            borderWidth: 3,
            tension: 0.4,
            pointRadius: 0
        }]
    };

    const config = {
        type: 'line',
        data: data,
        options: {
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom',
                    min: 0,
                    max: 10,
                    ticks: {
                        stepSize: 10 
                    }
                },
                y: {
                    min: 0,
                    max: 100
                }
            },
            animation: {
                easing: 'easeOutQuad', 
                y: {
                    duration: 0
                }
            },
        },
       
    };

    const chart = new Chart(canvas, config);
    index = 0;
    setInterval(() => {
        const newLabel = index++;
        const newValue = Math.floor(Math.random() * 20) + 50;
        
        data.labels.unshift(newLabel);
        data.datasets[0].data.unshift(newValue);
        
        if (data.labels.length > 100) {
            data.labels.pop();
            data.datasets[0].data.pop();
        }
        
        chart.options.scales.x.min = newLabel - 99;
        chart.options.scales.x.max = newLabel;

        chart.update();
    }, 100);
}
