'use strict';

/**
 * model-type service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::model-type.model-type');
