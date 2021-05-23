// sometimes loading takes longer and only one or none of the graphs are displayed
// either waiting until they've finished loading or refreshing the page should solve the problem

const BASE_URL = 'https://api.covid19api.com'

const margin = {top: 20, right: 40, bottom: 30, left: 60};
const width = 1500 - margin.left - margin.right;
const height = 450 - margin.top - margin.bottom;

// Bar diagram data
d3.json(BASE_URL + '/summary', (json) => {
    const data = json.Countries.map(item => {
        return {
            country: item.Country,
            activeCases: item.TotalConfirmed - item.TotalRecovered - item.TotalDeaths
        }
    }).sort((a, b) => (b.activeCases - a.activeCases)).slice(0, 10);

    // Bar Graph
    const svg = d3.select("body").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // XScale
    const xScale = d3.scaleBand()
        .domain(data.map(item => item.country))
        .range([0, width])
        .padding(0.1);

    svg.append("g")
        .style("font", "12px Arial")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
        .attr("transform", "translate(0," + (height + 5) + ")")
        .call(d3.axisBottom(xScale));

    // YScale
    const yScale = d3.scaleLinear()
        .range([height, 0])
        .domain([0, d3.max(data, item => item.activeCases)]);

    svg.append("g").call(d3.axisLeft(yScale));

    // Bars
    svg.selectAll('.bar')
        .data(data)
        .enter().append('rect')
        .attr('fill', 'black')
        .attr('x', item => xScale(item.country))
        .attr('width', xScale.bandwidth())
        .attr('y', () => yScale(0))
        .attr('height', 0)
        .transition()
        .duration(4000)
        .attr('y', item => yScale(item.activeCases))
        .attr('height', item => height - yScale(item.activeCases))
});

// Line diagram data
d3.json(BASE_URL + '/total/dayone/country/austria', (json) => {
    const data = json.map(item => {
        return {
            date: new Date(item.Date),
            activeCases: item.Active
        }
    })

    // Line Graph
    const svg = d3.select("body").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.bottom + ")");

    // XScale
    const xScale = d3.scaleTime()
        .domain(d3.extent(data, item => item.date))
        .range([0, width])

    svg.append("g")
        .style("font", "12px Arial")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
        .attr("transform", "translate(0," + (height) + ")")
        .call(d3.axisBottom(xScale));

    // YScale
    const yScale = d3.scaleLinear()
        .range([height, 0])
        .domain([0, d3.max(data, item => item.activeCases)]);

    svg.append("g").call(d3.axisLeft(yScale));

    // Line
    svg.append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "red")
        .attr("stroke-width", 3)
        .attr("d", d3.line()
            .x(item => xScale(item.date))
            .y(item => yScale(item.activeCases))
        )
})