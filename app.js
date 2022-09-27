var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
	// The type of chart we want to create
	type: 'line', // also try bar or other graph types

	// The data for our dataset
	data: {
		labels: ["2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018",, "2019", "2020", "2021" ],
		// Information about the dataset
    datasets: [{
			label: "MERRA-2 Earth Skin Temperature (C)",
			backgroundColor: '#FF9F33',
			borderColor: 'red',
			data: [2571, 2599, 2637, 2667, 2651, 2665, 2646, 2564, 2597, 2614, 2637, 2578, 2583, 2605, 2639, 2615, 2637, 2562, 2544, 2605, 2569, 2629],
		}]
	},

	// Configuration options
	options: {
    layout: {
      padding: 10,
    },
		legend: {
			position: 'bottom',
		},
		title: {
			display: true,
			text: 'Location: Chittahong, Bangladesh Latitude  22.3731   Longitude 91.7989'
		},
		scales: {
			yAxes: [{
				scaleLabel: {
					display: true,
					labelString: 'ANN'
				}
			}],
			xAxes: [{
				scaleLabel: {
					display: true,
					labelString: 'Year'
				}
			}]
		}
	}
});
