import React, {useContext} from 'react';
import {Card, CardContent, CardHeader, IconButton, Typography} from "@mui/material";
import {FaTimesCircle} from 'react-icons/fa'
import {PageContext} from "./Page";
import {deletePost} from "../api";

const Post = ({context}) => {
    const [pageState, setPageState] = useContext(PageContext)

    const handleClick = async () => {
        await deletePost(context.key).then(() => {
            const newPostData = pageState.filter(c => c.key !== `${context.key}`)
            setPageState(newPostData)
        })
    }

    return (
        <Card sx={{ minWidth: 275 }}>
            <CardHeader
                action={
                    <IconButton
                        color='primary'
                        size='small'
                        onClick={handleClick}
                    >
                        <FaTimesCircle />
                    </IconButton>
                }
                title={<Typography
                    sx={{wordBreak: 'break-word'}}
                    variant='body1'
                >
                    {context?.title}
                </Typography>}
                subheader={<Typography
                    sx={{wordBreak: 'break-word'}}
                    variant='caption'
                    color='primary'
                >
                    {context?.author}
                </Typography>}
            />
            <CardContent>
                <Typography
                    sx={{wordBreak: 'break-word'}}
                    variant='body2'
                >
                    {context?.content}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default Post;
