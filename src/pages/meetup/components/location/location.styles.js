import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme =>
  createStyles({
    card: {
      width: '100%',
      height: 300,
    },
  })
);

export default useStyles;
