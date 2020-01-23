import axios from 'axios';

const base = 'https://cors-anywhere.herokuapp.com/https://api.meetup.com';

const fetchEvents = (group, page = 1) => {
  return axios.get(`${base}/${group}/events?&sign=true&photo-host=public&page=${page}`);
};

const fetchEventRSVPS = (group, eventId) => {
  return axios.get(`${base}/${group}/events/${eventId}/rsvps?&sign=true&photo-host=public`);
};

export default {
  fetchEvents,
  fetchEventRSVPS,
};
