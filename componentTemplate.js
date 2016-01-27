import cssModules from 'react-css-modules';
import React, { PropTypes, Component } from 'react';
import styles from './{{displayName}}.css';

@cssModules(styles)
class {{displayName}} extends Component {

  static propTypes = {
  }

  static contextTypes ={
    store: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  render() {
    return (
      <div className="{{displayName}}">

      </div>
    );
  }
}

export default {{displayName}};
