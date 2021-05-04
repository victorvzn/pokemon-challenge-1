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
    component: () => import(/* webpackChunkName: "pokemon-list-all" */ '../views/PokemonListAll.vue')
  },
  {
    path: '/favorites',
    name: 'pokemon-list-favorites',
    component: () => import(/* webpackChunkName: "pokemon-list-favorites" */ '../views/PokemonListFavorites.vue')
  }
]

export default routes