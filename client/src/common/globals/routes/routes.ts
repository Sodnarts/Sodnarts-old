export const routes = {
    account: {
        home: '/account',
    },
    api: {
        account: '/api/account',
        currentUser: '/api/current_user/',
        language: '/api/language/',
        stripe: '/api/stripe/',
        surveys: '/api/surveys/',
        theme: '/api/theme/',
        webShop: '/api/web-shop',
    },
    auth: {
        login: '/auth/google/',
        logout: '/api/logout/',
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
