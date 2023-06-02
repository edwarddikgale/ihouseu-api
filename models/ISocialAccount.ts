interface ISocialAccount {
    _id: string;
    engageMax: number;
    engageMin: number;
    iHouseuOwner: string;
    iHouseuOwnerPwd: string;
    socialSync: boolean;
    type: string;
    url: string;
    ownerId: string;
    created: Date;
    updated: Date;
  }
  
  export {ISocialAccount}