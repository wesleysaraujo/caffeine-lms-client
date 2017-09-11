import module from './vuex'

const registerStore = store => {
  store.registerModule('PRE_LOADER', {
    ...module
  })
}

export default registerStore
