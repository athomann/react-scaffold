import React, { PropTypes, Component } from 'react';
import styles from './{{displayName}}.css';

class {{displayName}} extends Component {

  static propTypes = {
  }

  state = {
    exampleState : 'initial state'
  };

  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  componentWillUpdate() {
  }

  componentDidUpdate() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div className="{{displayName}}"></div>
    );
  }
}

export default {{displayName}};
