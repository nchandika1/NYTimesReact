import axios from "axios";
import qs from "qs";
const BASEURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?';
const APIKEY = '&api-key=84afad745f424c2a9fa2f4e7ea4b4a5e';

export default {
  // Gets all the articles
  getArticles: function() {
    return axios.get("/api/articles");
  },
  // Gets an article with the given id
  getArticle: function(id) {
    return axios.get("/api/articles/" + id);
  },
  // Deletes an article with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves an article to the database
  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  },
  // Search for NYT Articles
  searchArticles: function(query) {
    var queryStr = qs.stringify({ q: query.title, begin_date: query.start+'0101', end_date: query.end+'0101', sort: 'newest'});
    return axios.get(BASEURL + queryStr + APIKEY);
  }
};
