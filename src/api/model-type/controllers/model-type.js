'use strict';

/**
 * model-type controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::model-type.model-type', {
	async filterModelTypesByUserName(ctx) {
		const { username } = ctx.params
		const modelTypes = await strapi.db.query('api::model-type.model-type')
			.findMany({ where: { users: { username: username } }})
		
		return modelTypes
	}
});
