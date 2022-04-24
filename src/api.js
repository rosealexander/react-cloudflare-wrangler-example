const POST_API = process.env.REACT_APP_POST_API

const addPost = (newPost) =>
    new Promise(async (resolve, reject) => {
        try {
            const res = await fetch(POST_API, {
                method: 'POST',
                body: JSON.stringify(newPost)
            })
            if (res.status !== 200){
                return reject(Error(`HTTP status code was not 200`))
            }
            return resolve(res.text())
        }
        catch (error) {
            return reject(error)
        }
});

const deletePost = (key) =>
    new Promise(async (resolve, reject) => {
        try {
            const res = await fetch(POST_API+`/${key}`, {
                method: 'POST',
            })
            if (res.status !== 202){
                return reject(Error(`HTTP status code was not 202`))
            }
            return resolve()
        }
        catch (error) {
            reject(error)
        }
    });

const fetchPosts = new Promise(async (resolve, reject) => {
    await fetch(POST_API)
        .then(async (res) => {
            if (res.status === 200) {
                const data = await res.json()
                return resolve(data)
            } else {
                return reject(Error(`HTTP status code was not 200`))
            }
        })
        .catch(error => reject(error))
});

export {
    addPost,
    deletePost,
    fetchPosts
}
