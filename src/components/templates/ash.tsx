import * as React from 'react'
import { Article } from 'types/article'

interface Props {
  articles: Article[];
}

const AshTemplate: React.FC<Props> = (props) => {
  const { articles } = props

  return (
    <>
      <h1>Ash page</h1>
      <ul>
        {articles.length ? articles.map(article => (<li key={article.slug}>{article.title}</li>)) : (<p>loading...</p>)}
      </ul>
    </>
  )
}

export default AshTemplate
