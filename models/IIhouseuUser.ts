interface IhouseuUser {
    _id: string;
    email: string;
    firstname: string;
    fullname: string;
    lastname: string;
    mode: string;
    password: string;
    registered: boolean;
    ownerId: string;
    created: Date;
    updated: Date;
}
  
export {IhouseuUser};