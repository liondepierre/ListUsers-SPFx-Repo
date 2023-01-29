import * as React from 'react';

export interface IListOfUsersProps {
    
}

export const ListOfUsers: React.FunctionComponent<IListOfUsersProps> = (props: React.PropsWithChildren<IListOfUsersProps>) => {
  const [value, setValue] = React.useState('');

  return (
    <div>


    </div>
  );
};