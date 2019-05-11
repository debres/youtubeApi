import React, { Component } from 'react';
import { connect } from 'react-redux';
import { doSearch } from '../Actions/SearchAction';
import Header from '../Components/Header/Header';


class HeaderContainer extends Component {
  render() {
    return <Header {...this.props}/>
  }
}

const mapStateToProps = (state) => {
  return {
    surfing: state.search.surfing
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    inputChangeHandeler: (event) => {
      dispatch({
        type: 'SURFING_CHANGE',
        surfing: event.target.value
      })
    },
    keyPressHendeler: (event, surfing) => {
      if (event.key === 'Enter') {
        dispatch(doSearch(surfing));
      }
    },
    buttonClickHendeler: (surfing) => {
      dispatch(doSearch(surfing));
    },
    formSubmitHendeler: (surfing) => {
      dispatch(doSearch(surfing));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
