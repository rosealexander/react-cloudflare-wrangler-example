import {useContext} from "react";
import {Box, Grid} from "@mui/material";
import Post from "./Post";
import Form from "./Form";
import {PageContext} from "./Page";
import Header from "./Header";


const Body = () => {
    const [pageState, setPageState] = useContext(PageContext)

    return (
        <Box pt={5} pb={10}>
            <Grid
                container
                direction='column'
                spacing={5}
            >
                <Grid item>
                    <Header />
                </Grid>
                <Grid item>
                    <Form />
                </Grid>
                { pageState.map( (post, i) =>
                    <Grid
                        key={i}
                        item
                    >
                        <Post context={post}/>
                    </Grid>
                )}
            </Grid>
        </Box>
    );
};

export default Body;
