import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as articleSelectors from 'services/article/selectors'
import * as articleActions from 'services/article/actions'

import AshTemplate from 'components/templates/ash'

export default function AshPage() {
  const dispatch = useDispatch()
  const articles = useSelector(articleSelectors.getArticles)

  React.useEffect(() => {
    dispatch(articleActions.fetchArticleListAsync.request({ offset: 0 }))
  }, [dispatch])

  return (<AshTemplate articles={articles} />)
}
