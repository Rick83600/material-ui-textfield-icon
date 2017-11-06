import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextFieldIcon from '../../src/index.js';
import Money from 'material-ui/svg-icons/editor/attach-money';

export default class Test extends React.Component {

  state = {
    error: false,
    errorText: null,
    floatingLabelText: null
  }

  onClick = () => {
    const { mode } = this.state;
    this.setState({
      errorText: (!mode ? 'An error was just happen !' : null),
      floatingLabelText: (!mode ? 'Test' : null),
      mode: !mode
    });
  }

  render() {
    const { errorText, floatingLabelText } = this.state;
    return (
      <div>
        <TextFieldIcon
          hintText='Test'
          floatingLabelText={floatingLabelText}
          icon={<Money color={'grey'} />}
          errorText={errorText}
        /><br /><br />
        <RaisedButton
          secondary={true}
          label='error'
          onClick={this.onClick}
        />
      </div>
    );
  }
}
