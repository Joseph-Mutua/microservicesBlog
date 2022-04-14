import React from "react";
import axios from "axios";

const CommentList = ({ comments}) => {


  const renderedComments = comments.map((comment) => {
    return <li key={comment.id}>{comment.id}</li>;
  });

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
