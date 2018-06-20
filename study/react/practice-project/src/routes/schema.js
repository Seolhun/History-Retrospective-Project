
import HomeView from '../container/home/HomeView'
import TableScrollView from '../container/table/TableScrollView'
import TablePaginationView from '../container/table/TablePaginationView'

import BasicComponent from '../container/comparison/component/BasicComponent';
import PureComponent from '../container/comparison/component/PureComponent';
import FunctionalComponent from '../container/comparison/component/FunctionalComponent';

import NotFoundView from '../container/common/NotFoundView'

const routes = [
	routeCreator({ type: 0, color: 'primary', path: '/', label: 'Home', component: HomeView }),
	routeCreator({ type: 1, color: 'success', path: '/comparison/basic', label: 'BasicComponent', component: BasicComponent }),
	routeCreator({ type: 1, color: 'success', path: '/comparison/pure', label: 'PureComponent', component: PureComponent }),
	routeCreator({ type: 1, color: 'success', path: '/comparison/functional', label: 'FunctionalComponent', component: FunctionalComponent }),
	routeCreator({ type: 2, color: 'info', path: '/table/pagination', label: 'TablePagination', component: TableScrollView }),
	routeCreator({ type: 2, color: 'info', path: '/table/scroll', label: 'TableScroll', component: TablePaginationView }),
	routeCreator({ type: 0, color: 'warning', path: '*', exact: false, label: 'NotFoundView', component: NotFoundView }),
]

function routeCreator({ type, color, path, label, exact = true, onEnter = () => null, component= () => {} }) {
	return {
		type,
		color,
		path,
		label,
		exact,
		onEnter,
		component,
	}
}

export default routes;
