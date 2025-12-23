// import PageApp from './components/nav/PageApp.vue'
import PageHome from './components/nav/PageHome.vue'
import PageAbout from './components/nav/PageAbout.vue'
import PageNotFound from './components/nav/PageNotFound.vue'

export const routes = [
//   { path: '/', component: PageApp },
  { path: '/home', component: PageHome },
  { path: '/about', component: PageAbout },
  { path: '/page-not-found', component: PageNotFound },
]
