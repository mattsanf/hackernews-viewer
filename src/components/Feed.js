import React, { Component } from "react";
import Story from './Story';

class Feed extends Component {
  render() {
    const {stories} = this.props;
    return (
      <div className="feed flex flex-column">
        {
          stories.length > 0 ? stories.map(story => {
            return <Story story={story} key={story.id}/>
          }) : null
        }
      </div>
    );
  }
}

export default Feed;