interface IPostLog {
    _id: string;
    socialPostUrl: string;
    objectId: string;
    ownerId: string;
    created: Date;
    updated: Date;
}
  
export {IPostLog}