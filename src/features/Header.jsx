import React from 'react';
import {Link, Typography} from "@mui/material";

const Header = () => {
    return (
        <Typography>
            This webpage was served directly from Cloudflare’s CDN&nbsp;
            <Link target="_blank" href="https://www.cloudflare.com/learning/cdn/glossary/edge-server/" rel="noreferrer">
                at the server closest to you.
            </Link>
        </Typography>
    );
};

export default Header;
