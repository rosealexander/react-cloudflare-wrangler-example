import {uid} from "uid";

const AddPost = async (request) => {
    const headers = {
        'Access-Control-Allow-Origin': '*',
    }
    try {
        const body = request.body
        const key = uid()
        const res = await Posts.put(key, body, {expirationTtl: `${3*60*60}`})
        return new Response(key, { status: 200, headers })
    } catch (error) {
        return new Response("Error: " + error, { status: 400, headers })
    }
}

export default AddPost
