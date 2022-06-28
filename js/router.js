import homePage from './views/home-page.cmp.js';
import aboutPage from './views/about-page.cmp.js';
import bookApp from './views/book-app.cmp.js';
import bookDetails from './views/book-details.cmp.js';
// import bookEdit from './views/car-edit.cmp.js'


const routes = [
    {
        path: '/',
        component: homePage
    },
    {
        path: '/about',
        component: aboutPage
    },
    {
        path: '/book',
        component: bookApp
    },
    {
        path: '/book/details/:bookId',
        component: bookDetails
    },
    // {
    //     path: '/car/edit/:carId?',
    //     component: carEdit
    // },
]

export const router = VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHashHistory()
})