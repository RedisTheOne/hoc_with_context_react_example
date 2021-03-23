import React from 'react';
import { Redirect } from 'react-router-dom';

const WithAuth = (Component) => {
  return class extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        isAuthed: true
      };
    }

    logOut = () => {
      localStorage.removeItem('TOKEN');
      this.setState({ isAuthed: false });
    };

    componentDidMount() {
      if(!localStorage.getItem('TOKEN')) {
        this.setState({ isAuthed: false });
      }
    }

    render() {
      if(!this.state.isAuthed) {
        return <Redirect to={'/login'} />;
      }
      return <Component {...this.props} logOut={this.logOut} />;
    }
  }
};

export default WithAuth;