const FetchPosts = async () => {
    const headers = {
        'Access-Control-Allow-Origin': '*',
    }
    try {
        const postListRes = await Posts.list()
        const postsPromise = postListRes.keys.flatMap(async (c) => {
            try {
                const post = JSON.parse(await Posts.get(c.name))
                post.key = c.name
                return post
            }
            catch (error) {return null}
        })
        const body = JSON.stringify((await Promise.all(postsPromise)).filter(c => !!c))
        return new Response(body, { status: 200, headers })
    }
    catch (error) {
        return new Response('Error: ' + error, { status: 404, headers })
    }
}

export default FetchPosts
