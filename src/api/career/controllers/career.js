'use strict';

/**
 * career controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::career.career', ({ strapi }) => ({
    async post(ctx) {

        let { first_name, email, button, last_name, message, phone, file } = ctx.request.body

        await strapi.plugin('email').service('email').send({
            to: process.env.CAREER_EMAIL,
            from: process.env.SMTP_USERNAME,
            subject: `New career application form received.`,
            html: `<div>${Object.keys(ctx.request.body).filter(n => !["checkbox", "country_code", "button", "file"].includes(n)).map(n => `${n.toUpperCase()} :- ${ctx.request.body[n]}`).join('<br>')} <br> <br> ${ button ? `<a href=${button}> <button type="button">Download Attachment</button></a>` : ''}</div>`,
        });

        let career = await strapi.db.connection.raw(`INSERT INTO careers (first_name, last_name, phone, email, message) VALUES ('${first_name}', '${last_name}', ${phone}, '${email}', '${message || ''}')`)

        if(file) {
            await strapi.db.connection.raw(`INSERT INTO files_related_morphs (file_id, related_id, related_type, field) VALUES ('${file}', '${career[0].insertId}', 'api::career.career', 'file')`)
        }

        return { error: 1, msg: "Your form has been submitted successfully." }
    }
}));
