import React, {useContext, useState} from 'react';
import {Box, Button, Grid, Link, Paper, TextField, Typography} from "@mui/material";
import {PageContext} from "./Page";
import {addPost} from "../api";

const Form = () => {
    const [pageState, setPageState] = useContext(PageContext)
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [content, setContent] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const newPost = {
            title: title,
            author: author,
            content: content
        }

        await addPost(newPost)
            .then((key) => {
                newPost.key = key
                const newPostData = [newPost, ...pageState]
                setPageState(newPostData)
            })
            .finally(() => {
                setTitle('')
                setAuthor('')
                setContent('')
            })
    }

    return (
        <Paper variant='outlined'>
            <Box p={5}>
                <Grid
                    container
                    direction='column'
                    spacing={2}
                >
                    <Grid item>
                        <Typography
                            variant='h5'
                            color='primary'
                        >
                            Add your own Post
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography
                            variant='caption'
                        >
                            This form uses&nbsp;
                            <Link target="_blank" href="https://developers.cloudflare.com/workers/learning/how-kv-works/" rel="noreferrer">
                                Workers KV
                            </Link>
                            , Cloudflare's low-latency, key-value data store.
                            It stores data in a small number of centralized data centers,
                            then caches that data in Cloudflare’s data centers.
                        </Typography>
                    </Grid>
                    <Grid item>
                        <form onSubmit={handleSubmit}>
                            <Grid
                                container
                                direction='column'
                                spacing={2}
                            >
                                <Grid item>
                                    <TextField
                                        required
                                        fullWidth
                                        autoComplete='off'
                                        inputProps={{ maxLength: 64 }}
                                        label='Title'
                                        variant='filled'
                                        size='small'
                                        value={title}
                                        onChange={e => setTitle(e.target.value)}
                                    />
                                </Grid>
                                <Grid item>
                                    <TextField
                                        required
                                        fullWidth
                                        autoComplete='off'
                                        inputProps={{ maxLength: 32 }}
                                        label='Author'
                                        variant='filled'
                                        size='small'
                                        value={author}
                                        onChange={e => setAuthor(e.target.value)}
                                    />
                                </Grid>
                                <Grid item>
                                    <TextField
                                        required
                                        fullWidth
                                        multiline
                                        autoComplete='off'
                                        inputProps={{ maxLength: 256 }}
                                        label='Short Story'
                                        variant='filled'
                                        size='small'
                                        value={content}
                                        onChange={e => setContent(e.target.value)}
                                    />
                                </Grid>
                                <Grid item>
                                    <Button
                                        fullWidth
                                        variant='outlined'
                                        type='submit'
                                    >
                                        Create a new Post
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                    <Grid item>
                        <Typography
                            variant='caption'
                            fontStyle='italic'
                        >
                            New posts may not appear on page reload as it can take few seconds to update network edge locations.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </Paper>
    );
};

export default Form;
