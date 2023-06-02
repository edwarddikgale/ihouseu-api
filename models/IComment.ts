interface IComment {
    _id: string;
    text: string;
    type: string;
    objectId: string;
    ownerId: string;
    created: Date;
    updated: Date;
  }
  
  export {IComment}