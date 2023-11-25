'use strict';

/**
 * home-page controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::home-page.home-page', ({ strapi }) => ({

    async getData() {

        let data = {}

        data['banner'] = await strapi.db.query('api::home-page.home-page').findMany({
            populate: { 'banner': { populate: {image: { fields: ["url"] }}}},
        })

        data['images'] = await strapi.db.query('api::home-page.home-page').findMany({
            populate: { 'images': { populate: {image: { fields: ["url"] }}}},
        })

        data['legend_section'] = await strapi.db.query('api::home-page.home-page').findMany({
            populate: { 'legend_section': { populate: { fields: ['description', 'title']}},'images': { populate: {image: { fields: ["url"] }}}},
        })

        data['what_legend_says'] = await strapi.db.query('api::what-legend-say.what-legend-say').findMany({
            where: { home: true },
            populate: {image: { fields: ["url"] }, video: { fields: ["url"] } },
            limit: 3,
        })

        data['how_it_work'] = await strapi.db.query('api::home-page.home-page').findMany({
            populate: { 'how_it_work': { populate: {image: { fields: ["url"] }}}},
        })

        data['join_gharana_section'] = await strapi.db.query('api::home-page.home-page').findMany({
            populate: { 'join_gharana_section': { populate: {image: { fields: ["url"] }}}},
        })

        data['offering'] = await strapi.db.query('api::offer.offer').findMany({
            where: { home: true },
            populate: {image: { fields: ["url"] }},
            limit: 5
        })

        data['you_have_been_waiting_for'] = await strapi.db.query('api::home-page.home-page').findMany({
            populate: ['you_have_been_waiting_for'],
        })

        data['you_have_been_waiting_for_image'] = await strapi.db.query('api::home-page.home-page').findMany({
            populate: { 'you_have_been_waiting_for_image': { populate: {image: { fields: ["url"] }}}},
        })

        data['gurus_section'] = await strapi.db.query('api::home-page.home-page').findMany({
            populate: { 'gurus_section': { populate: {image: { fields: ["url"] }}}},
        })

        data['gurus'] = await strapi.db.query('api::gallary.gallary').findMany({
            where: { home: true },
            select: ['name', 'title', 'short_description'],
            populate: {image: { fields: ["url"] }, video: { fields: ["url"] } },
            limit: 5
        })

        data['reviews'] = await strapi.db.query('api::review.review').findMany({
            populate: {image: { fields: ["url"] }},
            where: { published_at: { '$notNull': true} },
            limit: 20
        })

        data['stars'] = await strapi.db.query('api::star.star').findMany({
            where: { home: true },
            populate: {image: { fields: ["url"] }, video: { fields: ["url"] } },
            limit: 13
        })

        data['SEO'] = await strapi.db.query('api::home-page.home-page').findOne({
            populate: { 'SEO': { populate: {image: { fields: ["url"] }}}},
        })

        data['becom_a_teacher_section'] = await strapi.db.query('api::home-page.home-page').findMany({
            populate: { 'becom_a_teacher_section': { populate: { image: { fields: ["url"] }, fields: ['description', 'title']}}},
        })
        
        return data
    }
}));
