import {Box, Container, Grid} from "@mui/material";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {createContext, useMemo, useState} from "react";
import Body from "./Body";
import {fetchPosts} from "../api";

export const PageContext = createContext([]);

const Page = () => {
    const [pageState, setPageState] = useState([])

    useMemo(async () => {
        await fetchPosts.then(data => setPageState(data))
    }, []);

    return (
        <PageContext.Provider value={[pageState, setPageState]}>
            <Container
                maxWidth='xs'
            >
                <Box
                    display='flex'
                    flexDirection='column'
                    justifyContent='space-between'
                    height='100vh'
                    minWidth={300}
                    py={2}
                >
                    <Grid
                        container
                        direction='column'
                        spacing={2}
                    >
                        <Grid item>
                            <Navbar/>
                        </Grid>
                        <Grid item>
                            <Body/>
                        </Grid>
                    </Grid>
                    <Footer/>
                </Box>
            </Container>
        </PageContext.Provider>
    )
}

export default Page
