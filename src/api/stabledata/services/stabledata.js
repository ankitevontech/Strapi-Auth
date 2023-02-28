'use strict';

/**
 * stabledata service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::stabledata.stabledata');
