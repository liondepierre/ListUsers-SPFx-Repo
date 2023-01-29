import { spfi, SPFI, SPFx } from "@pnp/sp";
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
    
    constructor(context: WebPartContext) {
        this._sp = spfi().using(SPFx(context));
    }

    public async getUsers(): Promise<IUser[]> {
        const items: IUser[] = await this._sp.web.lists.getByTitle("Users").items();
        
        return items;
    }
   



}