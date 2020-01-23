import React from 'react';
import { Card, CardHeader } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';

import useStyles from './location.styles';

const Location = ({ venue }) => {
  const classes = useStyles({});

  const { name, address_1: address, city, state, lat, lon: lng } = venue;

  return (
    <Card className={classes.card}>
      <CardHeader avatar={<LocationOnIcon />} title={name} subheader={`${address} - ${city}, ${state}`} />
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDnJLojru65uF52ykcv9w_-5Zr03INZgZU' }}
        defaultCenter={{ lat, lng }}
        defaultZoom={16}
      ></GoogleMapReact>
    </Card>
  );
};

Location.propTypes = {
  venue: PropTypes.object.isRequired,
};

export default Location;
