import React, { Component } from "react";
import Comment from './Comment';

class Comments extends Component {
  render() {
    const {className, comments} = this.props;
    const classNames = `${className} comments flex flex-column mt-large`;
    return (
      <ul className={classNames}>
        {
          comments.length > 0 ? comments.map(comment => {
            return <Comment comment={comment} key={comment.id}/>
          }) : <p>No comments yet...</p>
        }
      </ul>
    );
  }
}

export default Comments;