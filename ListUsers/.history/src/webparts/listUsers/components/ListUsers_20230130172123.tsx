import * as React from 'react';
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