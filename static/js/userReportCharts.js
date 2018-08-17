function createPieChart(selector, data, donutRadius, colors) {
  // Set parameter defaults
  var colors = typeof colors !== 'undefined' ? colors : ['#ED764D', '#DEDBD8', '#925375', '#006fb5', '#00ad39', '#a04bbb'];
  var donutRadius = typeof donutRadius !== 'undefined' ? donutRadius : 0;

  // Orientate svg
  var svg = d3.select(selector);
  var height = svg.attr('height');
  var width = svg.attr('width');
  var radius = Math.min(height, width) / 2;
  var ordinalColors = d3.scaleOrdinal(colors);
  var g = svg.append("g")
    .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

  // Generate the pie
  var pie = d3.pie();

  // Generate the arcs
  var arc = d3.arc()
    .innerRadius(donutRadius || 0)
    .outerRadius(radius);

  // Generate the groups
  var arcs = g.selectAll('arc')
    .data(pie(data.dataset))
    .enter()
    .append('g')
    .attr('class', 'arc');

  // Draw arc paths
  arcs.append('path')
    .attr('fill', function(d, i) {
      return ordinalColors(i);
    })
    .attr('d', arc);

  // Add labels to centroid of segments
  arcs.append("text")
    .attr("transform", function(d) { 
      return "translate(" + arc.centroid(d) + ")"; 
    })
    .attr("text-anchor", "middle")
    .text(function(d, i) { return data.labels[i] || '' });
}

function setInnerHTML(target, value) {
  document.querySelector(target).innerHTML = value;
}

function createBarChart(selector, data, margin) {
  var margin = typeof margin !== 'undefined' ? margin : { top: 20, right: 20, bottom: 20, left: 20 };

  var svg = d3.select(selector),
  width = +svg.attr("width") - margin.left - margin.right,
  height = +svg.attr("height") - margin.top - margin.bottom,
  g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var x = d3.scaleBand()
    .rangeRound([0, width])
    .padding(0.1);

  var y = d3.scaleLinear()
    .rangeRound([height, 0]);
  
  x.domain(data.dataset.map(function(d) { return d.label }));
  y.domain([0, d3.max(data.dataset, function(d) { return d.value })]);

  g.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x))
  
  g.append("g")
    .call(d3.axisLeft(y))

  g.selectAll(".bar")
    .data(data.dataset)
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr("x", function(d) { return x(d.label) })
    .attr("y", function(d) { return y(d.value) })
    .attr("width", x.bandwidth())
    .attr("height", function(d) { return height - y(d.value) })
}

createPieChart('#opt-in', userReportData.optIn, 15);
createPieChart('#real-or-virtual', userReportData.realOrVirtual, 15);
createPieChart('#firmware', userReportData.firmware, 15);
createBarChart('#popular-screen-sizes', userReportData.screenSizes);

setInnerHTML('#os-architecture', userReportData.osArchitecture.dataset[0] + '%');
setInnerHTML('#display-server', userReportData.displayServer.dataset[0] + '%');
setInnerHTML('#one-screen', userReportData.numberScreens.dataset[0] + '%');
setInnerHTML('#one-gpu', userReportData.numberGPUs.dataset[0] + '%');
