import Loadable from 'react-loadable';

import Loading from './Loading';

export default (config) => Loadable({ loading: Loading, ...config });
