// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const data = {
        "qatar_economy_dependence_on_natural_gas": {
            "gdp_contribution": {
                "natural_gas": 58,
                "oil": 24,
                "others": 18,
                "description": "Natural gas and oil significantly contribute to Qatar's GDP."
            },
            "export_contribution": {
                "natural_gas": 70,
                "oil": 20,
                "others": 10,
                "description": "Natural gas dominates Qatar's export contributions."
            },
            "government_revenue": {
                "natural_gas": 55,
                "oil": 30,
                "others": 15,
                "description": "Natural gas is a primary source of government revenue."
            },
            "employment_impact": {
                "direct": 25,
                "indirect": 15,
                "others": 60,
                "description": "The natural gas sector has a significant direct and indirect employment impact."
            },
            "global_market_share": {
                "natural_gas": 30,
                "oil": 5,
                "others": 65,
                "description": "Qatar holds a substantial share of the global natural gas market."
            }
        },
        "sources": [
            {
                "title": "Qatar's Economic Outlook",
                "url": "https://example.com/qatars-economic-outlook",
                "accessed_date": "2025-02-01"
            },
            {
                "title": "The Role of Natural Gas in Qatar's Economy",
                "url": "https://example.com/role-of-natural-gas-in-qatar-economy",
                "accessed_date": "2025-02-01"
            },
            {
                "title": "Qatar Petroleum",
                "url": "https://en.wikipedia.org/wiki/Qatar_Petroleum",
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

    const colors = {
        naturalGas: '#1f78b4',
        oil: '#33a02c',
        others: '#fb9a99',
        direct: '#e31a1c',
        indirect: '#ff7f00'
    };

    // Render GDP Contribution Chart
    const gdpData = data.qatar_economy_dependence_on_natural_gas.gdp_contribution;
    const gdpCtx = document.getElementById('gdpChart').getContext('2d');
    new Chart(gdpCtx, {
        type: 'pie',
        data: {
            labels: ['Natural Gas', 'Oil', 'Others'],
            datasets: [{
                data: [gdpData.natural_gas, gdpData.oil, gdpData.others],
                backgroundColor: [colors.naturalGas, colors.oil, colors.others]
            }]
        },
        options: chartOptions
    });
    document.getElementById('gdpDescription').innerText = gdpData.description;

    // Render Export Contribution Chart
    const exportData = data.qatar_economy_dependence_on_natural_gas.export_contribution;
    const exportCtx = document.getElementById('exportChart').getContext('2d');
    new Chart(exportCtx, {
        type: 'pie',
        data: {
            labels: ['Natural Gas', 'Oil', 'Others'],
            datasets: [{
                data: [exportData.natural_gas, exportData.oil, exportData.others],
                backgroundColor: [colors.naturalGas, colors.oil, colors.others]
            }]
        },
        options: chartOptions
    });
    document.getElementById('exportDescription').innerText = exportData.description;

    // Render Government Revenue Chart
    const governmentRevenueData = data.qatar_economy_dependence_on_natural_gas.government_revenue;
    const governmentRevenueCtx = document.getElementById('governmentRevenueChart').getContext('2d');
    new Chart(governmentRevenueCtx, {
        type: 'pie',
        data: {
            labels: ['Natural Gas', 'Oil', 'Others'],
            datasets: [{
                data: [governmentRevenueData.natural_gas, governmentRevenueData.oil, governmentRevenueData.others],
                backgroundColor: [colors.naturalGas, colors.oil, colors.others]
            }]
        },
        options: chartOptions
    });
    document.getElementById('governmentRevenueDescription').innerText = governmentRevenueData.description;

    // Render Employment Impact Chart
    const employmentImpactData = data.qatar_economy_dependence_on_natural_gas.employment_impact;
    const employmentImpactCtx = document.getElementById('employmentImpactChart').getContext('2d');
    new Chart(employmentImpactCtx, {
        type: 'pie',
        data: {
            labels: ['Direct', 'Indirect', 'Others'],
            datasets: [{
                data: [employmentImpactData.direct, employmentImpactData.indirect, employmentImpactData.others],
                backgroundColor: [colors.direct, colors.indirect, colors.others]
            }]
        },
        options: chartOptions
    });
    document.getElementById('employmentImpactDescription').innerText = employmentImpactData.description;

    // Render Global Market Share Chart
    const globalMarketShareData = data.qatar_economy_dependence_on_natural_gas.global_market_share;
    const globalMarketShareCtx = document.getElementById('globalMarketShareChart').getContext('2d');
    new Chart(globalMarketShareCtx, {
        type: 'pie',
        data: {
            labels: ['Natural Gas', 'Oil', 'Others'],
            datasets: [{
                data: [globalMarketShareData.natural_gas, globalMarketShareData.oil, globalMarketShareData.others],
                backgroundColor: [colors.naturalGas, colors.oil, colors.others]
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
