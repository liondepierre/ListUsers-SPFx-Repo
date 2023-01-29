import * as React from 'react';
import styles from './ListUsers.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';
import { Stack, Text } from 'office-ui-fabric-react/lib';
import { ListOfUsers } from './ListOfUsers';
import { WebPartContext } from '@microsoft/sp-webpart-base';

export interface IListUsersProps {
  description: string;
  context: WebPartContext;
}

export const ListUsers: React.FunctionComponent<IListUsersProps> = (props: React.PropsWithChildren<IListUsersProps>) => {

  return (
    <div>
      <ListOfUsers context={props.context}/>
    </div>
  );
};

export default ListUsers