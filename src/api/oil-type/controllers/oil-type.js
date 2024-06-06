'use strict';

/**
 * oil-type controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::oil-type.oil-type', {
    async getTestParametersByOilType(ctx) {
        const { oil_type } = ctx.query
        const oilType = await strapi.db.query('api::oil-type.oil-type').findOne({ where: { name: oil_type } });
        const test_params = await strapi.db.query('api::test-parameter.test-parameter')
            .findMany({ where: { oil_type: { name: oil_type } } })

        return test_params
    }
});
