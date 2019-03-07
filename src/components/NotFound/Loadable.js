import Loadable from 'src/components/shared/Loadable';

export default Loadable({ loader: () => import('./index') });
