import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Articles extends Component {
  state = {
    articles: [],
    results:[],
    query: "",
    start: "",
    end: "",
    num: 5
  };

  componentDidMount() {
    this.loadArticles();
    console.log(this.state.articles);
  }

  loadArticles = () => {
    API.getArticles()
      .then(res =>
        this.setState({ articles: res.data })
      )
      .catch(err => console.log(err));
  };

  

  searchArticles = query => {
    API.searchArticles(query)
      .then(res => {
        const results = res.data.response.docs;
        this.setState({ results: results })
        console.log(this.state.results);
      })
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.query) {
      const searchObj = {
        query: this.state.query,
        start: this.state.start,
        end: this.state.end,
        num: this.state.num
      };
      this.searchArticles(searchObj);
    }
  }

  saveArticle = article => {
    API.saveArticle(article)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  }

  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  }

  displaySearchArticle = article => {
    const articleObj = {
      title: article.headline.main,
      url: article.web_url,
      date: article.pub_date
    }
    return <ListItem key={articleObj.title}>
      <strong><a href={articleObj.url} target="_blank">{articleObj.title}</a></strong>
      <p>{articleObj.date}</p>
      <button onClick={() => this.saveArticle(articleObj)}>Save</button>
    </ListItem>;
  }

  displaySavedArticle = article => {
    return <ListItem key={article._id}>
            <strong><a href={article.url} target="_blank">{article.title}</a></strong>
            <p>{article.date}</p>
            <DeleteBtn onClick={() => this.deleteArticle(article._id)} />
    </ListItem>;
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <h1>Search Articles</h1>
          <form>
              <Input
                value={this.state.query}
                onChange={this.handleInputChange}
                name="query"
                placeholder="Query string (required)"
              />
              <Input
                value={this.state.start}
                onChange={this.handleInputChange}
                name="start"
                placeholder="Start Date (Optional)"
              />
              <Input
                value={this.state.end}
                onChange={this.handleInputChange}
                name="end"
                placeholder="End Date (Optional)"
              />
              <Input
                value={this.state.num}
                onChange={this.handleInputChange}
                name="num"
                placeholder="Number of Articles (Default 10)"
              />
              <FormBtn
                disabled={!(this.state.query)}
                onClick={this.handleFormSubmit}
              >
                Search
              </FormBtn>
            </form>
        </Row>
        <Row>
          <h1>Search Results</h1>
          <List>
            {this.state.results.length ? (
                this.state.results.map(item => this.displaySearchArticle(item))
              ):(
                <ListItem><strong>No Search Results to display</strong></ListItem>
              )
            }
          </List>
        </Row>
        <Row>
          <h1>Saved Articles go here</h1>
          {this.state.articles.length ? (
              <List>
                { this.state.articles.map(article => (this.displaySavedArticle(article))) }
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
        </Row>
      </Container>
    );
  }
}

export default Articles;
