var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
	// The type of chart we want to create
	type: 'line', // also try bar or other graph types

	// The data for our dataset
	data: {
		labels: ["2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018",, "2019", "2020", "2021" ],
		// Information about the dataset
    datasets: [{
			label: " MERRA-2 Specific Humidity at 2 Meters (g/kg)",
			backgroundColor: 'lightblue',
			borderColor: 'darkblue',
			data: [1593, 1581, 1569, 1581, 1575, 1636, 1611, 1611, 1617, 1642, 1666, 1599, 1617, 1611, 1617, 1624, 1721, 1721, 1654, 1662, 1672, 1648
			],
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
