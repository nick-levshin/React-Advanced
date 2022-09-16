import axios from 'axios';
import { AppDispatch } from '../..';
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
      const guests = await axios.get('./users.json');
    } catch (e) {
      console.log(e);
    }
  },
};
