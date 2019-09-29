export default (theme) => ({
  root: {
    backgroundColor: theme.palette.common.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
  },
  logoWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '55px',
    flexShrink: 0,
  },
  logoLink: {
    fontSize: 0,
    textAlign: 'center',
  },
  logoImage: {
    cursor: 'pointer',
    maxWidth: '70%',
  },
  logoDivider: {
    marginBottom: theme.spacing.unit * 2,
  },
  profile: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 'fit-content',
  },
  avatar: {
    width: '100px',
    height: '100px',
  },
  nameText: {
    marginTop: theme.spacing.unit * 2,
  },
  bioText: {},
  profileDivider: {
    marginBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 2,
  },
  listSubheader: {
    color: theme.palette.text.secondary,
  },
  listItem: {
    cursor: 'pointer',
    backgroundColor: '#fff',
    '&:hover': {
      backgroundColor: '#f5f5f5',
      borderLeft: '4px solid #424242',
      borderRadius: '4px',
      '& $listItemIcon': {
        color: 'black',
        paddingLeft: '-4px',
      },
    },
    '& + &': {
      marginTop: theme.spacing.unit,
    },
  },
  activeListItem: {
    borderLeft: '4px solid #1b1b1b',
    borderRadius: '4px',
    backgroundColor: '#F8F8F8',
    '& $listItemText': {
      color: 'black',
    },
    '& $listItemIcon': {
      color: 'black',
      paddingLeft: '-4px',
    },
  },
  listItemIcon: {
    color: 'black',
    marginRight: 0,
  },
  listItemText: {
    fontWeight: 500,
    color: 'black',
  },
  listDivider: {
    marginBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 2,
  },
  nested: {
    paddingLeft: 50,
  },
});
