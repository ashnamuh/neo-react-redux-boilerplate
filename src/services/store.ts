import { combineReducers, applyMiddleware, createStore, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { connectRouter, routerMiddleware, RouterState } from 'connected-react-router'
import browserHistory from 'lib/history'

import ArticleService, { ArticleState } from './article/reducers'
import ArticleSaga from './article/sagas'

import LoadingService, { LoadingState } from './loading/reducers'

export interface RootState {
  router: RouterState;
  articleState: ArticleState;
  loadingState: LoadingState;
}

const rootReducer = combineReducers({
  router: connectRouter(browserHistory),
  articleState: ArticleService,
  loadingState: LoadingService
})

const sagaMiddleware = createSagaMiddleware()

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancer =
 (process.env.NODE_ENV !== 'production' &&
   window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose) ||
 compose

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(sagaMiddleware, routerMiddleware(browserHistory))),
)

sagaMiddleware.run(ArticleSaga)

export default store
