// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const data = {
        "israel_economy": {
            "gdp_contribution": {
                "high_tech": 15,
                "services": 25,
                "manufacturing": 20,
                "agriculture": 2,
                "other": 38,
                "description": "Distribution of GDP contribution by sector in Israel."
            },
            "export_contribution": {
                "high_tech": 40,
                "diamonds": 20,
                "chemicals": 10,
                "machinery": 10,
                "other": 20,
                "description": "Export contribution by sector in Israel."
            },
            "import_contribution": {
                "raw_materials": 30,
                "consumer_goods": 25,
                "machinery_equipment": 20,
                "chemicals": 15,
                "other": 10,
                "description": "Import contribution by sector in Israel."
            },
            "sector_contribution": {
                "high_tech": 20,
                "defense": 15,
                "tourism": 10,
                "real_estate": 15,
                "other": 40,
                "description": "Sector contribution to Israel's economy."
            },
            "employment_distribution": {
                "high_tech": 15,
                "services": 30,
                "manufacturing": 20,
                "agriculture": 5,
                "other": 30,
                "description": "Employment distribution by sector in Israel."
            },
            "investment_distribution": {
                "high_tech": 35,
                "real_estate": 25,
                "infrastructure": 20,
                "education": 10,
                "other": 10,
                "description": "Investment distribution by sector in Israel."
            },
            "innovation_index": {
                "high_tech": 50,
                "academia": 20,
                "private_research": 20,
                "government_initiatives": 10,
                "description": "Innovation index distribution in Israel."
            },
            "tourism_revenue": {
                "religious": 40,
                "leisure": 30,
                "business": 20,
                "other": 10,
                "description": "Tourism revenue distribution by type in Israel."
            }
        },
        "sources": [
            {
                "title": "Israel's Economic Overview",
                "url": "https://example.com/israels-economic-overview",
                "accessed_date": "2025-02-01"
            },
            {
                "title": "Key Sectors in Israel's Economy",
                "url": "https://example.com/key-sectors-in-israels-economy",
                "accessed_date": "2025-02-01"
            },
            {
                "title": "Innovation in Israel",
                "url": "https://en.wikipedia.org/wiki/Innovation_in_Israel",
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
        high_tech: '#FF4136',
        services: '#0074D9',
        manufacturing: '#2ECC40',
        agriculture: '#FFDC00',
        other: '#AAAAAA',
        diamonds: '#B10DC9',
        chemicals: '#FF851B',
        machinery: '#7FDBFF',
        raw_materials: '#3D9970',
        consumer_goods: '#39CCCC',
        defense: '#85144b',
        tourism: '#FF4136',
        real_estate: '#FF851B',
        infrastructure: '#7FDBFF',
        education: '#B10DC9',
        academia: '#0074D9',
        private_research: '#2ECC40',
        government_initiatives: '#FFDC00',
        religious: '#FF4136',
        leisure: '#0074D9',
        business: '#2ECC40'
    };

    // Render GDP Contribution Chart
    const gdpData = data.israel_economy.gdp_contribution;
    const gdpCtx = document.getElementById('gdpChart').getContext('2d');
    new Chart(gdpCtx, {
        type: 'pie',
        data: {
            labels: ['High Tech', 'Services', 'Manufacturing', 'Agriculture', 'Other'],
            datasets: [{
                data: [gdpData.high_tech, gdpData.services, gdpData.manufacturing, gdpData.agriculture, gdpData.other],
                backgroundColor: [colors.high_tech, colors.services, colors.manufacturing, colors.agriculture, colors.other]
            }]
        },
        options: chartOptions
    });
    document.getElementById('gdpDescription').innerText = gdpData.description;

    // Render Export Contribution Chart
    const exportData = data.israel_economy.export_contribution;
    const exportCtx = document.getElementById('exportChart').getContext('2d');
    new Chart(exportCtx, {
        type: 'pie',
        data: {
            labels: ['High Tech', 'Diamonds', 'Chemicals', 'Machinery', 'Other'],
            datasets: [{
                data: [exportData.high_tech, exportData.diamonds, exportData.chemicals, exportData.machinery, exportData.other],
                backgroundColor: [colors.high_tech, colors.diamonds, colors.chemicals, colors.machinery, colors.other]
            }]
        },
        options: chartOptions
    });
    document.getElementById('exportDescription').innerText = exportData.description;

    // Render Import Contribution Chart
    const importData = data.israel_economy.import_contribution;
    const importCtx = document.getElementById('importChart').getContext('2d');
    new Chart(importCtx, {
        type: 'pie',
        data: {
            labels: ['Raw Materials', 'Consumer Goods', 'Machinery & Equipment', 'Chemicals', 'Other'],
            datasets: [{
                data: [importData.raw_materials, importData.consumer_goods, importData.machinery_equipment, importData.chemicals, importData.other],
                backgroundColor: [colors.raw_materials, colors.consumer_goods, colors.machinery, colors.chemicals, colors.other]
            }]
        },
        options: chartOptions
    });
    document.getElementById('importDescription').innerText = importData.description;

    // Render Sector Contribution Chart
    const sectorContributionData = data.israel_economy.sector_contribution;
    const sectorContributionCtx = document.getElementById('sectorContributionChart').getContext('2d');
    new Chart(sectorContributionCtx, {
        type: 'pie',
        data: {
            labels: ['High Tech', 'Defense', 'Tourism', 'Real Estate', 'Other'],
            datasets: [{
                data: [sectorContributionData.high_tech, sectorContributionData.defense, sectorContributionData.tourism, sectorContributionData.real_estate, sectorContributionData.other],
                backgroundColor: [colors.high_tech, colors.defense, colors.tourism, colors.real_estate, colors.other]
            }]
        },
        options: chartOptions
    });
    document.getElementById('sectorContributionDescription').innerText = sectorContributionData.description;

    // Render Employment Distribution Chart
    const employmentData = data.israel_economy.employment_distribution;
    const employmentCtx = document.getElementById('employmentChart').getContext('2d');
    new Chart(employmentCtx, {
        type: 'pie',
        data: {
            labels: ['High Tech', 'Services', 'Manufacturing', 'Agriculture', 'Other'],
            datasets: [{
                data: [employmentData.high_tech, employmentData.services, employmentData.manufacturing, employmentData.agriculture, employmentData.other],
                backgroundColor: [colors.high_tech, colors.services, colors.manufacturing, colors.agriculture, colors.other]
            }]
        },
        options: chartOptions
    });
    document.getElementById('employmentDescription').innerText = employmentData.description;

    // Render Investment Distribution Chart
    const investmentData = data.israel_economy.investment_distribution;
    const investmentCtx = document.getElementById('investmentChart').getContext('2d');
    new Chart(investmentCtx, {
        type: 'pie',
        data: {
            labels: ['High Tech', 'Real Estate', 'Infrastructure', 'Education', 'Other'],
            datasets: [{
                data: [investmentData.high_tech, investmentData.real_estate, investmentData.infrastructure, investmentData.education, investmentData.other],
                backgroundColor: [colors.high_tech, colors.real_estate, colors.infrastructure, colors.education, colors.other]
            }]
        },
        options: chartOptions
    });
    document.getElementById('investmentDescription').innerText = investmentData.description;

    // Render Innovation Index Chart
    const innovationData = data.israel_economy.innovation_index;
    const innovationCtx = document.getElementById('innovationChart').getContext('2d');
    new Chart(innovationCtx, {
        type: 'pie',
        data: {
            labels: ['High Tech', 'Academia', 'Private Research', 'Government Initiatives'],
            datasets: [{
                data: [innovationData.high_tech, innovationData.academia, innovationData.private_research, innovationData.government_initiatives],
                backgroundColor: [colors.high_tech, colors.academia, colors.private_research, colors.government_initiatives]
            }]
        },
        options: chartOptions
    });
    document.getElementById('innovationDescription').innerText = innovationData.description;

    // Render Tourism Revenue Chart
    const tourismRevenueData = data.israel_economy.tourism_revenue;
    const tourismRevenueCtx = document.getElementById('tourismRevenueChart').getContext('2d');
    new Chart(tourismRevenueCtx, {
        type: 'pie',
        data: {
            labels: ['Religious', 'Leisure', 'Business', 'Other'],
            datasets: [{
                data: [tourismRevenueData.religious, tourismRevenueData.leisure, tourismRevenueData.business, tourismRevenueData.other],
                backgroundColor: [colors.religious, colors.leisure, colors.business, colors.other]
            }]
        },
        options: chartOptions
    });
    document.getElementById('tourismRevenueDescription').innerText = tourismRevenueData.description;

    // Render Sources List
    const sourcesList = document.getElementById('sourcesList');
    data.sources.forEach(source => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${source.url}" target="_blank">${source.title}</a> (Accessed on ${source.accessed_date})`;
        sourcesList.appendChild(li);
    });
});
