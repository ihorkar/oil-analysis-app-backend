module.exports = {
	routes: [
			{
					method: 'GET',
					path: '/model-types/filterModelTypesByUserName/:username',
					handler: 'model-type.filterModelTypesByUserName'
			}
	]
}