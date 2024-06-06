module.exports = {
	routes: [
			{
					method: 'GET',
					path: '/equipments/filterEquipmentByUserName/:username',
					handler: 'equipment.filterEquipmentByUserName'
			}
	]
}