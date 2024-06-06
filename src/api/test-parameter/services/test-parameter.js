'use strict';

/**
 * test-parameter service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::test-parameter.test-parameter');
