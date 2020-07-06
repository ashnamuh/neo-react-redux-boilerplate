import { put, all, takeEvery, call } from 'redux-saga/effects'
import { ActionType } from 'typesafe-actions'
import * as actions from './actions'
import * as ArticleModel from './requests'

export function* fetchArticleListSaga(action: ActionType<typeof actions.fetchArticleListAsync.request>) {
  try {
    const data = yield call(ArticleModel.getArticles, action.payload.offset, action.payload.limit)
    yield put(actions.fetchArticleListAsync.success(data))
  } catch (err) {
    yield put(actions.fetchArticleListAsync.failure())
  }
}

export default function * () {
  yield all([
    takeEvery(actions.fetchArticleListAsync.request, fetchArticleListSaga),
  ])
}
