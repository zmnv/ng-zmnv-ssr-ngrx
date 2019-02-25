import { environment } from '../environments/environment';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Params } from '@angular/router';

import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
  ActionReducer,
  MetaReducer,
} from '@ngrx/store';

import * as fromRouter from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}

export interface State {
  router: fromRouter.RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<State> = {
  router: fromRouter.routerReducer,
};

// console.log all actions
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return (state: State, action: any): any => {
    const result = reducer(state, action);
    // console.groupCollapsed(action.type);
    // console.log('prev state', state);
    // console.log('action', action);
    // console.log('next state', result);
    // console.groupEnd();

    return result;
  };
}

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger, storeFreeze]
  : [];

export const getRouterState = createFeatureSelector<
  fromRouter.RouterReducerState<RouterStateUrl>
>('router');

export const getRouterInfo = createSelector(
  getRouterState,
  state => state.state
);

export const getCurrentRouterState = createSelector(
  getRouterState,
  getRouterInfo,
  (routerInfo) => {
    if (routerInfo) {
      return routerInfo.state;
    }

    return null;
  }
);

export const getRouterLang = createSelector(
  getCurrentRouterState,
  (routerInfo) => {
    if (routerInfo) {
      const params = routerInfo.params;
      return params['lang'] ? params['lang'] : 'ru';
    }
    return null;
  }
);

export class CustomSerializer
  implements fromRouter.RouterStateSerializer<RouterStateUrl> {
    serialize(routerState: RouterStateSnapshot): RouterStateUrl {
      let route = routerState.root;

      let params = {};
      while (route.firstChild) {
          params = {
              ...params,
              ...route.params
          };
          route = route.firstChild;
      }

      const {
          url,
          root: { queryParams }
      } = routerState;

      params = {
        ...params,
        ...route.params
      };

      return { url, params, queryParams };
    }
  }
