export interface Post{
  _id?:string,
  title: string,
  subtitle: string,
  image: string,
  date: string,
  author: string,
  category: string,
  visibleLevel?: string,
  text: string
}
