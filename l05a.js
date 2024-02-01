let div = d3.select("#div1")

let svg = div.append("svg")

svg.attr("width", 500)
   .attr("height", 500)


for (let i =0; i<10; i++) {
  let circle = svg.append("circle")

  circle.attr("cx", function() {
     return Math.random()*500
  })
        .attr("cy", 30*i + 100)
        .attr("r", 20)
        .style("fill", "lightgreen")
}

let circles = d3.selectAll("circle")

circles.transition()
      .duration(5000)
      .attr("r", 50)
      .style("fill", "blue")


circles.transition()
       .delay((d,i) => i*1000)
       .attr("r", 0)
       .remove()
