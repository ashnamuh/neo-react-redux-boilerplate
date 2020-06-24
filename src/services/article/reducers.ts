import { createReducer, ActionType } from 'typesafe-actions'
import * as actions from './actions'
import { Article } from 'types/article'

export type Actions = ActionType<typeof actions>

export interface ArticleState {
  articles:  Article[];
}

const initialState: ArticleState = {
  articles: []
}

export default createReducer<ArticleState, Actions>(initialState)
  .handleAction(actions.fetchArticleListAsync.success, (state, action) => ({ ...state,  articles: action.payload }))
