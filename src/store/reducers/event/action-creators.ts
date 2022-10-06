import { AppDispatch } from '../..';
import UserService from '../../../api/UserService';
import { IEvent } from '../../../models/Event';
import { IUser } from '../../../models/User';
import { EventActionsEnum, SetEventsAction, SetGuestsAction } from './types';

export const EventActionCreators = {
  setGuests: (guests: IUser[]): SetGuestsAction => ({
    type: EventActionsEnum.SET_GUESTS,
    payload: guests,
  }),
  setEvents: (events: IEvent[]): SetEventsAction => ({
    type: EventActionsEnum.SET_EVENTS,
    payload: events,
  }),
  fetchGuests: () => async (dispatch: AppDispatch) => {
    try {
      const guests = await UserService.getUsers();
      dispatch(EventActionCreators.setGuests(guests.data));
    } catch (e) {
      console.log(e);
    }
  },
  createEvent: (event: IEvent) => async (dispatch: AppDispatch) => {
    try {
      const events = localStorage.getItem('events') || '[]';
      const json = JSON.parse(events) as IEvent[];
      json.push(event);
      dispatch(EventActionCreators.setEvents(json));
      localStorage.setItem('events', JSON.stringify(json));
    } catch (e) {
      console.log(e);
    }
  },
  fetchEvents: (username: string) => async (dispatch: AppDispatch) => {
    try {
      const events = localStorage.getItem('events') || '[]';
      const json = JSON.parse(events) as IEvent[];
      const currentUserEvents = json.filter(
        (ev) => ev.author === username || ev.guest === username
      );
      dispatch(EventActionCreators.setEvents(currentUserEvents));
    } catch (e) {
      console.log(e);
    }
  },
};
