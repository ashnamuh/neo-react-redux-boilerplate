import { createAsyncAction } from 'typesafe-actions'
import { Article } from 'types/article'

export const fetchArticleListAsync = createAsyncAction(
  'FETCH_ARTICLE_LIST_REQUEST',
  'FETCH_ARTICLE_LIST_SUCCESS',
  'FETCH_ARTICLE_LIST_FAILURE',
)<{offset: number; limit?: number}, Article[], undefined>()
