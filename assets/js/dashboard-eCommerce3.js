$(function() {
    "use strict";


  // chart1
  var ctx = document.getElementById('chart1').getContext('2d');

  var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
          datasets: [{
              label: 'Total Gated-In',
              
			  data: [2000, 3500, 3000, 3500, 2800, 2200, 2500],
              backgroundColor: [
                  "#ffb"
              ],
              borderColor: [
                  "#ffb"
              ],
              borderWidth: 0,
              borderRadius: 20
          },
          {
              label: 'Total Gated-Out',
              data: [1500, 2200, 1300, 2500, 2000, 1000, 1500],
              backgroundColor: [
                "#fbb"
              ],
              borderColor: [
                "#fbb"
              ],
              borderWidth: 0,
              borderRadius: 20
          },{
              label: 'Unpaid-For',
              data: [1000, 1500, 900, 1500, 1700, 1600, 1000],
              backgroundColor: [
                "#ffe"
              ],
              borderColor: [
                "#ffe"
              ],
              borderWidth: 0,
              borderRadius: 20
          }]
      },
      options: {
          maintainAspectRatio: false,
          barPercentage: 0.7,
          categoryPercentage: 0.45,
          plugins: {
              legend: {
                  position:'bottom',
                  display: true,
				   labels: {
					color: 'rgb(255 255 255 / 75%)'
				  }
				  
              }
          },
          scales: {
              x: {
                stacked: false,
                beginAtZero: true,
				ticks: {
                  color: "rgb(255 255 255 / 75%)", // this here
                },
				grid: {
					  display: true ,
					  color: "rgba(221, 221, 221, 0.08)"
					}
              },
              y: {
                stacked: false,
                beginAtZero: true,
				ticks: {
                  color: "rgb(255 255 255 / 75%)", // this here
                },
				grid: {
					  display: true ,
					  color: "rgba(221, 221, 221, 0.08)"
					}
              },
			  
            }
      }
  });



// chart2
var ctx = document.getElementById('chart2').getContext('2d');

var myChart = new Chart(ctx, {
  type: 'pie',
  data: {
      labels: ['Desktop', 'Mobile', 'Tablet'],
      datasets: [{
          data: [30, 17, 13,40],
          backgroundColor: [
              "rgb(0 255 255 / 100%)",
              "rgb(255 165 0 / 100%)",
              "rgb(148 148 148 / 100%)",
              "rgb(255 255 255 / 10%)"
          ],
          borderWidth: 0
      }]
  },
  options: {
      maintainAspectRatio: false,
      cutout: 110,
      plugins: {
      legend: {
          display: false,
      }
  }
      
  }
});





// chart3
var ctx = document.getElementById('chart3').getContext('2d');

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        datasets: [{
            label: 'Visitors',
            data: [12, 25, 13, 25, 14, 35, 10],
            backgroundColor: [
                "rgb(255 255 255 / 100%)",
            ],
             fill: {
                target: 'origin',
                above: 'rgb(255 255 255 / 12%)',   // Area will be red above the origin
                below: 'rgb(255 255 255 / 12%)'    // And blue below the origin
              },
            tension: 0.4,
            borderColor: [
                "rgb(255 255 255 / 100%)",
            ],
            borderWidth: 4
        }]
    },
    options: {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            }
        },
        scales: {
              x: {
                stacked: false,
                beginAtZero: true,
				ticks: {
                  color: "rgb(255 255 255 / 75%)", // this here
                },
				grid: {
					  display: true ,
					  color: "rgba(221, 221, 221, 0.08)"
					}
              },
              y: {
                stacked: false,
                beginAtZero: true,
				ticks: {
                  color: "rgb(255 255 255 / 75%)", // this here
                },
				grid: {
					  display: true ,
					  color: "rgba(221, 221, 221, 0.08)"
					}
              },
			  
            }
    }
});



   //donut

   $("span.donut").peity("donut",{
    width: 130,
    height: 130 
  });
    

   });