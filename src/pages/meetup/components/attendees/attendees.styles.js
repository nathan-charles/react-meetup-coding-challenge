import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      marginTop: theme.spacing(5),
    },
    appBar: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    cardContent: {
      height: 200,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    avatarPhoto: {
      width: 80,
      height: 80,
      marginBottom: 10,
    },
  })
);

export default useStyles;
