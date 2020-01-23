import React, { useState } from 'react';
import { Grid, Typography, Card, CardContent, Avatar, Tabs, Tab, AppBar } from '@material-ui/core';
import PropTypes from 'prop-types';

import useStyles from './attendees.styles';

const Attendees = ({ attendees, yesRsvpCount, waitlistCount }) => {
  const [filter, setFiler] = useState('yes');

  const classes = useStyles({});

  return (
    <div className={classes.root}>
      <Typography variant="h5">Attendees</Typography>

      <AppBar className={classes.appBar} position="static" color="default">
        <Tabs value={filter} onChange={(e, v) => setFiler(v)}>
          <Tab value="yes" label={`Going (${yesRsvpCount})`} />
          <Tab value="waitlist" label={`Waitlist (${waitlistCount})`} />
        </Tabs>
      </AppBar>

      <Grid container spacing={2}>
        {attendees
          .filter(a => a.response === filter)
          .map(attendee => {
            const { member, guests } = attendee;
            const { name } = member;
            const { thumb_link: photo } = member.photo ? member.photo : { thumb_link: undefined };

            return (
              <Grid key={member.id} item xs={12} sm={6} md={4} lg={2}>
                <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <Avatar className={classes.avatarPhoto} alt={name} src={photo} />
                    <Typography variant="subtitle2">{name}</Typography>
                    {guests > 0 && (
                      <Typography variant="caption">
                        +{guests} guest{guests > 1 && 's'}
                      </Typography>
                    )}
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
};

Attendees.propTypes = {
  attendees: PropTypes.array,
  yesRsvpCount: PropTypes.number.isRequired,
  waitlistCount: PropTypes.number.isRequired,
};

Attendees.defaultProps = {
  attendees: [],
};

export default Attendees;
