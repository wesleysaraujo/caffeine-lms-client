import {routes as dashboard} from '../modules/dashboard'
import {routes as auth} from '../modules/auth'
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

export default [ ...root, ...dashboard, ...auth ]
