'use strict';

/**
 * offer controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::offer.offer', ({ strapi }) => ({

    async getSuggestions(ctx) {

        let [categories] = await strapi.db.connection.raw(`SELECT category FROM ${ctx.params.type} GROUP BY category`)

        return categories
    }
}));
