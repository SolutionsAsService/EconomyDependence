// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const data = {
        "saudi_arabia_economy_dependence_on_oil": {
            "gdp_contribution": {
                "oil_and_gas": 42,
                "non_oil": 58,
                "description": "Oil and gas account for approximately 42% of Saudi Arabia's gross domestic product (GDP)."
            },
            "export_contribution": {
                "oil_exports": 87,
                "non_oil_exports": 13,
                "description": "Oil exports comprise 87% of all Saudi Arabian exports."
            },
            "government_revenue": {
                "oil_revenue": 70,
                "non_oil_revenue": 30,
                "description": "Oil revenues constitute about 70% of the Saudi government's revenue."
            },
            "employment_impact": {
                "direct_oil": 20,
                "indirect_oil": 10,
                "other": 70,
                "description": "The oil sector directly and indirectly impacts 30% of employment in Saudi Arabia."
            },
            "global_market_share": {
                "oil": 30,
                "other": 70,
                "description": "Saudi Arabia holds a substantial share of the global oil market."
            },
            "investment": {
                "oil_sector": 80,
                "non_oil_sector": 20,
                "description": "Investment in the oil sector is significantly higher than in non-oil sectors."
            },
            "energy_production": {
                "oil": 60,
                "natural_gas": 30,
                "renewable": 10,
                "description": "Oil dominates Saudi Arabia's energy production."
            },
            "sector_impact": {
                "oil_sector": 50,
                "non_oil_sector": 50,
                "description": "The oil sector has a balanced impact compared to non-oil sectors."
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
        oil: '#FF6384',
        non_oil: '#36A2EB',
        direct_oil: '#FFCE56',
        indirect_oil: '#FF6384',
        other: '#4BC0C0',
        natural_gas: '#FF9F40',
        renewable: '#9966FF'
    };

    // Render GDP Contribution Chart
    const gdpData = data.saudi_arabia_economy_dependence_on_oil.gdp_contribution;
    const gdpCtx = document.getElementById('gdpChart').getContext('2d');
    new Chart(gdpCtx, {
        type: 'doughnut',
        data: {
            labels: ['Oil and Gas', 'Non-Oil'],
            datasets: [{
                data: [gdpData.oil_and_gas, gdpData.non_oil],
                backgroundColor: [colors.oil, colors.non_oil]
            }]
        },
        options: chartOptions
    });
    document.getElementById('gdpDescription').innerText = gdpData.description;

    // Render Export Contribution Chart
    const exportData = data.saudi_arabia_economy_dependence_on_oil.export_contribution;
    const exportCtx = document.getElementById('exportChart').getContext('2d');
    new Chart(exportCtx, {
        type: 'doughnut',
        data: {
            labels: ['Oil Exports', 'Non-Oil Exports'],
            datasets: [{
                data: [exportData.oil_exports, exportData.non_oil_exports],
                backgroundColor: [colors.oil, colors.non_oil]
            }]
        },
        options: chartOptions
    });
    document.getElementById('exportDescription').innerText = exportData.description;

    // Render Government Revenue Chart
    const governmentRevenueData = data.saudi_arabia_economy_dependence_on_oil.government_revenue;
    const governmentRevenueCtx = document.getElementById('governmentRevenueChart').getContext('2d');
    new Chart(governmentRevenueCtx, {
        type: 'doughnut',
        data: {
            labels: ['Oil Revenue', 'Non-Oil Revenue'],
            datasets: [{
                data: [governmentRevenueData.oil_revenue, governmentRevenueData.non_oil_revenue],
                backgroundColor: [colors.oil, colors.non_oil]
            }]
        },
        options: chartOptions
    });
    document.getElementById('governmentRevenueDescription').innerText = governmentRevenueData.description;

    // Render Employment Impact Chart
    const employmentImpactData = data.saudi_arabia_economy_dependence_on_oil.employment_impact;
    const employmentImpactCtx = document.getElementById('employmentImpactChart').getContext('2d');
    new Chart(employmentImpactCtx, {
        type: 'doughnut',
        data: {
            labels: ['Direct Oil', 'Indirect Oil', 'Other'],
            datasets: [{
                data: [employmentImpactData.direct_oil, employmentImpactData.indirect_oil, employmentImpactData.other],
                backgroundColor: [colors.direct_oil, colors.indirect_oil, colors.other]
            }]
        },
        options: chartOptions
    });
    document.getElementById('employmentImpactDescription').innerText = employmentImpactData.description;

    // Render Global Market Share Chart
    const globalMarketShareData = data.saudi_arabia_economy_dependence_on_oil.global_market_share;
    const globalMarketShareCtx = document.getElementById('globalMarketShareChart').getContext('2d');
    new Chart(globalMarketShareCtx, {
        type: 'doughnut',
        data: {
            labels: ['Oil', 'Other'],
            datasets: [{
                data: [globalMarketShareData.oil, globalMarketShareData.other],
                backgroundColor: [colors.oil, colors.other]
            }]
        },
        options: chartOptions
    });
    document.getElementById('globalMarketShareDescription').innerText = globalMarketShareData.description;

    // Render Investment Chart
    const investmentData = data.saudi_arabia_economy_dependence_on_oil.investment;
    const investmentCtx = document.getElementById('investmentChart').getContext('2d');
    new Chart(investmentCtx, {
        type: 'doughnut',
        data: {
            labels: ['Oil Sector', 'Non-Oil Sector'],
            datasets: [{
                data: [investmentData.oil_sector, investmentData.non_oil_sector],
                backgroundColor: [colors.oil, colors.non_oil]
            }]
        },
        options: chartOptions
    });
    document.getElementById('investmentDescription').innerText = investmentData.description;

    // Render Energy Production Chart
    const energyProductionData = data.saudi_arabia_economy_dependence_on_oil.energy_production;
    const energyProductionCtx = document.getElementById('energyProductionChart').getContext('2d');
    new Chart(energyProductionCtx, {
        type: 'doughnut',
        data: {
            labels: ['Oil', 'Natural Gas', 'Renewable'],
            datasets: [{
                data: [energyProductionData.oil, energyProductionData.natural_gas, energyProductionData.renewable],
                backgroundColor: [colors.oil, colors.natural_gas, colors.renewable]
            }]
        },
        options: chartOptions
    });
    document.getElementById('energyProductionDescription').innerText = energyProductionData.description;

    // Render Sector Impact Chart
    const sectorImpactData = data.saudi_arabia_economy_dependence_on_oil.sector_impact;
    const sectorImpactCtx = document.getElementById('sectorImpactChart').getContext('2d');
    new Chart(sectorImpactCtx, {
        type: 'doughnut',
        data: {
            labels: ['Oil Sector', 'Non-Oil Sector'],
            datasets: [{
                data: [sectorImpactData.oil_sector, sectorImpactData.non_oil_sector],
                backgroundColor: [colors.oil, colors.non_oil]
            }]
        },
        options: chartOptions
    });
    document.getElementById('sectorImpactDescription').innerText = sectorImpactData.description;

    // Render Sources List
    const sourcesList = document.getElementById('sourcesList');
    data.sources.forEach(source => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${source.url}" target="_blank">${source.title}</a> (Accessed on ${source.accessed_date})`;
        sourcesList.appendChild(li);
    });
});
