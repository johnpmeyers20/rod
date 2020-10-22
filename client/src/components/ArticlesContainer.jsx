import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { getAllArticles, putArticle, postArticle, deleteArticle } from '../services/api-helper';
import ArticlesList from './ArticlesList';
import Article from './Article';
import ArticlesCreate from './ArticlesCreate';
import ArticlesEdit from './ArticlesEdit';

class ArticlesContainer extends Component {
  state = {
    articles: [],
    formData: {
      title: '',
      author: '',
      publication_date: '',
      body: ''
    }
  }

  async componentDidMount() {
    const articles = await getAllArticles();
    this.setState({ articles });
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        [name]: value
      }
    }));
  }

  createSubmit = async () => {
    const newArticle = await postArticle(this.state.formData);
    this.setState(prevState => ({
      articles: [
        ...prevState.articles,
        newArticle
      ]
    }));
    this.props.history.push('/articles');
  }
  removeArticle = async (articleId) => {
    await deleteArticle(articleId);
    this.setState(prevState => ({
      articles: prevState.articles.filter(article => article.id !== articleId)
    }));
    this.props.history.push('/articles');
  }

  editSubmit = async (id) => {
    const updatedArticle = await putArticle(id, this.state.formData);
    this.setState(prevState => ({
      articles: prevState.articles.map(article => {
        return article.id === parseInt(id) ? updatedArticle : article
      })
    }));
    this.props.history.push(`/articles/${id}`)
  }

  setEdit = (articleData) => {
    const { title, author, publication_date, body } = articleData;
    this.setState({
      formData: {
        title,
        author,
        publication_date,
        body
      }
    });
    this.props.history.push(`/articles/${articleData.id}/edit`);
  }

  render() {
    return (
      <div>
        <Route exact path='/articles' render={() => (
          <ArticlesList
            articles={this.state.articles}
          />
        )} />
        <Route exact path='/articles/:id' render={(props) => {
          const articleId = props.match.params.id;
          const currentArticle = this.state.articles.find(article => article.id === parseInt(articleId));
          return <Article
            setEdit={this.setEdit}
            removeArticle={this.removeArticle}
            currentArticle={currentArticle}
          />
        }} />
        <Route path='/articles/new' render={() => (
          <ArticlesCreate
            formData={this.state.formData}
            handleChange={this.handleChange}
            createSubmit={this.createSubmit}
          />
        )} />
        <Route path="/articles/:id/edit" render={(props) => {
          const articleId = props.match.params.id;
          return <ArticlesEdit
            articleId={articleId}
            formData={this.state.formData}
            handleChange={this.handleChange}
            editSubmit={this.editSubmit}
          />
        }} />
      </div>
    )
  }
};

export default withRouter(ArticlesContainer);