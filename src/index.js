import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';

const getStyles = props => {
  return {
    main: {
      display: 'inline-block',
      position: 'relative',
      width: (props.fullWidth ? '100%' : '256px')
    },
    iconStyle: (
      props.iconPosition === 'before'
        ? {
            position: 'absolute',
            left: 0,
            bottom: 0
          }
        : {
            position: 'absolute',
            right: 0,
            bottom: 0
          }
    ),
    textFieldStyle: {
      textIndent: (props.iconPosition === 'before' ? 40 : 0)
    }
  };
};

export default function TextFieldIcon(props) {

  const styles = getStyles(props);

  const {
    icon,
    iconPosition,
    iconProps,
    iconStyle,
    textFieldStyle,
    ...textFieldProps
  } = props;

  return (
    <div style={styles.main}>
      <IconButton
        style={{ ...styles.iconStyle, ...iconStyle }}
        {...iconProps}
      >{icon}</IconButton>
      <TextField
        name='material-ui-textfield-icon'
        style={{ ...styles.textFieldStyle, ...textFieldStyle }}
        {...textFieldProps}
      />
    </div>
  );
}

TextFieldIcon.propTypes = {
  icon: PropTypes.node.isRequired,
  iconPosition: PropTypes.string,
  iconProps: PropTypes.object,
  iconStyle: PropTypes.object
};

TextFieldIcon.defaultProps = {
  iconPosition: 'after'
};
