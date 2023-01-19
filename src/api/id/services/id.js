'use strict';

/**
 * id service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::id.id');
