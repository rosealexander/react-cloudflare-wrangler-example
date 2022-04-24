import { Router } from 'itty-router'

import FetchPosts from './handlers/fetchPosts'
import AddPost from './handlers/addPost'
import FetchAssets from "./handlers/fetchAssets";
import DeletePost from "./handlers/deletePost";

const router = Router()

router
    .get('/api/posts', FetchPosts)
    .post('/api/posts/:key', DeletePost)
    .post('/api/posts', AddPost)
    .get('*', FetchAssets)

export const handleEvent = async (event) => router.handle(event.request, event)
