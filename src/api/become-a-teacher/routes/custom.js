module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/sub-skills/:skill',
            handler: 'become-a-teacher.getData',
            config: {
                auth: false
            }
        },
        {
            method: "POST",
            path: "/become-a-teacher",
            handler: "become-a-teacher.post",
            config: {
                auth: false,
            },
        },
    ]
}