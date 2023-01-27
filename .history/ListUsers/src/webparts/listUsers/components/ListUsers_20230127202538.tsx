import * as React from 'react';
import styles from './ListUsers.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';

export interface IListUsersProps {
  description: string;
  isDarkTheme: boolean;
  environmentMessage: string;
  hasTeamsContext: boolean;
  userDisplayName: string;
}

export const ListUsers: React.FunctionComponent<IListUsersProps> = (props: React.PropsWithChildren<IListUsersProps>) => {
  const [value, setValue] = React.useState('');

  return (
    <div>
      Hello World
      {props.description}
    </div>
  );
};

export default ListUsers