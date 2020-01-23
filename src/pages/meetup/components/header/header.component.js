import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import RoomIcon from '@material-ui/icons/Room';
import EmailIcon from '@material-ui/icons/Email';

import useStyles from './header.styles';

const Header = ({ name }) => {
  const classes = useStyles({});

  return (
    <div className={classes.root}>
      <Container>
        <Typography variant="subtitle1">Tuesday, February 11, 2020</Typography>
        <Typography variant="h4">{name}</Typography>
        {/* <Grid container>
          <Grid item xs={12} sm={4}>
            <div className={classes.box}>
              <div>
                <PhoneIcon className={classes.icon} />
              </div>
              <div>
                <Typography variant="h5">Call Us</Typography>
              </div>
              <div>
                <Typography variant="subtitle1">(214) 986-5391</Typography>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className={classes.box}>
              <div>
                <RoomIcon className={classes.icon} />
              </div>
              <div>
                <Typography variant="h5">Location</Typography>
              </div>
              <div>
                <Typography variant="subtitle1">Aubrey, TX</Typography>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className={classes.box}>
              <div>
                <EmailIcon className={classes.icon} />
              </div>
              <div>
                <Typography variant="h5">Email</Typography>
              </div>
              <div>
                <Typography variant="subtitle1">info@appixel.dev</Typography>
              </div>
            </div>
          </Grid>
        </Grid> */}
      </Container>
    </div>
  );
};

export default Header;
