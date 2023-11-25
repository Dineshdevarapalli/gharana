'use strict';

/**
 * contact-page controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::contact-page.contact-page', ({ strapi }) => ({
    async post(ctx) {

        let { first_name, email, message, last_name, country, phone, art_forms, country_code, button = false } = ctx.request.body

        await strapi.plugin('email').service('email').send({
            to: process.env.CONTACT_US_EMAIL,
            from: process.env.SMTP_USERNAME,
            subject: `New contact request form received.`,
            html: `<div>${Object.keys(ctx.request.body).filter(n => !["checkbox", "country_code", "button", "file"].includes(n)).map(n => `${n.toUpperCase()} :- ${ctx.request.body[n]}`).join('<br>')} <br> <br> ${ button ? `<a href=${button}> <button type="button">Download Attachment</button></a>` : ''}</div>`,
        });

        await strapi.db.connection.raw(`INSERT INTO contact_uses (first_name, last_name, country, phone, email, art_forms, message, country_code) VALUES ('${first_name}', '${last_name}', '${country}', ${phone.split(' ')[1]}, '${email}', '${art_forms}', '${message}', '${phone.split(' ')[0]}')`)
        
        return { error: 1, msg: "Your form has been submitted successfully." }
    }
}));
