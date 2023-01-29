import * as React from 'react';
import styles from './ListUsers.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';
import { Stack, Text } from 'office-ui-fabric-react/lib';

export interface IListUsersProps {
  description: string;
}

export const ListUsers: React.FunctionComponent<IListUsersProps> = (props: React.PropsWithChildren<IListUsersProps>) => {

  return (
    <div>
      <Stack>
        <Text variant='xLarge'>
          HElloWoRLD
        </Text>
      </Stack>
    </div>
  );
};

export default ListUsers