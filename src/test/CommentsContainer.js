import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getRelatedComments } from '../Actions/GetRelatedComments';

import Comments from '../Components/Comments';

function CommentsContainer(props) {

  useEffect(() => {
    props.getRelatedComments(props.id);
  },[]);

  return <Comments commentItems={commentItems}/>
}

const mapStateToProps = (state) => {
  return {
    commentItems: state.relatedComments.commentItems
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getRelatedComments: (id) => dispatch(getRelatedComments(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer);
