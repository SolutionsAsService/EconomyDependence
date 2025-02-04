// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const data = {
        "global_semiconductor_market": {
            "country_manufacturing_share": {
                "china": 24,
                "taiwan": 21,
                "south_korea": 19,
                "usa": 13,
                "japan": 10,
                "europe": 9,
                "others": 4,
                "description": "Country-wise semiconductor manufacturing shares in the global market."
            },
            "company_market_share": {
                "tsmc": 54,
                "samsung": 19,
                "intel": 10,
                "others": 17,
                "description": "Market share of major semiconductor manufacturing companies."
            },
            "semiconductor_type": {
                "memory": 33,
                "logic": 25,
                "analog": 12,
                "discrete": 5,
                "optical": 15,
                "sensor": 5,
                "other": 5,
                "description": "Distribution of semiconductor types in the global market."
            },
            "revenue_distribution": {
                "asia": 60,
                "north_america": 20,
                "europe": 15,
                "rest_of_the_world": 5,
                "description": "Global revenue distribution of semiconductor sales."
            },
            "export_contribution": {
                "high_tech": 65,
                "mid_tech": 25,
                "low_tech": 10,
                "description": "Contribution of semiconductors to global export levels."
            },
            "employment_impact": {
                "direct": 20,
                "indirect": 30,
                "supporting": 50,
                "description": "Impact of the semiconductor industry on global employment."
            },
            "research_development": {
                "semiconductors": 35,
                "other": 65,
                "description": "Share of research and development spending on semiconductors."
            },
            "future_growth": {
                "asia": 50,
                "north_america": 20,
                "europe": 20,
                "rest_of_the_world": 10,
                "description": "Predicted future growth of the semiconductor market by region."
            }
        },
        "sources": [
            {
                "title": "Global Semiconductor Market Report 2025",
                "url": "https://example.com/global-semiconductor-market-report-2025",
                "accessed_date": "2025-02-01"
            },
            {
                "title": "Semiconductor Manufacturing and its Impact",
                "url": "https://example.com/semiconductor-manufacturing-impact",
                "accessed_date": "2025-02-01"
            },
            {
                "title": "Top Semiconductor Companies",
                "url": "https://en.wikipedia.org/wiki/List_of_largest_semiconductor_companies",
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
        china: '#FF4136',
        taiwan: '#0074D9',
        south_korea: '#2ECC40',
        usa: '#FFDC00',
        japan: '#B10DC9',
        europe: '#FF851B',
        others: '#AAAAAA',
        tsmc: '#001f3f',
        samsung: '#0074D9',
        intel: '#3D9970',
        memory: '#FF4136',
        logic: '#0074D9',
        analog: '#2ECC40',
        discrete: '#FFDC00',
        optical: '#B10DC9',
        sensor: '#FF851B',
        asia: '#7FDBFF',
        north_america: '#39CCCC',
        europe: '#3D9970',
        rest_of_the_world: '#AAAAAA',
        high_tech: '#FF4136',
        mid_tech: '#0074D9',
        low_tech: '#2ECC40',
        direct: '#FF851B',
        indirect: '#B10DC9',
        supporting: '#AAAAAA'
    };

    // Render Country Manufacturing Share Chart
    const countryManufacturingShareData = data.global_semiconductor_market.country_manufacturing_share;
    const countryManufacturingShareCtx = document.getElementById('countryManufacturingShareChart').getContext('2d');
    new Chart(countryManufacturingShareCtx, {
        type: 'pie',
        data: {
            labels: ['China', 'Taiwan', 'South Korea', 'USA', 'Japan', 'Europe', 'Others'],
            datasets: [{
                data: [countryManufacturingShareData.china, countryManufacturingShareData.taiwan, countryManufacturingShareData.south_korea, countryManufacturingShareData.usa, countryManufacturingShareData.japan, countryManufacturingShareData.europe, countryManufacturingShareData.others],
                backgroundColor: [colors.china, colors.taiwan, colors.south_korea, colors.usa, colors.japan, colors.europe, colors.others]
            }]
        },
        options: chartOptions
    });
    document.getElementById('countryManufacturingShareDescription').innerText = countryManufacturingShareData.description;

    // Render Company Market Share Chart
    const companyMarketShareData = data.global_semiconductor_market.company_market_share;
    const companyMarketShareCtx = document.getElementById('companyMarketShareChart').getContext('2d');
    new Chart(companyMarketShareCtx, {
        type: 'pie',
        data: {
            labels: ['TSMC', 'Samsung', 'Intel', 'Others'],
            datasets: [{
                data: [companyMarketShareData.tsmc, companyMarketShareData.samsung, companyMarketShareData.intel, companyMarketShareData.others],
                backgroundColor: [colors.tsmc, colors.samsung, colors.intel, colors.others]
            }]
        },
        options: chartOptions
    });
    document.getElementById('companyMarketShareDescription').innerText = companyMarketShareData.description;

    // Render Semiconductor Type Chart
    const semiconductorTypeData = data.global_semiconductor_market.semiconductor_type;
    const semiconductorTypeCtx = document.getElementById('semiconductorTypeChart').getContext('2d');
    new Chart(semiconductorTypeCtx, {
        type: 'pie',
        data: {
            labels: ['Memory', 'Logic', 'Analog', 'Discrete', 'Optical', 'Sensor', 'Other'],
            datasets: [{
                data: [semiconductorTypeData.memory, semiconductorTypeData.logic, semiconductorTypeData.analog, semiconductorTypeData.discrete, semiconductorTypeData.optical, semiconductorTypeData.sensor, semiconductorTypeData.other],
                backgroundColor: [colors.memory, colors.logic, colors.analog, colors.discrete, colors.optical, colors.sensor, colors.others]
            }]
        },
        options: chartOptions
    });
    document.getElementById('semiconductorTypeDescription').innerText = semiconductorTypeData.description;

    // Render Revenue Distribution Chart
    const revenueDistributionData = data.global_semiconductor_market.revenue_distribution;
    const revenueDistributionCtx = document.getElementById('revenueDistributionChart').getContext('2d');
    new Chart(revenueDistributionCtx, {
        type: 'pie',
        data: {
            labels: ['Asia', 'North America', 'Europe', 'Rest of the World'],
            datasets: [{
                data: [revenueDistributionData.asia, revenueDistributionData.north_america, revenueDistributionData.europe, revenueDistributionData.rest_of_the_world],
                backgroundColor: [colors.asia, colors.north_america, colors.europe, colors.rest_of_the_world]
            }]
        },
        options: chartOptions
    });
    document.getElementById('revenueDistributionDescription').innerText = revenueDistributionData.description;

    // Render Export Contribution Chart
    const exportContributionData = data.global_semiconductor_market.export_contribution;
    const exportContributionCtx = document.getElementById('exportContributionChart').getContext('2d');
    new Chart(exportContributionCtx, {
        type: 'pie',
        data: {
            labels: ['High Tech', 'Mid Tech', 'Low Tech'],
            datasets: [{
                data: [exportContributionData.high_tech, exportContributionData.mid_tech, exportContributionData.low_tech],
                backgroundColor: [colors.high_tech, colors.mid_tech, colors.low_tech]
            }]
        },
        options: chartOptions
    });
    document.getElementById('exportContributionDescription').innerText = exportContributionData.description;

    // Render Employment Impact Chart
    const employmentImpactData = data.global_semiconductor_market.employment_impact;
    const employmentImpactCtx = document.getElementById('employmentImpactChart').getContext('2d');
    new Chart(employmentImpactCtx, {
        type: 'pie',
        data: {
            labels: ['Direct', 'Indirect', 'Supporting'],
            datasets: [{
                data: [employmentImpactData.direct, employmentImpactData.indirect, employmentImpactData.supporting],
                backgroundColor: [colors.direct, colors.indirect, colors.supporting]
            }]
        },
        options: chartOptions
    });
    document.getElementById('employmentImpactDescription').innerText = employmentImpactData.description;

    // Render Research and Development Chart
    const researchDevelopmentData = data.global_semiconductor_market.research_development;
    const researchDevelopmentCtx = document.getElementById('researchDevelopmentChart').getContext('2d');
    new Chart(researchDevelopmentCtx, {
        type: 'pie',
        data: {
            labels: ['Semiconductors', 'Other'],
            datasets: [{
                data: [researchDevelopmentData.semiconductors, researchDevelopmentData.other],
                backgroundColor: [colors.high_tech, colors.others]
            }]
        },
        options: chartOptions
    });
    document.getElementById('researchDevelopmentDescription').innerText = researchDevelopmentData.description;

    // Render Future Growth Chart
    const futureGrowthData = data.global_semiconductor_market.future_growth;
    const futureGrowthCtx = document.getElementById('futureGrowthChart').getContext('2d');
    new Chart(futureGrowthCtx, {
        type: 'pie',
        data: {
            labels: ['Asia', 'North America', 'Europe', 'Rest of the World'],
            datasets: [{
                data: [futureGrowthData.asia, futureGrowthData.north_america, futureGrowthData.europe, futureGrowthData.rest_of_the_world],
                backgroundColor: [colors.asia, colors.north_america, colors.europe, colors.rest_of_the_world]
            }]
        },
        options: chartOptions
    });
    document.getElementById('futureGrowthDescription').innerText = futureGrowthData.description;

    // Render Sources List
    const sourcesList = document.getElementById('sourcesList');
    data.sources.forEach(source => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${source.url}" target="_blank">${source.title}</a> (Accessed on ${source.accessed_date})`;
        sourcesList.appendChild(li);
    });
});
