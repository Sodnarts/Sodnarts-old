export const routes = {
    account: {
        home: '/account',
    },
    api: {
        account: `${process.env.REACT_APP_API_BASE_URL}/api/account`,
        currentUser: `${process.env.REACT_APP_API_BASE_URL}/api/current_user/`,
        language: `${process.env.REACT_APP_API_BASE_URL}/api/language/`,
        league: `${process.env.REACT_APP_API_BASE_URL}/api/league/summoner`,
        stripe: `${process.env.REACT_APP_API_BASE_URL}/api/stripe/`,
        surveys: `${process.env.REACT_APP_API_BASE_URL}/api/surveys/`,
        theme: `${process.env.REACT_APP_API_BASE_URL}/api/theme/`,
        webShop: `${process.env.REACT_APP_API_BASE_URL}/api/web-shop`,
    },
    auth: {
        login: `${process.env.REACT_APP_API_BASE_URL}/auth/google/`,
        logout: `${process.env.REACT_APP_API_BASE_URL}/api/logout/`,
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
