import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid } from '@material-ui/core';

import { meetup as meetupAPI } from '../../services';
import { Header, Attendees, Location } from './components';
import useStyles from './meetup.styles';

const Meetup = props => {
  const [event, setEvent] = useState(undefined);
  const [attendees, setAttendees] = useState([]);

  const classes = useStyles({});

  useEffect(() => {
    const fetchEvent = async () => {
      const group = props.match.params.group;

      const eventRequest = await meetupAPI.fetchEvents(group, 1);
      const event = eventRequest.data[0];
      setEvent(event);

      const eventAttendeesRequest = await meetupAPI.fetchEventRSVPS(group, event.id);
      setAttendees(eventAttendeesRequest.data);
    };

    fetchEvent();

    // eslint-disable-next-line
  }, []);

  if (event === undefined) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <Header name={event.name} date={event.local_date} />
      <div className={classes.root}>
        <Container>
          <Grid container>
            <Grid sm={12} md={8}>
              <Typography variant="h5">Details</Typography>
              <Typography
                style={{ overflowWrap: 'break-word' }}
                variant="body1"
                dangerouslySetInnerHTML={{ __html: event.description }}
              />
            </Grid>
            <Grid sm={12} md={4}>
              <Location venue={event.venue} />
            </Grid>
          </Grid>
          <Attendees attendees={attendees} yesRsvpCount={event.yes_rsvp_count} waitlistCount={event.waitlist_count} />
        </Container>
      </div>
    </div>
  );
};

export default Meetup;
