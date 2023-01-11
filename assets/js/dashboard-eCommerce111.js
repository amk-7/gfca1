$(function () {
  "use strict";


  // chart1
  var ctx = document.getElementById('chart1').getContext('2d');

  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      datasets: [{
        label: 'CIF Export',

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
        label: 'Repartriation Amount',
        data: [1500, 2200, 1300, 2500, 2000, 1000, 1500],
        backgroundColor: [
          "#fbb"
        ],
        borderColor: [
          "#fbb"
        ],
        borderWidth: 0,
        borderRadius: 20
      },
      // {
      //   label: 'Clearing Rate',
      //   data: [1000, 1500, 900, 1500, 1700, 1600, 1000],
      //   backgroundColor: [
      //     "#ffe"
      //   ],
      //   borderColor: [
      //     "#ffe"
      //   ],
      //   borderWidth: 0,
      //   borderRadius: 20
      // }
    ]
    },
    options: {
      maintainAspectRatio: false,
      barPercentage: 0.7,
      categoryPercentage: 0.45,
      plugins: {
        legend: {
          position: 'bottom',
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
            display: true,
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
            display: true,
            color: "rgba(221, 221, 221, 0.08)"
          }
        },

      }
    }
  });



  // chart2
  // var ctx = document.getElementById('chart2').getContext('2d');

  // var myChart = new Chart(ctx, {
  //   type: 'pie',
  //   data: {
  //     labels: ['Desktop', 'Mobile', 'Tablet'],
  //     datasets: [{
  //       data: [30, 17, 13, 40],
  //       backgroundColor: [
  //         "rgb(0 255 255 / 100%)",
  //         "rgb(255 165 0 / 100%)",
  //         "rgb(148 148 148 / 100%)",
  //         "rgb(255 255 255 / 10%)"
  //       ],
  //       borderWidth: 0
  //     }]
  //   },
  //   options: {
  //     maintainAspectRatio: false,
  //     cutout: 110,
  //     plugins: {
  //       legend: {
  //         display: false,
  //       }
  //     }

  //   }
  // });





  // chart3
  // var ctx = document.getElementById('chart3').getContext('2d');

  // var myChart = new Chart(ctx, {
  //   type: 'line',
  //   data: {
  //     labels: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
  //     datasets: [{
  //       label: 'Visitors',
  //       data: [12, 25, 13, 25, 14, 35, 10],
  //       backgroundColor: [
  //         "rgb(255 255 255 / 100%)",
  //       ],
  //       fill: {
  //         target: 'origin',
  //         above: 'rgb(255 255 255 / 12%)',   // Area will be red above the origin
  //         below: 'rgb(255 255 255 / 12%)'    // And blue below the origin
  //       },
  //       tension: 0.4,
  //       borderColor: [
  //         "rgb(255 255 255 / 100%)",
  //       ],
  //       borderWidth: 4
  //     }]
  //   },
  //   options: {
  //     maintainAspectRatio: false,
  //     plugins: {
  //       legend: {
  //         display: false,
  //       }
  //     },
  //     scales: {
  //       x: {
  //         stacked: false,
  //         beginAtZero: true,
  //         ticks: {
  //           color: "rgb(255 255 255 / 75%)", // this here
  //         },
  //         grid: {
  //           display: true,
  //           color: "rgba(221, 221, 221, 0.08)"
  //         }
  //       },
  //       y: {
  //         stacked: false,
  //         beginAtZero: true,
  //         ticks: {
  //           color: "rgb(255 255 255 / 75%)", // this here
  //         },
  //         grid: {
  //           display: true,
  //           color: "rgba(221, 221, 221, 0.08)"
  //         }
  //       },

  //     }
  //   }
  // });

   // chart 5
	// var ctx = document.getElementById("chart5").getContext('2d');
	// var myChart = new Chart(ctx, {
	// 	type: 'bar',
	// 	data: {
	// 		labels: ['1', '2', '3', '4', '5', '6', '7', '7', '7', '7', '7', '7'],
	// 		datasets: [{
	// 			label: 'Total Earning',
	// 			data: [39, 19, 25, 16, 31, 39, 23, 20, 23, 18, 15, 20],
	// 			backgroundColor: [
	// 				'#fff'
	// 			],
	// 			borderColor: [
	// 				'#fff'
	// 			],
	// 			borderWidth: 0,
	// 			borderRadius: 20
	// 		},
	// 		{
	// 			label: 'Total Sales',
	// 			data: [27, 12, 26, 15, 21, 27, 13, 19, 32, 22, 18, 30],
	// 			backgroundColor: [
	// 				'rgb(255 255 255 / 25%)'
	// 			],
	// 			borderColor: [
	// 				'rgb(255 255 255 / 25%)'
	// 			],
	// 			borderWidth: 0,
	// 			borderRadius: 20
	// 		}]
	// 	},
	// 	options: {
	// 		maintainAspectRatio: false,
	// 		barPercentage: 0.7,
	// 		categoryPercentage: 0.45,
	// 		plugins: {
	// 			legend: {
	// 				maxWidth: 20,
	// 				boxHeight: 20,
	// 				position: 'bottom',
	// 				display: false,
	// 			}
	// 		},
	// 		scales: {
	// 			x: {
	// 				stacked: true,
	// 				beginAtZero: true,
	// 				display: false,
	// 			},
	// 			y: {
	// 				stacked: true,
	// 				beginAtZero: true,
	// 				display: false,
	// 			}
	// 		}
	// 	}


	// });

  // chart 6
	var options = {
		chart: {
			height: 300,
			type: 'radialBar',
			toolbar: {
				show: false
			}
		},
		plotOptions: {
			radialBar: {
				//startAngle: -135,
				//endAngle: 225,
				hollow: {
					margin: 0,
					size: '78%',
					//background: '#fff',
					image: undefined,
					imageOffsetX: 0,
					imageOffsetY: 0,
					position: 'front',
					dropShadow: {
						enabled: false,
						top: 3,
						left: 0,
						blur: 4,
						color: 'rgba(0, 169, 255, 0.25)',
						opacity: 0.65
					}
				},
				track: {
					background: 'rgba(255, 255, 255, 0.15)',
					//strokeWidth: '67%',
					margin: 0, // margin is in pixels
					dropShadow: {
						enabled: false,
						top: -3,
						left: 0,
						blur: 4,
						color: 'rgba(0, 169, 255, 0.85)',
						opacity: 0.65
					}
				},
				dataLabels: {
					showOn: 'always',
					name: {
						offsetY: -25,
						show: true,
						color: '#fff',
						fontSize: '16px'
					},
					value: {
						formatter: function (val) {
							return val + "%";
						},
						color: '#fff',
						fontSize: '45px',
						show: true,
						offsetY: 10,
					}
				}
			}
		},
		fill: {
			type: 'gradient',
			gradient: {
				shade: 'light',
				type: 'horizontal',
				shadeIntensity: 0.5,
				gradientToColors: ['#fff'],
				inverseColors: false,
				opacityFrom: 1,
				opacityTo: 1,
				stops: [0, 100]
			}
		},
		colors: ["#fff"],
		series: [68],
		stroke: {
			lineCap: 'round',
			//dashArray: 4
		},
		labels: ['Reached'],
	}
	var chart = new ApexCharts(document.querySelector("#chart6"), options);
	chart.render();



  //donut

  $("span.donut").peity("donut", {
    width: 130,
    height: 130
  });


});