let articles = []

export const useArticles = () => articles.slice()

export const getArticles = () => fetch("http://localhost:3000/articles")
    .then(res => res.json())
    .then(parsedArticles => articles = parsedArticles)