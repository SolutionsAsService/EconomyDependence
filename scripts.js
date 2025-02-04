// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const data = {
        "russia_economy_dependence_on_oil": {
            "gdp_contribution": {
                "oil_and_gas": 30,
                "other": 70,
                "description": "Oil and gas account for approximately 30% of Russia's gross domestic product (GDP)."
            },
            "export_contribution": {
                "oil_exports": 52,
                "gas_exports": 16,
                "other": 32,
                "description": "Oil and gas exports comprise a significant portion of Russia's total exports."
            },
            "government_revenue": {
                "oil_revenue": 45,
                "gas_revenue": 15,
                "other": 40,
                "description": "Oil and gas revenues constitute a major part of the Russian government's revenue."
            },
            "employment_impact": {
                "direct_oil": 10,
                "indirect_oil": 20,
                "other": 70,
                "description": "The oil sector directly and indirectly impacts a significant portion of employment in Russia."
            },
            "global_market_share": {
                "oil": 12,
                "gas": 17,
                "other": 71,
                "description": "Russia holds a substantial share of the global oil and gas market."
            },
            "investment": {
                "oil_sector": 40,
                "gas_sector": 20,
                "non_oil_gas_sector": 40,
                "description": "Investment in the oil and gas sector is substantial compared to other sectors."
            },
            "energy_production": {
                "oil": 50,
                "gas": 30,
                "renewable": 20,
                "description": "Oil dominates Russia's energy production, with significant contributions from gas and renewable sources."
            },
            "sector_impact": {
                "oil_sector": 40,
                "gas_sector": 20,
                "other_sectors": 40,
                "description": "The oil and gas sectors have a balanced impact compared to other sectors in the economy."
            }
        },
        "sources": [
            {
                "title": "Russia's Economic Outlook",
                "url": "https://example.com/russias-economic-outlook",
                "accessed_date": "2025-02-01"
            },
            {
                "title": "The Role of Oil and Gas in Russia's Economy",
                "url": "https://example.com/role-of-oil-gas-in-russia-economy",
                "accessed_date": "2025-02-01"
            },
            {
                "title": "Gazprom",
                "url": "https://en.wikipedia.org/wiki/Gazprom",
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
        oil: '#FF4136',
        gas: '#0074D9',
        other: '#2ECC40',
        direct_oil: '#FF851B',
        indirect_oil: '#B10DC9',
        renewable: '#7FDBFF',
        non_oil_gas_sector: '#AAAAAA',
        other_sectors: '#3D9970'
    };

    // Render GDP Contribution Chart
    const gdpData = data.russia_economy_dependence_on_oil.gdp_contribution;
    const gdpCtx = document.getElementById('gdpChart').getContext('2d');
    new Chart(gdpCtx, {
        type: 'pie',
        data: {
            labels: ['Oil and Gas', 'Other'],
            datasets: [{
                data: [gdpData.oil_and_gas, gdpData.other],
                backgroundColor: [colors.oil, colors.other]
            }]
        },
        options: chartOptions
    });
    document.getElementById('gdpDescription').innerText = gdpData.description;

    // Render Export Contribution Chart
    const exportData = data.russia_economy_dependence_on_oil.export_contribution;
    const exportCtx = document.getElementById('exportChart').getContext('2d');
    new Chart(exportCtx, {
        type: 'pie',
        data: {
            labels: ['Oil Exports', 'Gas Exports', 'Other'],
            datasets: [{
                data: [exportData.oil_exports, exportData.gas_exports, exportData.other],
                backgroundColor: [colors.oil, colors.gas, colors.other]
            }]
        },
        options: chartOptions
    });
    document.getElementById('exportDescription').innerText = exportData.description;

    // Render Government Revenue Chart
    const governmentRevenueData = data.russia_economy_dependence_on_oil.government_revenue;
    const governmentRevenueCtx = document.getElementById('governmentRevenueChart').getContext('2d');
    new Chart(governmentRevenueCtx, {
        type: 'pie',
        data: {
            labels: ['Oil Revenue', 'Gas Revenue', 'Other'],
            datasets: [{
                data: [governmentRevenueData.oil_revenue, governmentRevenueData.gas_revenue, governmentRevenueData.other],
                backgroundColor: [colors.oil, colors.gas, colors.other]
            }]
        },
        options: chartOptions
    });
    document.getElementById('governmentRevenueDescription').innerText = governmentRevenueData.description;

    // Render Employment Impact Chart
    const employmentImpactData = data.russia_economy_dependence_on_oil.employment_impact;
    const employmentImpactCtx = document.getElementById('employmentImpactChart').getContext('2d');
    new Chart(employmentImpactCtx, {
        type: 'pie',
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
    const globalMarketShareData = data.russia_economy_dependence_on_oil.global_market_share;
    const globalMarketShareCtx = document.getElementById('globalMarketShareChart').getContext('2d');
    new Chart(globalMarketShareCtx, {
        type: 'pie',
        data: {
            labels: ['Oil', 'Gas', 'Other'],
            datasets: [{
                data: [globalMarketShareData.oil, globalMarketShareData.gas, globalMarketShareData.other],
                backgroundColor: [colors.oil, colors.gas, colors.other]
            }]
        },
        options: chartOptions
    });
    document.getElementById('globalMarketShareDescription').innerText = globalMarketShareData.description;

    // Render Investment Chart
    const investmentData = data.russia_economy_dependence_on_oil.investment;
    const investmentCtx = document.getElementById('investmentChart').getContext('2d');
    new Chart(investmentCtx, {
        type: 'pie',
        data: {
            labels: ['Oil Sector', 'Gas Sector', 'Non-Oil/Gas Sector'],
            datasets: [{
                data: [investmentData.oil_sector, investmentData.gas_sector, investmentData.non_oil_gas_sector],
                backgroundColor: [colors.oil, colors.gas, colors.non_oil_gas_sector]
            }]
        },
        options: chartOptions
    });
    document.getElementById('investmentDescription').innerText = investmentData.description;

    // Render Energy Production Chart
    const energyProductionData = data.russia_economy_dependence_on_oil.energy_production;
    const energyProductionCtx = document.getElementById('energyProductionChart').getContext('2d');
    new Chart(energyProductionCtx, {
        type: 'pie',
        data: {
            labels: ['Oil', 'Gas', 'Renewable'],
            datasets: [{
                data: [energyProductionData.oil, energyProductionData.gas, energyProductionData.renewable],
                backgroundColor: [colors.oil, colors.gas, colors.renewable]
            }]
        },
        options: chartOptions
    });
    document.getElementById('energyProductionDescription').innerText = energyProductionData.description;

    // Render Sector Impact Chart
    const sectorImpactData = data.russia_economy_dependence_on_oil.sector_impact;
    const sectorImpactCtx = document.getElementById('sectorImpactChart').getContext('2d');
    new Chart(sectorImpactCtx, {
        type: 'pie',
        data: {
            labels: ['Oil Sector', 'Gas Sector', 'Other Sectors'],
            datasets: [{
                data: [sectorImpactData.oil_sector, sectorImpactData.gas_sector, sectorImpactData.other_sectors],
                backgroundColor: [colors.oil, colors.gas, colors.other_sectors]
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
