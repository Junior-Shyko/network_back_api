'use strict';

/**
 * heart router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::heart.heart');
