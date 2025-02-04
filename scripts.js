// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const data = {
        "taiwan_economy_dependence_on_semiconductors": {
            "gdp_contribution": {
                "percentage": 25,
                "description": "Integrated circuits (ICs) account for approximately 25% of Taiwan's gross domestic product (GDP)."
            },
            "export_contribution": {
                "percentage": 41.5,
                "description": "ICs comprise 41.5% of all Taiwanese exports."
            },
            "tsmc_specific_contribution": {
                "market_share": {
                    "percentage": 54,
                    "description": "Taiwan Semiconductor Manufacturing Company (TSMC) controls 54% of the global semiconductor market."
                },
                "stock_market_impact": {
                    "percentage": 30,
                    "description": "TSMC constitutes about 30% of the Taiwan Stock Exchange's main index."
                }
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
    const gdpData = data.taiwan_economy_dependence_on_semiconductors.gdp_contribution;
    const gdpCtx = document.getElementById('gdpChart').getContext('2d');
    new Chart(gdpCtx, {
        type: 'pie',
        data: {
            labels: ['GDP Contribution', 'Other'],
            datasets: [{
                data: [gdpData.percentage, 75],
                backgroundColor: ['#FF6384', '#36A2EB']
            }]
        },
        options: chartOptions
    });
    document.getElementById('gdpDescription').innerText = gdpData.description;

    // Render Export Contribution Chart
    const exportData = data.taiwan_economy_dependence_on_semiconductors.export_contribution;
    const exportCtx = document.getElementById('exportChart').getContext('2d');
    new Chart(exportCtx, {
        type: 'pie',
        data: {
            labels: ['Export Contribution', 'Other'],
            datasets: [{
                data: [exportData.percentage, 58.5],
                backgroundColor: ['#FFCE56', '#FF6384']
            }]
        },
        options: chartOptions
    });
    document.getElementById('exportDescription').innerText = exportData.description;

    // Render TSMC Market Share Chart
    const marketShareData = data.taiwan_economy_dependence_on_semiconductors.tsmc_specific_contribution.market_share;
    const marketShareCtx = document.getElementById('tsmcMarketShareChart').getContext('2d');
    new Chart(marketShareCtx, {
        type: 'pie',
        data: {
            labels: ['TSMC Market Share', 'Other'],
            datasets: [{
                data: [marketShareData.percentage, 46],
                backgroundColor: ['#36A2EB', '#FFCE56']
            }]
        },
        options: chartOptions
    });
    document.getElementById('tsmcMarketShareDescription').innerText = marketShareData.description;

    // Render TSMC Stock Market Impact Chart
    const stockMarketImpactData = data.taiwan_economy_dependence_on_semiconductors.tsmc_specific_contribution.stock_market_impact;
    const stockMarketImpactCtx = document.getElementById('tsmcStockMarketImpactChart').getContext('2d');
    new Chart(stockMarketImpactCtx, {
        type: 'pie',
        data: {
            labels: ['TSMC Stock Market Impact', 'Other'],
            datasets: [{
                data: [stockMarketImpactData.percentage, 70],
                backgroundColor: ['#FF6384', '#36A2EB']
            }]
        },
        options: chartOptions
    });
    document.getElementById('tsmcStockMarketImpactDescription').innerText = stockMarketImpactData.description;

    // Render Sources List
    const sourcesList = document.getElementById('sourcesList');
    data.sources.forEach(source => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${source.url}" target="_blank">${source.title}</a> (Accessed on ${source.accessed_date})`;
        sourcesList.appendChild(li);
    });
});
