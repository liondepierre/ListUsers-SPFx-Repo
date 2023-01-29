import { Text } from 'office-ui-fabric-react';
import * as React from 'react';

export interface IListOfUsersProps {

}

export const ListOfUsers: React.FunctionComponent<IListOfUsersProps> = (props: React.PropsWithChildren<IListOfUsersProps>) => {
  const [value, setValue] = React.useState('');

  return (
    <div>
        <Text variant='large'>Hello World from the List Of Users</Text>
    </div>
  );
};