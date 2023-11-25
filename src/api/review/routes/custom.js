module.exports = {
    routes: [
        {
            method: "POST",
            path: "/review",
            handler: "review.post",
            config: {
                auth: false,
            },
        },
    ],
};
