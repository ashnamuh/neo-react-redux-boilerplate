import { createReducer, ActionType } from 'typesafe-actions'
import * as actions from './actions'
import { Article } from 'types/article'

export type Actions = ActionType<typeof actions>

export interface ArticleState {
  articles: {
    data: Article[];
    loading: LoadingStatus;
  };
}

const initialState: ArticleState = {
  articles: {
    data: [],
    loading: 'initial'
  }
}

export default createReducer<ArticleState, Actions>(initialState)
  .handleAction(actions.fetchArticleListAsync.request, (state) => ({ ...state,  articles: { ...state.articles, loading: 'loading' } }))
  .handleAction(actions.fetchArticleListAsync.success, (state, action) => ({ ...state,  articles: { data: action.payload, loading: 'loaded' } }))
  .handleAction(actions.fetchArticleListAsync.failure, (state) => ({ ...state,  articles: { ...state.articles, loading: 'loaded' } }))
