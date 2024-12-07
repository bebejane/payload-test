import { CollectionConfig } from 'payload'
import { Author } from './Author'
import { Home } from './Home'
import { Media } from './Media'
import { Post } from './Post'
import { Users } from './Users'

const collections = [Author, Home, Media, Post, Users] as CollectionConfig[]
export default collections
export {
  Author,
  Home,
  Media,
  Post,
  Users
}