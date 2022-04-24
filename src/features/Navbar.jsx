import ThemeToggle from "./theme/ThemeToggle";
import {Grid, IconButton, Typography} from "@mui/material";
import {FaReact, FaCloudflare} from "react-icons/fa";

const Navbar = () => {
    return (
        <Grid
            container
            wrap='nowrap'
            alignItems='center'
            justifyContent='space-between'
        >
            <Grid item>
                <Grid
                    container
                    wrap='nowrap'
                    justifyContent='center'
                    alignItems='center'
                >
                    <Grid item>
                        <IconButton
                            href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"
                            color='info'
                            size='small'
                        >
                            <FaReact/>
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <Typography
                            variant='body1'
                            sx={{fontWeight: 'bold'}}
                            color='primary'
                        >
                            +
                        </Typography>
                    </Grid>
                    <Grid item>
                        <IconButton
                            href="https://www.cloudflare.com/" target="_blank" rel="noopener noreferrer"
                            color='secondary'
                        >
                            <FaCloudflare/>
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <ThemeToggle/>
            </Grid>
        </Grid>
    );
}

export default Navbar
