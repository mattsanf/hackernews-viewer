import React, { Component } from "react";

class Comment extends Component {
  constructor() {
    super();
  }

  render() {
    console.log(this.props.comment);
    const {by, text} = this.props.comment
    return (
      <li className="comment mv-small p-small flex flex-column">
        <h5 className="pb-small">{by}:</h5>
        <p dangerouslySetInnerHTML={{ __html: text }} />
      </li>
    );
  }
}

export default Comment;