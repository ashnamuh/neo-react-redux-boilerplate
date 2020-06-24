import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as articleSelectors from 'services/article/selectors'
import * as articleActions from 'services/article/actions'

export default function AshPage() {
  const dispatch = useDispatch()
  const artices = useSelector(articleSelectors.getArticles)

  React.useEffect(() => {
    dispatch(articleActions.fetchArticleListAsync.request({ offset: 0 }))
  }, [dispatch])

  return (
    <>
      <h1>Ash page</h1>
      <ul>
        {artices.length ? artices.map(article => (<li key={article.slug}>{article.title}</li>)) : (<p>loading...</p>)}
      </ul>
    </>
  )
}
