import { spfi } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import { IUser } from "../webparts/listUsers/models/IUser";

export default interface IListUsersProvider {
    getUsers: Promise<IUser[]>
}

export default class ListUsersProvider implements IListUsersProvider {
    const _sp: SPFI;
    

}