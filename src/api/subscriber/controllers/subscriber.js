'use strict';

/**
 * subscriber controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::subscriber.subscriber', ({ strapi }) => ({

    async post(ctx) {

        let { email } = ctx.request.body

        await strapi.db.connection.raw(`INSERT INTO subscribers (email) VALUES ('${email}')`)
        
        return { error: 1, msg: "You have been subscribed successfully." }
    }
}));
