'use strict';

/**
 * oil-sample service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::oil-sample.oil-sample');
