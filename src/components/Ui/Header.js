import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const useStyles = makeStyles(theme => ({
  toolBarMargin: {
    ...theme.mixins.toolbar,
  },
}));

const Header = props => {
  const classes = useStyles();

  return (
    <>
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            <Typography variant="h3">Arc Development</Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <div className={classes.toolBarMargin} />
    </>
  );
};

export default Header;
