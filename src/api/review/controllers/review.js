'use strict';

/**
 * review controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::review.review', ({ strapi }) => ({ 
    async post(ctx) {

        let { name, email, image, message } = ctx.request.body

        let review = await strapi.db.connection.raw(`INSERT INTO reviews (name, email, description) VALUES ('${name}', '${email || null}', '${message}')`)

        if(image) {
            await strapi.db.connection.raw(`INSERT INTO files_related_morphs (file_id, related_id, related_type, field) VALUES ('${image}', '${review[0].insertId}', 'api::review.review', 'image')`)
        }
            
        return { error: 1, msg: "Your form has been submitted successfully." }
    }
}));
