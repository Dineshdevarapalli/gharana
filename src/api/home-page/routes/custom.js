module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/home',
            handler: 'home-page.getData',
            config: {
                auth: false
            }
        }
    ]
}
