import api from 'lib/api'
import { Article } from 'types/article'

export const getArticles = async (offset?: number, limit?: number) => {
  const { data } = await api.request<{articlesCount: number; articles: Article[]}>({
    method: 'get',
    url: '/articles',
    params: {
      limit: limit || 10,
      offset: offset || 0
    }
  })

  return data.articles
}
