export default (theme) => ({
  topbar: {
    position: 'fixed',
    width: '100%',
    top: 0,
    left: 0,
    right: 'auto',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  topbarShift: {
    marginLeft: '271px',
    width: 'calc(-271px + 100vw)',
  },
  drawerPaper: {
    zIndex: 1200,
    width: '271px',
  },
  content: {
    paddingTop: '64px',
    backgroundColor: 'white',
    minHeight: '90%',
    display: 'flex',
    flexDirection: 'column',
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  contentShift: {
    marginLeft: '270px',
  },
});
