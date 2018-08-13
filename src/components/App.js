import React, { Component } from "react";
import Header from './Header';
import Feed from './Feed';

class App extends Component {

  constructor() {
    super();
    this.state = {
      topStories: []
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
    .then(response => response.json())
    .then(parsedJSON => {
      let promises = []
      parsedJSON.slice(0,10).forEach((storyId) => promises.push(this.fetchStory(storyId)));
      Promise.all(promises)
      .then(topStories => {
        this.setState({
          topStories
        })
      })
    })
    .catch(error => console.error("fetching new stories failed", error));
  }

  fetchStory(storyId){
    return fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json?kids`)
    .then(response => response.json())
    .then(parsedJSON => parsedJSON)
    .catch(error => console.error(`fetching story ${storyId} failed`))
  }

  render() {
    const {topStories} = this.state;

    return (
      <div className="app">
        <Header />
        <Feed stories={topStories} />
      </div>
    );
  }
}

export default App;