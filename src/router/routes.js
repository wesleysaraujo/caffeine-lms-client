import {routes as app} from '../app'
import Contact from '../components/views/contact/Contact'

const root = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/contato',
    name: 'Contact',
    component: Contact
  }
]

export default [
  ...root,
  ...app
]
