import React from 'react';

import Icon from '@material-ui/core/Icon';
import { Grid, Typography } from '@material-ui/core';

import UnAuthorizeFooter from "components/common/UnAuthorizeFooter";
import SignUpForm from "components/form/SignUpForm";
import "routes/UnAuthorizePage.css";

export default function SignUp() {
    return (
        <Grid container spacing={1} className="unauthorized-page-wrapper">
            <Grid container item xs={12}/>
            <Grid container item xs={12}>
                <Grid item xs={3}/>
                <Grid container item xs={6} className="unauthorized-page-nested-wrapper">
                    <div className="unauthorized-page">
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
                        <Grid container item xs={12} className="unauthorized-page-main-wrapper">
                            <main className="unauthorized-page-main">
                                <Grid item xs={2} />
                                <Grid container item xs={8} className="main-form-wrapper">
                                    <SignUpForm />
                                </Grid>
                                <Grid item xs={2} />
                            </main>
                        </Grid>
                        <UnAuthorizeFooter />
                    </div>
                </Grid>
                <Grid item xs={3}/>
            </Grid>
            <Grid container item xs={12}/>                         
        </Grid>
    )
}
