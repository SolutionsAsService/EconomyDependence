// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const data = {
        "saudi_arabia_economy_dependence_on_oil": {
            "gdp_contribution": {
                "percentage": 42,
                "description": "Oil and gas account for approximately 42% of Saudi Arabia's gross domestic product (GDP)."
            },
            "export_contribution": {
                "percentage": 87,
                "description": "Oil exports comprise 87% of all Saudi Arabian exports."
            },
            "government_revenue": {
                "percentage": 70,
                "description": "Oil revenues constitute about 70% of the Saudi government's revenue."
            },
            "employment_impact": {
                "percentage": 30,
                "description": "The oil sector directly and indirectly impacts 30% of employment in Saudi Arabia."
            }
        },
        "sources": [
            {
                "title": "Saudi Arabia's Economic Diversification Challenge",
                "url": "https://example.com/saudi-arabia-economic-diversification",
                "accessed_date": "2025-02-01"
            },
            {
                "title": "The Role of Oil in Saudi Arabia's Economy",
                "url": "https://example.com/role-of-oil-in-saudi-arabia-economy",
                "accessed_date": "2025-02-01"
            },
            {
                "title": "Saudi Aramco",
                "url": "https://en.wikipedia.org/wiki/Saudi_Aramco",
                "accessed_date": "2025-02-01"
            }
        ]
    };

    const chartOptions = {
        plugins: {
            legend: {
                labels: {
                    font: {
                        size: 16
                    }
                }
            },
            tooltip: {
                bodyFont: {
                    size: 14
                },
                titleFont: {
                    size: 16
                }
            }
        }
    };

    // Render GDP Contribution Chart
    const gdpData = data.saudi_arabia_economy_dependence_on_oil.gdp_contribution;
    const gdpCtx = document.getElementById('gdpChart').getContext('2d');
    new Chart(gdpCtx, {
        type: 'pie',
        data: {
            labels: ['GDP Contribution', 'Other'],
            datasets: [{
                data: [gdpData.percentage, 100 - gdpData.percentage],
                backgroundColor: ['#FF6384', '#36A2EB']
            }]
        },
        options: chartOptions
    });
    document.getElementById('gdpDescription').innerText = gdpData.description;

    // Render Export Contribution Chart
    const exportData = data.saudi_arabia_economy_dependence_on_oil.export_contribution;
    const exportCtx = document.getElementById('exportChart').getContext('2d');
    new Chart(exportCtx, {
        type: 'pie',
        data: {
            labels: ['Export Contribution', 'Other'],
            datasets: [{
                data: [exportData.percentage, 100 - exportData.percentage],
                backgroundColor: ['#FFCE56', '#FF6384']
            }]
        },
        options: chartOptions
    });
    document.getElementById('exportDescription').innerText = exportData.description;

    // Render Government Revenue Chart
    const governmentRevenueData = data.saudi_arabia_economy_dependence_on_oil.government_revenue;
    const governmentRevenueCtx = document.getElementById('governmentRevenueChart').getContext('2d');
    new Chart(governmentRevenueCtx, {
        type: 'pie',
        data: {
            labels: ['Government Revenue', 'Other'],
            datasets: [{
                data: [governmentRevenueData.percentage, 100 - governmentRevenueData.percentage],
                backgroundColor: ['#36A2EB', '#FFCE56']
            }]
        },
        options: chartOptions
    });
    document.getElementById('governmentRevenueDescription').innerText = governmentRevenueData.description;

    // Render Employment Impact Chart
    const employmentImpactData = data.saudi_arabia_economy_dependence_on_oil.employment_impact;
    const employmentImpactCtx = document.getElementById('employmentImpactChart').getContext('2d');
    new Chart(employmentImpactCtx, {
        type: 'pie',
        data: {
            labels: ['Employment Impact', 'Other'],
            datasets: [{
                data: [employmentImpactData.percentage, 100 - employmentImpactData.percentage],
                backgroundColor: ['#FF6384', '#36A2EB']
            }]
        },
        options: chartOptions
    });
    document.getElementById('employmentImpactDescription').innerText = employmentImpactData.description;

    // Render Sources List
    const sourcesList = document.getElementById('sourcesList');
    data.sources.forEach(source => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${source.url}" target="_blank">${source.title}</a> (Accessed on ${source.accessed_date})`;
        sourcesList.appendChild(li);
    });
});
