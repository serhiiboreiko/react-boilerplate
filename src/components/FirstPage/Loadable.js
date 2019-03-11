import React from 'react';

import Loadable from 'src/components/shared/Loadable';

export default Loadable(() => import('./index'), { fallback: <div>loading first page</div> });
