
export interface IComment {
  PostID: string,
  UserID:string,
  Content: any;
}

export interface IAuthRes{
  auth:string;
}

export interface IPost {
  title:      string;
  content:    string;
  imageUrl:   string;
  creatorID:  string;
  Categories: any[];
}

export interface IUser {
  _id:        string;
  name:       string;
  lastname:   string;
  title:      string;
  avatarUrl:  string;
  isVerified: boolean;
}

export interface ILike {
  PostID: string,
  UserID: string
}