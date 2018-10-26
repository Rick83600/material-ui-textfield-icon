import React from 'react';

import { muiTheme } from 'storybook-addon-material-ui';
import { Row, Col } from 'react-flexbox-grid';

import Paper from 'material-ui/Paper';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

// import { Button, Welcome } from '@storybook/react/demo';
import TextFieldIcon from '../src/index.js';
import Test from './test';

import Help from 'material-ui/svg-icons/action/help';
import HelpOutline from 'material-ui/svg-icons/action/help-outline';
import Money from 'material-ui/svg-icons/editor/attach-money';

const mainStyle = {
  margin: 0,
  paddingTop: 8,
};

const paperStyle = {
  padding: 8 * 2,
};

const Layout = props => (
  <Row center={`xs`} style={mainStyle}>
    <Col xs={6}>
      <Paper style={paperStyle}>{props.children}</Paper>
    </Col>
  </Row>
);

storiesOf('material-ui-textfield-icon', module)
  .addDecorator(muiTheme())
  .add('With an help icon 500px width', () => (
    <Layout>
      <TextFieldIcon
        fullWidth={false}
        hintText={`My textField`}
        icon={<HelpOutline />}
        style={{
          width: 500,
        }}
      />
    </Layout>
  ))
  .add('With an help icon 100% width', () => (
    <Layout>
      <TextFieldIcon
        fullWidth
        hintText={`My textField`}
        icon={<HelpOutline />}
      />
    </Layout>
  ))
  .add('With an money grey icon', () => (
    <Layout>
      <TextFieldIcon
        hintText={`My textField`}
        iconPosition={`after`}
        icon={<Money color={'grey'} />}
      />
    </Layout>
  ))
  .add('With an money icon blue before', () => (
    <Layout>
      <TextFieldIcon
        hintText={`My textField`}
        iconPosition={`before`}
        icon={<Money color={'blue'} />}
      />
    </Layout>
  ))
  .add('With an money icon with others props', () => (
    <Layout>
      <TextFieldIcon
        hintText={`My textField`}
        icon={<Money />}
        iconProps={{
          onClick: () => alert('onClick fired !'),
          disableTouchRipple: true,
          tooltip: 'Great tooltip',
          tooltipPosition: 'bottom-center',
        }}
      />
    </Layout>
  ))
  .add('With an money icon with floating label', () => (
    <Layout>
      <TextFieldIcon
        hintText={`My textField floating label`}
        icon={<Money color={'grey'} />}
        floatingLabelText={`My floatingLabelText`}
      />
    </Layout>
  ))
  .add('With an errorText and floatingLabelText', () => (
    <Layout>
      <TextFieldIcon
        hintText={`My textField floating label`}
        icon={<Money color={'grey'} />}
        floatingLabelText={`My floatingLabelText`}
        errorText={`This is an error !`}
      />
    </Layout>
  ))
  .add('With an errorText', () => (
    <Layout>
      <TextFieldIcon
        hintText={`My textField`}
        icon={<Money color={'grey'} />}
        errorText={`This is an error !`}
      />
    </Layout>
  ))
  .add('With a button error for test', () => (
    <Layout>
      <Test />
    </Layout>
  ));
