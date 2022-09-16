import { IEvent } from '../../../models/Event';
import { IUser } from '../../../models/User';

export interface EventState {
  guests: IUser[];
  events: IEvent[];
}

export enum EventActionsEnum {
  SET_GUESTS = 'SET_GUESTS',
  SET_EVENTS = 'SET_EVENTS',
}

export interface SetGuestsAction {
  type: EventActionsEnum.SET_GUESTS;
  payload: IUser[];
}

export interface SetEventsAction {
  type: EventActionsEnum.SET_EVENTS;
  payload: IEvent[];
}

export type EventAction = SetEventsAction | SetGuestsAction;
