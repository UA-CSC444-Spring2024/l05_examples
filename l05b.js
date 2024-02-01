let div = d3.select("#div1")

let svg = div.append("svg")

svg.attr("width", 500)
   .attr("height", 500)


let dataArray = [5,8,10,42,3,7,1,8,9,2]

let group = svg.append("g")

let rects = group.selectAll("rect")
               .data(dataArray)
               .enter()
               .append("rect")
               .attr("x", function(d,i) {
                  return i*50;
               })
               .attr("y", d => 500-d*10) 
               .attr("width", 50)
               .attr("height", (d,i) => d*10)
               .style("fill", "orange")
