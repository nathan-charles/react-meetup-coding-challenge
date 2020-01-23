import React from 'react';
import { Container, Typography } from '@material-ui/core';
import moment from 'moment';
import PropTypes from 'prop-types';

import useStyles from './header.styles';

const Header = ({ name, date }) => {
  const classes = useStyles({});

  return (
    <div className={classes.root}>
      <Container>
        <Typography variant="subtitle1">{moment(date).format('dddd, MMMM DD, YYYY')}</Typography>
        <Typography variant="h4">{name}</Typography>
      </Container>
    </div>
  );
};

Header.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Header;
