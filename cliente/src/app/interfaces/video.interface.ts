export interface Video{
  _id?:string,
  title: string,
  image: string,
  date: string,
  author: string,
  category: string,
  visibleLevel?: string,
  text: string,
  videoUrl: string
}