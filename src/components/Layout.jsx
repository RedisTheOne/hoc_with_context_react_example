import { GeneralContext } from '../context/General';
import { Link } from 'react-router-dom';
import React from 'react';

const Layout = (Component) => {
  return class extends React.Component {
    // Context
    static contextType = GeneralContext;
    
    constructor(props) {
      super(props);

      this.state = {
        inputText: '',
        inputStatus: 0
      }
    }

    // onChange input functions
    titleInputOnChange = (e) => this.setState({ inputText: e.target.value });
    statsuInputOnChange = (e) => this.setState({ inputStatus: parseInt(e.target.value) });

    // On mount we should update the state, to be same as context values
    componentDidMount() {
      this.setState({ 
        inputText: this.context.title,
        inputStatus: this.context.status
      });
    }

    // Only if values are changed state should be updated, NERD
    shouldComponentUpdate(nextProps, nextState) {
      if(this.state.inputText === nextState.inputText && this.state.inputStatus === nextState.inputStatus)
        return false;
      
      return true;
    }

    // Did this to check updates
    componentDidUpdate() {
      console.log('Updated');
    }

    componentWillUnmount() {
      console.log('Destroyed');
    }

    render() {
      let { setTitle, setStatus } = this.context;
      let { inputText, inputStatus } = this.state;

      return (
        <div>
          <Component {...this.props} />
          <div>
            <input 
              type="text"
              value={this.state.inputText}
              onChange={this.titleInputOnChange} />
            <button
              onClick={() => setTitle(inputText)}>Change Title</button>
          </div>
          <div>
            <input
              type="number"
              value={inputStatus}
              onChange={this.statsuInputOnChange}
            />
            <button
              onClick={() => setStatus(inputStatus)}>Change Status</button>
          </div>
          <Link to={'/'}>Home</Link>
          <Link to={'/about'}>About</Link>
        </div>
      );
    }
  };
};

export default Layout;