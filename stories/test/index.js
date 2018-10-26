import React, { Fragment } from 'react';

import RaisedButton from 'material-ui/RaisedButton';

import TextFieldIcon from '../../src/index.js';

import Money from 'material-ui/svg-icons/editor/attach-money';

class Test extends React.Component {
  state = {
    error: false,
    errorText: null,
    floatingLabelText: null,
  };

  onClick = () => {
    const { mode } = this.state;
    this.setState({
      errorText: !mode ? 'An error was just happen !' : null,
      floatingLabelText: !mode ? 'Test' : null,
      mode: !mode,
    });
  };

  render() {
    const { errorText, floatingLabelText } = this.state;
    return (
      <Fragment>
        <TextFieldIcon
          hintText={`Test`}
          floatingLabelText={floatingLabelText}
          icon={<Money color={'grey'} />}
          errorText={errorText}
        />
        <br />
        <br />
        <RaisedButton secondary={true} label="error" onClick={this.onClick} />
      </Fragment>
    );
  }
}

export default Test;
