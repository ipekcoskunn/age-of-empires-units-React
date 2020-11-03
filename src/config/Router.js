import Home from '../screens/Home/Home';
import Units from '../screens/Units/Units';
import UnitDetail from '../screens/UnitDetail/UnitDetail';
import Login from '../screens/Login/Login';

export const routes = [
    {
        path: '/',
        exact: true,
        component: () => <Home/>,
        title: 'Home',
        isLink: true,
        isPrivate: true,
    },
    {
        path: '/units',
        exact: true,
        component: () => <Units/>,
        title: 'Units',
        isLink: true,
        isPrivate: true,
    },
    {
        path: '/units/:unitsId',
        exact: true,
        component: () => <UnitDetail/>,
        title: 'Unit Detail',
        isPrivate: true,
    },
    {
        path: '*',
        exact: true,
        component: () => <Login/>,
        title: 'Login',
        isPrivate: false,
    }
]