import React from 'react';

import PropTypes from 'prop-types';

import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';

const getStyles = props => {
  const iconStyle = {
    position: 'absolute',
    top: 0,
    zIndex: 2,
  };

  iconStyle[props.iconPosition === 'before' ? 'left' : 'right'] = 0;

  if (props.floatingLabelText) {
    iconStyle.top = 23;
  }

  return {
    main: {
      display: 'inline-block',
      position: 'relative',
      width: props.fullWidth ? '100%' : '256px',
    },
    iconStyle,
    textFieldStyle: {
      textIndent: props.iconPosition === 'before' ? 40 : 0,
    },
  };
};

class TextFieldIcon extends React.Component {
  static propTypes = {
    /**
     * The icon component you want to display
     * @type {Node}
     */
    icon: PropTypes.node.isRequired,
    /**
     * Icon position you can choose after | before (after by default)
     * @type {String}
     */
    iconPosition: PropTypes.string,
    /**
     * The object who represent the icon properties
     * @type {Object}
     */
    iconProps: PropTypes.object,
    /**
     * The object who represent the icon styles
     * @type {Object}
     */
    iconStyle: PropTypes.object,
  };

  static defaultProps = {
    iconPosition: 'after',
  };

  constructor(props) {
    super();
    this.styles = getStyles(props);
  }

  componentWillUpdate(nextProps) {
    this.styles = getStyles(nextProps);
  }

  render() {
    const {
      icon,
      iconPosition,
      iconProps,
      style,
      iconStyle,
      textFieldStyle,
      ...textFieldProps
    } = this.props;
    return (
      <div style={{ ...this.styles.main, ...style }}>
        <IconButton
          style={{ ...this.styles.iconStyle, ...iconStyle }}
          {...iconProps}
        >
          {icon}
        </IconButton>
        <TextField
          fullWidth
          name={`material-ui-textfield-icon`}
          style={{ ...this.styles.textFieldStyle, ...textFieldStyle }}
          {...textFieldProps}
        />
      </div>
    );
  }
}

export default TextFieldIcon;
