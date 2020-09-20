import React, {useReducer,useContext} from 'react';
import {Loader,User} from '../reducers/index';

export const Store = React.createContext();

const dispatch = {};
export const StoreProvider = ({children}) => {
    const [mapLoaderState, dispatchLoaderAction] = useReducer(Loader, dispatch);
    const [CurrentUser, dispatchCurrentUser] = useReducer(User, dispatch);

    // * VALUES OF ALL REDUCERS
  const loaderValue = {mapLoaderState, dispatchLoaderAction};
  const UserValue = {CurrentUser, dispatchCurrentUser};

  // * COMBINE ALL VALUES IN A SINGLE VARIABLE
  const value = {
    loaderValue,
    UserValue
  };
// * STORE
return (
  <Store.Provider value={value}>{children}</Store.Provider>
);

}
