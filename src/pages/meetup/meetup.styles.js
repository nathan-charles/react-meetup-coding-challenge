import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      padding: theme.spacing(5),
      backgroundColor: 'rgb(245, 245, 245)',
    },
  })
);

export default useStyles;
