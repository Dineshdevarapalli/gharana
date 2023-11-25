module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/get-suggestions/:type',
            handler: 'offer.getSuggestions',
            config: {
                auth: false
            }
        }
    ]
}
