'use strict';

/**
 * web-lead service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::web-lead.web-lead');
