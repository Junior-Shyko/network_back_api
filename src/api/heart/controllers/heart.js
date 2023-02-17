'use strict';

/**
 * heart controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::heart.heart');
