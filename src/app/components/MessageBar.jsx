import React, { Component } from 'react';
import { Snackbar, SnackbarContent, withStyles } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


const styles = () => ({
  sucess: {
    backgroundColor: '#84D58F',
  },
  fail: {
    backgroundColor: '#fc0107',
  },
  text: {
    fontSize: '14px',
  },
});

class TopSnackBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
    };
  }

  render() {
    const { classes, message, variant } = this.props;
    return (
      <div>
        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          autoHideDuration={3000}
          onClose={() => { this.setState({ open: false }); }}
          open={this.state.open}
        >
          <SnackbarContent
            className={classes[variant]}
            message={<span id="message-id" className={classes.text}>{message}</span>}
            action={[
              <IconButton
                aria-label="close"
                color="inherit"
                key="close"
                onClick={() => {
                  this.setState({ open: false });
                }}
              >
                <CloseIcon />
              </IconButton>,
            ]}
          />
        </Snackbar>
      </div>
    );
  }
}
export default withStyles(styles)(TopSnackBar);
