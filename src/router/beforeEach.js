import Store from '../vuex'

const isAuthRoute = route => route.path.indexOf('/login') !== -1
const isLogged = () => Store.getters.isLogged

export default (to, from, next) => {
  if (!isAuthRoute(to) && !isLogged()) {
    next('/login')
  } else {
    next()
  }
}
