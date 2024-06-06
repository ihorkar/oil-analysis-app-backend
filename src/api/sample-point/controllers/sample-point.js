'use strict';

/**
 * sample-point controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::sample-point.sample-point', {
	async filterSamplePointsByUserName(ctx) {
		const { username } = ctx.params
		try {
			const samplePoints = await strapi.db.query('api::sample-point.sample-point')
				.findMany({ where: { users: { username: username } }})
		
			return ctx.send(samplePoints)
		} catch(err) {
			return ctx;
		}		
	}
});
