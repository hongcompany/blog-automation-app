import React from 'react';

import { Grid } from '@material-ui/core';

import UnAuthorizeHeader from "components/common/UnAuthorizeHeader";
import UnAuthorizeFooter from "components/common/UnAuthorizeFooter";
import LoginForm from "components/form/LoginForm";
import "routes/UnAuthorizePage.css";

export default function SignIn() {
    return (
        <Grid container spacing={1} className="unauthorized-page-wrapper">
            <Grid container item xs={12}/>
            <Grid container item xs={12}>
                <Grid item xs={3}/>
                <Grid container item xs={6} className="unauthorized-page-nested-wrapper">
                    <div className="unauthorized-page">
                        <UnAuthorizeHeader />
                        <Grid container item xs={12} className="unauthorized-page-main-wrapper">
                            <main className="unauthorized-page-main">
                                <Grid item xs={2} />
                                <Grid container item xs={8} className="main-form-wrapper">
                                    <LoginForm />
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
