module.exports = {
	routes: [
			{
					method: 'GET',
					path: '/sample-points/filterSamplePointsByUserName/:username',
					handler: 'api::sample-point.sample-point.filterSamplePointsByUserName'
			}
	]
}