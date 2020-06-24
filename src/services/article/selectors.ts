import { createSelector } from 'reselect'
import { RootState } from '../store'

const getRedirectionState = (state: RootState) => state.articleState

export const getArticles = createSelector(getRedirectionState, state => state.articles)
