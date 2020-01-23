import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      padding: theme.spacing(5),
      //   color: '#FFF',
      backgroundColor: 'rgb(255, 255, 255)',
    },
    box: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    icon: {
      fontSize: 64,
    },
  })
);

export default useStyles;
