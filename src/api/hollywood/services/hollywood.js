'use strict';

/**
 * hollywood service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hollywood.hollywood');
