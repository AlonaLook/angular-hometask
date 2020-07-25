export interface IPost {
  [key: string]: {
    title: string;
    comment: string;
    id?: string;
  };
}
