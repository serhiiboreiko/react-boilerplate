import React, { lazy, Suspense } from 'react';

import Loading from './Loading';

const Loadable = (
  importFunction,
  { fallback = <Loading /> } = { fallback: <Loading /> },
) => {
  const LazyComponent = lazy(importFunction);

  const Wrapper = (props) => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );

  Wrapper.preload = importFunction;

  return Wrapper;
};

export default Loadable;
