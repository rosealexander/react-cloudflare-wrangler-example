
const DeletePost = async (request) => {
    const headers = {
        'Access-Control-Allow-Origin': '*',
    }
    try {
        const {key} = request.params
        const res = await Posts.delete(key)
        return new Response('Success', { status: 202, headers })
    } catch (error) {
        return new Response("Error: " + error, { status: 409, headers })
    }
}

export default DeletePost
