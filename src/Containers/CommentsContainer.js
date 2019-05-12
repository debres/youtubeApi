import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRelatedComments } from '../Actions/GetRelatedComments';

import Comments from '../Components/Comments/Comments';

class CommentsContainer extends Component {

  shouldComponentUpdate(prevProps) {
    if (this.props.commentItems !== prevProps.commentItems) {
      return true;
    } if (this.props.id !== prevProps.id) {
      return true;
    } else {
      return false;
    }
  }

  componentDidUpdate() {
    const { getRelatedComments, id } = this.props;
    getRelatedComments(id);
  }

  componentWillMount() {
    const { getRelatedComments, id } = this.props;
    getRelatedComments(id);
  }

  render() {
    return <Comments {...this.props}/>
  }
}

const mapStateToProps = (state) => {
  return {
    commentItems: state.relatedComments.commentItems,
    loading: state.relatedComments.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getRelatedComments: (id) => dispatch(getRelatedComments(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer);
