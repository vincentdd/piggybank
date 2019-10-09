const APIV1 = '/api/v1';
const APIV2 = '/api/v2';
const APIV3 = 'http://192.168.0.102:8888';

module.exports = {
    name: '',
    prefix: '',
    footerText: 'piggybank  © 2019',
    // logo: '/logo.png',
    // iconFontCSS: '/iconfont.css',
    // iconFontJS: '/iconfont.js',
    CORS: [],
    openPages: ['/login'],
    apiPrefix: '/api/v1',
    APIV1,
    APIV2,
    APIV3,
    api: {
        GET_ALL_BILLS: `/bills`,
        POST_BILL: '/bills'
    },
};