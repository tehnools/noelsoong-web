import React from 'react'
import d3 from 'd3'
import UseQuery from '../apollo/UseQuery'

export default function LanguageStats () {
  return (
    <div>

    </div>
  )
}

// {
//     viewer {
//       login
//     }
//     user(login: "tehnools") {
//       repositories(first: 20){
//         nodes{
//           languages{
//             nodes{
//               name,
//               color
//             }
//             totalCount
//           }
//         }
//       }
//     }
//   }

// d3.select("#lang_freq").
//       append("svg:svg").
//       attr("width", width).
//       attr("height", height);

//     languageBars.selectAll("rect").
//       data(data).
//       enter().
//       append("svg:rect").
//       attr("x", function(datum, index) { return x(index); }).
//       attr("y", function(datum) { return height - y(datum.count); }).
//       attr("height", function(datum) { return y(datum.count); }).
//       attr("width", barWidth);

//     languageBars.selectAll("text").
//       data(data).
//       enter().
//       append("svg:text").
//       attr("x", function(datum, index) { return x(index) + barWidth; }).
//       attr("y", function(datum) { return height - y(datum.count); }).
//       attr("dx", -barWidth/2).
//       attr("dy", "1.2em").
//       attr("text-anchor", "middle").
//       text(function(datum) { return datum.count;});

//     languageBars.selectAll("text.yAxis").
//       data(data).
//       enter().append("svg:text").
//       attr("x", function(datum, index) { return x(index) + barWidth; }).
//       attr("y", height).
//       attr("dx", -barWidth/2).
//       attr("text-anchor", "middle").
//       text(function(datum) { return datum.language;}).
//       attr("transform", "translate(0, 18)").
//       attr("class", "yAxis");
