'use strict';

/**
 * equipment controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::equipment.equipment', {
	async filterEquipmentByUserName(ctx) {
		const { username } = ctx.params
		const equipments = await strapi.db.query('api::equipment.equipment')
			.findMany({ where: { user: { username: username } }})
		
		return equipments
	}
});
