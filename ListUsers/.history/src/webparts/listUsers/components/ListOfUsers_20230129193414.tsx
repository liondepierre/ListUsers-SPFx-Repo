import { WebPartContext } from '@microsoft/sp-webpart-base';
import { Text } from 'office-ui-fabric-react';
import * as React from 'react';
import ListUsersProvider from '../../../providers/ListUsersProvider';
import { IUser } from '../models/IUser';

export interface IListOfUsersProps {
    context: WebPartContext;
}

export const ListOfUsers: React.FunctionComponent<IListOfUsersProps> = (props: React.PropsWithChildren<IListOfUsersProps>) => {
    let listUsersProvider = new ListUsersProvider(props.context);

    React.useEffect(() => {
        console.log("jfwjfejiwfejiij")
        fetchUserListData();
    }, [])
    
    const [userList, setUserList] = React.useState<IUser[]>([]);

    const fetchUserListData = async (): Promise<void> => {
        const allUsersFromList: IUser[] = await listUsersProvider.getUsers();
        
        setUserList(allUsersFromList)
    }
   
  return (
    <div>

    </div>
  );
};