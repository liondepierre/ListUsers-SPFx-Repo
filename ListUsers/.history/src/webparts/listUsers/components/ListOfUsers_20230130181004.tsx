import { WebPartContext } from '@microsoft/sp-webpart-base';
import { PrimaryButton, Stack, Text } from 'office-ui-fabric-react';
import * as React from 'react';
import ListUsersProvider from '../../../providers/ListUsersProvider';
import { IUser } from '../models/IUser';
import { Button } from './Button';

export interface IListOfUsersProps {
    context: WebPartContext;
}

export const ListOfUsers: React.FunctionComponent<IListOfUsersProps> = (props: React.PropsWithChildren<IListOfUsersProps>) => {
    let listUsersProvider = new ListUsersProvider(props.context);

    const [userList, setUserList] = React.useState<IUser[]>([]);

    const fetchUserListData = async (): Promise<void> => {
        const allUsersFromList: IUser[] = await listUsersProvider.getUsers();

        setUserList(allUsersFromList)
    }

    React.useEffect(() => {
        fetchUserListData().catch((error) => console.log(error));
    }, [])

    return (
        <div>
            <Stack tokens={{ childrenGap: "20px" }}>
                {userList.map((user) => {
                    return (
                        <Stack style={{width: "100px"}}>
                            <Text variant='large'>
                                <b>Username: </b>{user.Username}
                            </Text>
                            <Text variant='large'>
                                <b>Age: </b>{user.Age}
                            </Text>
                            <Text variant='large'>
                                <b>Field of Work: </b>{user.FOW}
                            </Text>
                        <Button />
                        </Stack>
                    )
                })}
            </Stack>
        </div>
    );
};