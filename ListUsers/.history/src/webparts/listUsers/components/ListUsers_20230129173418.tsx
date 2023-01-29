import * as React from 'react';
import styles from './ListUsers.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';
import { Stack, Text } from 'office-ui-fabric-react/lib';
import { ListOfUsers } from './ListOfUsers';

export interface IListUsersProps {
  description: string;
}

export const ListUsers: React.FunctionComponent<IListUsersProps> = (props: React.PropsWithChildren<IListUsersProps>) => {

  return (
    <div>
      <ListOfUsers />
    </div>
  );
};

export default ListUsers