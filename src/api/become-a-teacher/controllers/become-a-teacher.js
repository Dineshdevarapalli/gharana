'use strict';

/**
 * become-a-teacher controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::become-a-teacher.become-a-teacher', ({ strapi }) => ({

    async getData(ctx) {

        if(ctx.params.skill) {

            let categories = await strapi.db.connection.raw(`SELECT title FROM offers WHERE category = '${ctx.params.skill}'`)
            return categories[0]?.filter(n => n.title != ctx.params.skill).map((n, i)=> { return { id: i + 1, label: n.title }})
        } return { error: 0, data: [] }
    },

    async post(ctx) {

        let { first_name, last_name, phone, skill, message, email, button = false } = ctx.request.body

        await strapi.plugin('email').service('email').send({
            to: process.env.TEACHER_EMAIL,
            from: process.env.SMTP_USERNAME,
            subject: `New teacher application received.`,
            html: `<div>${Object.keys(ctx.request.body).filter(n => !["checkbox", "country_code", "button", "file"].includes(n)).map(n => `${n.toUpperCase()} :- ${ctx.request.body[n]}`).join('<br>')} <br> <br> ${ button ? `<a href=${button}> <button type="button">Download Attachment</button></a>` : ''}</div>`,
        });

        await strapi.db.connection.raw(`INSERT INTO become_a_teachers (first_name, last_name, phone, email, skill, sub_skill, message) VALUES ('${first_name}', '${last_name}', ${phone}, '${email}', '${skill}', '${skill.split('(')[1].split(')')[0]}', '${message}')`)

        return { error: 1, msg: "Your form has been submitted successfully." }
    }
}));
