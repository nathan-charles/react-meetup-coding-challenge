import React from 'react';
import { Card } from '@material-ui/core';
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';

import useStyles from './location.styles';

const Location = ({ venue }) => {
  const classes = useStyles({});

  const { lat, lon: lng } = venue;

  const center = { lat, lng };

  return (
    <Card className={classes.card}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDnJLojru65uF52ykcv9w_-5Zr03INZgZU' }}
        defaultCenter={center}
        defaultZoom={16}
      ></GoogleMapReact>
    </Card>
  );
};

Location.propTypes = {
  venue: PropTypes.object.isRequired,
};

export default Location;
