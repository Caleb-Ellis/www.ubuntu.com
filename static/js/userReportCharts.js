function createPieChart(selector, data, donutRadius, colors) {
  // Set parameter defaults
  var colors = typeof colors !== 'undefined' ? colors : ['#ED764D', '#DEDBD8', '#925375', '#006fb5', '#00ad39', '#a04bbb'];
  var donutRadius = typeof donutRadius !== 'undefined' ? donutRadius : 0;

  // Orientate svg
  var svg = d3.select(selector);
  var height = svg.attr('height');
  var width = svg.attr('width');
  var radius = Math.min(height, width) / 2;
  var g = svg.append("g").attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');
  var ordinalColors = d3.scaleOrdinal(colors);

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

createPieChart('#opt-in', userReportData.optIn, 15);
createPieChart('#real-or-virtual', userReportData.realOrVirtual, 15);
createPieChart('#firmware', userReportData.firmware, 15);

setInnerHTML('#os-architecture', userReportData.osArchitecture.dataset[0] + '%');
setInnerHTML('#display-server', userReportData.displayServer.dataset[0] + '%');
setInnerHTML('#one-screen', userReportData.numberScreens.dataset[0] + '%');
setInnerHTML('#one-gpu', userReportData.numberGPUs.dataset[0] + '%');
