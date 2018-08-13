import React, { Component } from "react";
import Comments from './Comments';

class Story extends Component {
  constructor() {
    super();
    this.state = {
      showComments: false,
      comments: []
    };

    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  componentDidMount() {
    this.fetchData()
  }

  handleToggleClick() {
    this.setState({
      showComments: !this.state.showComments
    });
  }

  fetchData() {
    if (this.props.story.kids === undefined) { return; }
    let commentIds = this.props.story.kids.slice(0,20)
    let promises = [];
    commentIds.forEach((id) => promises.push(this.fetchComment(id)));
    Promise.all(promises)
    .then(comments => {
      this.setState({
        comments
      })
    });
  }

  fetchComment(id) {
    return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
    .then(response => response.json())
    .then(parsedJSON => parsedJSON)
    .catch(error => console.error(`fetching story ${id} failed`))
  }

  render() {
    const {by, title, url} = this.props.story;
    const {comments} = this.state;
    return (
      <div className="story flex flex-wrap justify-space-between align-items-center mv-small p-medium">
        <a className="link" href={url} target="_blank">{title}</a>
        <p className="poster">posted by: {by}</p>
        <button onClick={this.handleToggleClick}>toggle comments</button>
        {this.state.showComments &&
          <Comments className="w-100" comments={comments} />
        }
      </div>
    );
  }
}

export default Story;