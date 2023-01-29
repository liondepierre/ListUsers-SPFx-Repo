import { spfi, SPFI } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import { IUser } from "../webparts/listUsers/models/IUser";
import { WebPartContext } from "@microsoft/sp-webpart-base";

export interface IListUsersProvider {
    getUsers(): Promise<IUser[]>
}

export default class ListUsersProvider implements IListUsersProvider {

    private _sp: SPFI;

    getUsers(): Promise<IUser[]> {
        const allUsers: IUser[] = this._sp.using().web.lists.getByTitle("Users").items();
        
        return allUsers;
    }
   



}