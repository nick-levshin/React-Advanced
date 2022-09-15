import axios from 'axios';
import { AppDispatch } from '../..';
import { IUser } from '../../../models/User';
import {
  AuthActionsEnum,
  SetAuthAction,
  SetErrorAction,
  SetIsLoadingAction,
  SetUserAction,
} from './types';

export const AuthActionCreators = {
  setUser: (user: IUser): SetUserAction => ({
    type: AuthActionsEnum.SET_USER,
    payload: user,
  }),
  setIsAuth: (auth: boolean): SetAuthAction => ({
    type: AuthActionsEnum.SET_AUTH,
    payload: auth,
  }),
  setIsLoading: (loading: boolean): SetIsLoadingAction => ({
    type: AuthActionsEnum.SET_IS_LOADING,
    payload: loading,
  }),
  setError: (error: string): SetErrorAction => ({
    type: AuthActionsEnum.SET_ERROR,
    payload: error,
  }),
  login:
    (username: string, password: string) => async (dispatch: AppDispatch) => {
      try {
        dispatch(AuthActionCreators.setIsLoading(true));

        setTimeout(async () => {
          const response = await axios.get<IUser[]>('./users.json');
          const mockUser = response.data.find(
            (user) => user.username === username && user.password === password
          );

          if (mockUser) {
            localStorage.setItem('auth', 'true');
            localStorage.setItem('username', mockUser.username);
            dispatch(AuthActionCreators.setIsAuth(true));
            dispatch(AuthActionCreators.setUser(mockUser));
          } else {
            dispatch(AuthActionCreators.setError('Wrong data'));
          }

          dispatch(AuthActionCreators.setIsLoading(false));
        }, 1000);
      } catch (e) {
        dispatch(AuthActionCreators.setError('Auth Error'));
        dispatch(AuthActionCreators.setIsAuth(false));
      }
    },
  logout: () => async (dispatch: AppDispatch) => {
    localStorage.removeItem('auth');
    localStorage.removeItem('username');
    dispatch(AuthActionCreators.setIsAuth(false));
    dispatch(AuthActionCreators.setUser({} as IUser));
  },
};
