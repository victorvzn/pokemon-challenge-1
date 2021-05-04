const routes = [
  {
    path: '/',
    name: 'welcome',
    component: () => import(/* webpackChunkName: "welcome" */ '../views/Welcome.vue')
  },
  {
    path: '/loading',
    name: 'loading',
    component: () => import(/* webpackChunkName: "loading" */ '../views/Loading.vue')
  },
  {
    path: '/list',
    name: 'pokemon-list-all',
    component: () => import(/* webpackChunkName: "pokemon-list-all" */ '../views/PokemonListAll.vue'),
    beforeEnter (to, from, next) {
      // TODO: I show the loading page while I fetch all pokemon and persist them using vuex
      next()
    }
  },
  {
    path: '/favorites',
    name: 'pokemon-list-favorites',
    component: () => import(/* webpackChunkName: "pokemon-list-favorites" */ '../views/PokemonListFavorites.vue')
  }
]

export default routes
