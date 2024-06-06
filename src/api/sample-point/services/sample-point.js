'use strict';

/**
 * sample-point service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sample-point.sample-point');
