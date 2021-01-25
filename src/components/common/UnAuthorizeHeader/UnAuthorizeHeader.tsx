import React from 'react'
import Icon from '@material-ui/core/Icon';
import { Grid, Typography } from '@material-ui/core';

import "./UnAuthorizeHeader.css";

export default function UnAuthorizeHeader() {
    return (
        <Grid container item xs={12} className="unauthorized-page-header-wrapper">
            <header className="unauthorized-page-header">
                <Grid container item xs={12} className="unauthorized-page-header-title-wrapper">
                    <div className="unauthorized-page-header-title">
                        <Icon>build_circle</Icon>
                        <Typography component="h1" variant="h5">Blog Automation</Typography>
                    </div>
                </Grid>
                <Grid container item xs={12} className="unauthorized-page-header-subtitle-wrapper">
                    <div className="unauthorized-page-header-subtitle">
                        <Typography component="h2" variant="h6">블로그 포스팅 자동화 솔루션</Typography>
                    </div>
                </Grid>
            </header>
        </Grid>
    )
}
