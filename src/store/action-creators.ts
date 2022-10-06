import { AuthActionCreators } from './reducers/auth/action-creators';
import { EventActionCreators } from './reducers/event/action-creators';

export default {
  ...AuthActionCreators,
  ...EventActionCreators,
};
