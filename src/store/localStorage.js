export const loadState = () => {
  try {
    const serializedState = window.localStorage.getItem('PROJECT_NAME');
    return (serializedState !== null) ? JSON.parse(serializedState) : undefined;
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    window.localStorage.setItem('PROJECT_NAME', serializedState);
  } catch (err) {
    // Some error handler
  }
};
