export const routes = {
    account: {
        home: '/account',
    },
    api: {
        account: 'https://sodnarts-server.herokuapp.com/api/account',
        currentUser: 'https://sodnarts-server.herokuapp.com/api/current_user/',
        language: 'https://sodnarts-server.herokuapp.com/api/language/',
        stripe: 'https://sodnarts-server.herokuapp.com/api/stripe/',
        surveys: 'https://sodnarts-server.herokuapp.com/api/surveys/',
        theme: 'https://sodnarts-server.herokuapp.com/api/theme/',
        webShop: 'https://sodnarts-server.herokuapp.com/api/web-shop',
    },
    auth: {
        login: 'https://sodnarts-server.herokuapp.com/auth/google/',
        logout: 'https://sodnarts-server.herokuapp.com/api/logout/',
    },
    emailService: {
        drawer: {
            password: 'nimda',
            username: 'admin',
        },
        emailDashboard: '/email-service/surveys/',
        home: '/email-service',
    },
    home: {
        home: '/',
    },
    league: {
        home: '/league-watcher/',
    },
    webShop: {
        checkout: '/web-shop/checkout/',
        home: '/web-shop/',
        shop: '/web-shop/shop/',
    },
};
