import React from 'react'
import { Grid, Typography } from '@material-ui/core';

import "./UnAuthorizeFooter.css";

export default function UnAuthorizeFooter() {
    return (
        <Grid container item xs={12} className="unauthorized-page-footer-wrapper">
            <footer className="unauthorized-page-footer">
                <Typography component="span">@copyright HongCompany</Typography>        
            </footer>
        </Grid>
    )
}
