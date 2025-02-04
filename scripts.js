// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const data = {
        "taiwan_economy_dependence_on_semiconductors": {
            "gdp_contribution": {
                "semiconductors": 25,
                "other": 75,
                "description": "Integrated circuits (ICs) account for approximately 25% of Taiwan's gross domestic product (GDP)."
            },
            "export_contribution": {
                "semiconductors": 41.5,
                "other": 58.5,
                "description": "ICs comprise 41.5% of all Taiwanese exports."
            },
            "tsmc_specific_contribution": {
                "market_share": 54,
                "other": 46,
                "description": "Taiwan Semiconductor Manufacturing Company (TSMC) controls 54% of the global semiconductor market."
            },
            "stock_market_impact": {
                "tsmc": 30,
                "other": 70,
                "description": "TSMC constitutes about 30% of the Taiwan Stock Exchange's main index."
            },
            "employment_impact": {
                "direct": 15,
                "indirect": 10,
                "other": 75,
                "description": "The semiconductor sector directly and indirectly impacts 25% of employment in Taiwan."
            },
            "research_development": {
                "semiconductors": 40,
                "other": 60,
                "description": "A significant portion of research and development spending goes towards semiconductors."
            },
            "global_export_share": {
                "semiconductors": 30,
                "other": 70,
                "description": "Taiwan holds a substantial share of the global semiconductor export market."
            },
            "sector_diversification": {
                "semiconductors": 35,
                "electronics": 20,
                "machinery": 15,
                "chemicals": 10,
                "other": 20,
                "description": "Taiwan's economy is diversified across several sectors with semiconductors being the leading sector."
            }
        },
        "sources": [
            {
                "title": "From Chips to Beyond: Taiwan's Need for Economic Diversification",
                "url": "https://growthlab.hks.harvard.edu/blog/chips-beyond-taiwan%E2%80%99s-need-economic-diversification",
                "accessed_date": "2025-02-01"
            },
            {
                "title": "Taiwan's Economy and the Big Chip on its Shoulder",
                "url": "https://www.rajraf.org/article/taiwans-economy-and-the-big-chip-on-its-shoulder-/1035",
                "accessed_date": "2025-02-01"
            },
            {
                "title": "TSMC",
                "url": "https://en.wikipedia.org/wiki/TSMC",
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
        red: '#FF4136',    // ROC Red
        blue: '#0074D9',   // ROC Blue
        white: '#DDDDDD',  // White
        green: '#2ECC40',
        yellow: '#FFDC00',
        purple: '#B10DC9',
        orange: '#FF851B',
        cyan: '#7FDBFF'
    };

    // Render GDP Contribution Chart
    const gdpData = data.taiwan_economy_dependence_on_semiconductors.gdp_contribution;
    const gdpCtx = document.getElementById('gdpChart').getContext('2d');
    new Chart(gdpCtx, {
        type: 'doughnut',
        data: {
            labels: ['Semiconductors', 'Other'],
            datasets: [{
                data: [gdpData.semiconductors, gdpData.other],
                backgroundColor: [colors.red, colors.blue]
            }]
        },
        options: chartOptions
    });
    document.getElementById('gdpDescription').innerText = gdpData.description;

    // Render Export Contribution Chart
    const exportData = data.taiwan_economy_dependence_on_semiconductors.export_contribution;
    const exportCtx = document.getElementById('exportChart').getContext('2d');
    new Chart(exportCtx, {
        type: 'doughnut',
        data: {
            labels: ['Semiconductors', 'Other'],
            datasets: [{
                data: [exportData.semiconductors, exportData.other],
                backgroundColor: [colors.red, colors.blue]
            }]
        },
        options: chartOptions
    });
    document.getElementById('exportDescription').innerText = exportData.description;

    // Render TSMC Market Share Chart
    const marketShareData = data.taiwan_economy_dependence_on_semiconductors.tsmc_specific_contribution;
    const marketShareCtx = document.getElementById('tsmcMarketShareChart').getContext('2d');
    new Chart(marketShareCtx, {
        type: 'doughnut',
        data: {
            labels: ['TSMC Market Share', 'Other'],
            datasets: [{
                data: [marketShareData.market_share, marketShareData.other],
                backgroundColor: [colors.red, colors.blue]
            }]
        },
        options: chartOptions
    });
    document.getElementById('tsmcMarketShareDescription').innerText = marketShareData.description;

    // Render TSMC Stock Market Impact Chart
    const stockMarketImpactData = data.taiwan_economy_dependence_on_semiconductors.stock_market_impact;
    const stockMarketImpactCtx = document.getElementById('tsmcStockMarketImpactChart').getContext('2d');
    new Chart(stockMarketImpactCtx, {
        type: 'doughnut',
        data: {
            labels: ['TSMC', 'Other'],
            datasets: [{
                data: [stockMarketImpactData.tsmc, stockMarketImpactData.other],
                backgroundColor: [colors.red, colors.blue]
            }]
        },
        options: chartOptions
    });
    document.getElementById('tsmcStockMarketImpactDescription').innerText = stockMarketImpactData.description;

    // Render Employment Impact Chart
    const employmentImpactData = data.taiwan_economy_dependence_on_semiconductors.employment_impact;
    const employmentImpactCtx = document.getElementById('employmentImpactChart').getContext('2d');
    new Chart(employmentImpactCtx, {
        type: 'doughnut',
        data: {
            labels: ['Direct', 'Indirect', 'Other'],
            datasets: [{
                data: [employmentImpactData.direct, employmentImpactData.indirect, employmentImpactData.other],
                backgroundColor: [colors.red, colors.blue, colors.white]
            }]
        },
        options: chartOptions
    });
    document.getElementById('employmentImpactDescription').innerText = employmentImpactData.description;

    // Render Research and Development Chart
    const researchDevelopmentData = data.taiwan_economy_dependence_on_semiconductors.research_development;
    const researchDevelopmentCtx = document.getElementById('researchDevelopmentChart').getContext('2d');
    new Chart(researchDevelopmentCtx, {
        type: 'doughnut',
        data: {
            labels: ['Semiconductors', 'Other'],
            datasets: [{
                data: [researchDevelopmentData.semiconductors, researchDevelopmentData.other],
                backgroundColor: [colors.red, colors.blue]
            }]
        },
        options: chartOptions
    });
    document.getElementById('researchDevelopmentDescription').innerText = researchDevelopmentData.description;

    // Render Global Export Share Chart
    const globalExportShareData = data.taiwan_economy_dependence_on_semiconductors.global_export_share;
    const globalExportShareCtx = document.getElementById('globalExportShareChart').getContext('2d');
    new Chart(globalExportShareCtx, {
        type: 'doughnut',
        data: {
            labels: ['Semiconductors', 'Other'],
            datasets: [{
                data: [globalExportShareData.semiconductors, globalExportShareData.other],
                backgroundColor: [colors.red, colors.blue]
            }]
        },
        options: chartOptions
    });
    document.getElementById('globalExportShareDescription').innerText = globalExportShareData.description;

    // Render Sector Diversification Chart
    const sectorDiversificationData = data.taiwan_economy_dependence_on_semiconductors.sector_diversification;
    const sectorDiversificationCtx = document.getElementById('sectorDiversificationChart').getContext('2d');
    new Chart(sectorDiversificationCtx, {
        type: 'doughnut',
        data: {
            labels: ['Semiconductors', 'Electronics', 'Machinery', 'Chemicals', 'Other'],
            datasets: [{
                data: [sectorDiversificationData.semiconductors, sectorDiversificationData.electronics, sectorDiversificationData.machinery, sectorDiversificationData.chemicals, sectorDiversificationData.other],
                backgroundColor: [colors.red, colors.blue, colors.green, colors.yellow, colors.purple]
            }]
        },
        options: chartOptions
    });
    document.getElementById('sectorDiversificationDescription').innerText = sectorDiversificationData.description;

    // Render Sources List
    const sourcesList = document.getElementById('sourcesList');
    data.sources.forEach(source => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${source.url}" target="_blank">${source.title}</a> (Accessed on ${source.accessed_date})`;
        sourcesList.appendChild(li);
    });
});
