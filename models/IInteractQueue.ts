interface IInteractQueue {
  _id: string;
  engageMax: number;
  engageMin: number;
  iHouseuPostOwner: string;
  iHouseuPostOwnerPwd: string;
  iHouseuPostUrl: string;
  mode: string;
  raw: string;
  socialPostUrl: string;
  ownerId: string;
  created: Date;
  updated: Date;
}

export {IInteractQueue};