import React from 'react';
import Event from '../pages/Event';
import Login from '../pages/Login';

export interface IRoute {
  path: string;
  Component: React.ComponentType;
  exact?: boolean;
}

export enum RouteNames {
  LOGIN = '/login',
  EVENT = '/',
}

export const publicRoutes: IRoute[] = [
  { path: RouteNames.LOGIN, exact: true, Component: Login },
];

export const privateRoutes: IRoute[] = [
  { path: RouteNames.EVENT, exact: true, Component: Event },
];
