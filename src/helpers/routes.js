import Home from 'pages/home';
import Contact from 'pages/contact';

const Routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/contato',
    component: Contact,
    exact: true
  }
];

export default Routes;
