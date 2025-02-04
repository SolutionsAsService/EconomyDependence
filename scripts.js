// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const data = {
        "botswana_economy_dependence_on_diamonds": {
            "gdp_contribution": {
                "diamonds": 20,
                "tourism": 10,
                "agriculture": 5,
                "services": 25,
                "other": 40,
                "description": "Diamonds contribute significantly to Botswana's GDP."
            },
            "export_contribution": {
                "diamonds": 85,
                "copper": 5,
                "beef": 3,
                "textiles": 2,
                "other": 5,
                "description": "Diamonds dominate Botswana's export contributions."
            },
            "government_revenue": {
                "diamonds": 50,
                "taxes": 30,
                "services": 10,
                "other": 10,
                "description": "Diamond revenues are a primary source of government revenue."
            },
            "employment_impact": {
                "direct": 10,
                "indirect": 20,
                "other": 70,
                "description": "The diamond sector has a significant direct and indirect employment impact."
            },
            "global_market_share": {
                "diamonds": 30,
                "other_minerals": 10,
                "services": 20,
                "agriculture": 5,
                "other": 35,
                "description": "Botswana holds a substantial share of the global diamond market."
            }
        },
        "sources": [
            {
                "title": "Botswana's Economic Outlook",
                "url": "https://example.com/botswanas-economic-outlook",
                "accessed_date": "2025-02-01"
            },
            {
                "title": "The Role of Diamonds in Botswana's Economy",
                "url": "https://example.com/role-of-diamonds-in-botswana-economy",
                "accessed_date": "2025-02-01"
            },
            {
                "title": "Debswana",
                "url": "https://en.wikipedia.org/wiki/Debswana",
                "accessed_date": "2025-02-01"
            }
        ]
    };

    const chartOptions = {
        plugins: {
            legend: {
                labels: {
                    font: {
                        size: 18
                    }
                }
            },
            tooltip: {
                bodyFont: {
                    size: 16
                },
                titleFont: {
                    size: 18
                }
            }
        }
    };

    const colors = {
        diamonds: '#00695c',
        tourism: '#00796b',
        agriculture: '#00897b',
        services: '#009688',
        other: '#26a69a',
        copper: '#80cbc4',
        beef: '#4db6ac',
        textiles: '#b2dfdb',
        taxes: '#004d40',
        direct: '#00796b',
        indirect: '#004d40',
        other_minerals: '#80cbc4'
    };

    // Render GDP Contribution Chart
    const gdpData = data.botswana_economy_dependence_on_diamonds.gdp_contribution;
    const gdpCtx = document.getElementById('gdpChart').getContext('2d');
    new Chart(gdpCtx, {
        type: 'doughnut',
        data: {
            labels: ['Diamonds', 'Tourism', 'Agriculture', 'Services', 'Other'],
            datasets: [{
                data: [gdpData.diamonds, gdpData.tourism, gdpData.agriculture, gdpData.services, gdpData.other],
                backgroundColor: [colors.diamonds, colors.tourism, colors.agriculture, colors.services, colors.other]
            }]
        },
        options: chartOptions
    });
    document.getElementById('gdpDescription').innerText = gdpData.description;

    // Render Export Contribution Chart
    const exportData = data.botswana_economy_dependence_on_diamonds.export_contribution;
    const exportCtx = document.getElementById('exportChart').getContext('2d');
    new Chart(exportCtx, {
        type: 'doughnut',
        data: {
            labels: ['Diamonds', 'Copper', 'Beef', 'Textiles', 'Other'],
            datasets: [{
                data: [exportData.diamonds, exportData.copper, exportData.beef, exportData.textiles, exportData.other],
                backgroundColor: [colors.diamonds, colors.copper, colors.beef, colors.textiles, colors.other]
            }]
        },
        options: chartOptions
    });
    document.getElementById('exportDescription').innerText = exportData.description;

    // Render Government Revenue Chart
    const governmentRevenueData = data.botswana_economy_dependence_on_diamonds.government_revenue;
    const governmentRevenueCtx = document.getElementById('governmentRevenueChart').getContext('2d');
    new Chart(governmentRevenueCtx, {
        type: 'doughnut',
        data: {
            labels: ['Diamonds', 'Taxes', 'Services', 'Other'],
            datasets: [{
                data: [governmentRevenueData.diamonds, governmentRevenueData.taxes, governmentRevenueData.services, governmentRevenueData.other],
                backgroundColor: [colors.diamonds, colors.taxes, colors.services, colors.other]
            }]
        },
        options: chartOptions
    });
    document.getElementById('governmentRevenueDescription').innerText = governmentRevenueData.description;

    // Render Employment Impact Chart
    const employmentImpactData = data.botswana_economy_dependence_on_diamonds.employment_impact;
    const employmentImpactCtx = document.getElementById('employmentImpactChart').getContext('2d');
    new Chart(employmentImpactCtx, {
        type: 'doughnut',
        data: {
            labels: ['Direct', 'Indirect', 'Other'],
            datasets: [{
                data: [employmentImpactData.direct, employmentImpactData.indirect, employmentImpactData.other],
                backgroundColor: [colors.direct, colors.indirect, colors.other]
            }]
        },
        options: chartOptions
    });
    document.getElementById('employmentImpactDescription').innerText = employmentImpactData.description;

    // Render Global Market Share Chart
    const globalMarketShareData = data.botswana_economy_dependence_on_diamonds.global_market_share;
    const globalMarketShareCtx = document.getElementById('globalMarketShareChart').getContext('2d');
    new Chart(globalMarketShareCtx, {
        type: 'doughnut',
        data: {
            labels: ['Diamonds', 'Other Minerals', 'Services', 'Agriculture', 'Other'],
            datasets: [{
                data: [globalMarketShareData.diamonds, globalMarketShareData.other_minerals, globalMarketShareData.services, globalMarketShareData.agriculture, globalMarketShareData.other],
                backgroundColor: [colors.diamonds, colors.other_minerals, colors.services, colors.agriculture, colors.other]
            }]
        },
        options: chartOptions
    });
    document.getElementById('globalMarketShareDescription').innerText = globalMarketShareData.description;

    // Render Sources List
    const sourcesList = document.getElementById('sourcesList');
    data.sources.forEach(source => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${source.url}" target="_blank">${source.title}</a> (Accessed on ${source.accessed_date})`;
        sourcesList.appendChild(li);
    });
});
