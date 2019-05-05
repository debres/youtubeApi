import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRelatedComments } from '../Actions/GetRelatedComments';

import Comments from '../Components/Comments';

class CommentsContainer extends Component {

  componentDidMount() {
    const { getRelatedComments, id } = this.props;
    getRelatedComments(id);
  }

  render() {
    return <Comments {...this.props}/>
  }
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
