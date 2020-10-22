import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost:3000"
})

// ============== Articles =================

export const getAllArticles = async () => {
  const resp = await api.get('/articles');
  return resp.data;
}

export const getOneArticle = async (id) => {
  const resp = await api.get(`/articles/${id}`);
  return resp.data;
}

export const postArticle = async (articleData) => {
  const resp = await api.post('/articles', articleData);
  return resp.data;
}

export const putArticle = async (id, articleData) => {
  const resp = await api.put(`/articles/${id}`, articleData);
  return resp.data;
}

export const deleteArticle = async (id) => {
  const resp = await api.delete(`/articles/${id}`);
  return resp.data;
}