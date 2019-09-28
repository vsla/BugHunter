export default theme => ({
  root: {
    // borderBottom: `1px solid ${theme.palette.border}`,
    // backgroundColor: theme.palette.primary.main,
    height: '64px',
    zIndex: theme.zIndex.appBar
  },
  toolbar: {
    minHeight: 'auto',
    width: '100%'
  },
  title: {
    marginLeft: theme.spacing.unit
  },
  menuButton: {
    marginLeft: '-4px'
  },
  notificationsButton: {
    marginLeft: 'auto'
  },
  signOutButton: {
    marginLeft: theme.spacing.unit
  },
  selectRegion: {
    position: 'absolute',
    right: '35px'
  },
  regionTitle: {
    fontSize: '12px',
    color: '#cccccc',
    float: 'left',
    marginTop: '20px',
    marginRight: '35px'    
  },
  formControl: {
    width: '130px'
  },
  inputLabel:{
    fontSize: '12px',
    color: '#cccccc',    
  }
});
