import React from 'react';
import Icon from '@material-ui/core/Icon';
import { AppBar, Chip, Grid, Paper, Toolbar, Typography } from '@material-ui/core';

import "./Home.css";

export default function Home() {    
    return (
        <Grid container className="authorized-page-wrapper">
            <div className="authorized-page">
                <Grid container item xs={12} className="authorized-page-header-wrapper">
                    <header className="authorized-page-header">
                        <AppBar position="static" className="app-bar">
                            <Toolbar className="tool-bar">
                                <Grid container className="tool-bar-nested-wrapper">
                                    <Grid item xs={9} className="tool-bar-title-wrapper">
                                        <div className="tool-bar-title">
                                            <Icon>build</Icon> 
                                            <Typography component="h1" variant="h5">Blog Automation</Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={3} className="tool-bar-nav-wrapper">
                                        <nav className="tool-bar-nav">
                                            <Grid container item className="tool-bar-nav-nested-wrapper">
                                                <Grid item xs={4} className="nav-item">
                                                    <Icon>home</Icon> 
                                                    <Typography component="h2">Home</Typography>
                                                </Grid>
                                                <Grid item xs={4} className="nav-item">
                                                    <Icon>tv</Icon> 
                                                    <Typography component="h2">Drama</Typography>
                                                </Grid>
                                                <Grid item xs={4} className="nav-item">
                                                    <Icon>exit_to_app</Icon> 
                                                    <Typography component="h2">Logout</Typography>
                                                </Grid>
                                            </Grid>
                                        </nav>
                                    </Grid>
                                </Grid>
                            </Toolbar>
                        </AppBar>
                    </header>
                </Grid>
                <Grid container item xs={12} className="authorized-page-main-wrapper">
                    <main className="authorized-page-main">
                        <Grid container className="authorized-page-main-nested-wrapper">
                            <Grid item xs={2} className="aside"></Grid>
                            <Grid container item xs={8} className="main-container">
                                <Paper elevation={3} className="main-paper">
                                    <Grid container className="main-paper-section-wrapper">
                                        <section className="main-paper-section">
                                            <Grid container className="section-title">
                                                <Chip label="포스팅 중인 드라마" 
                                                    component="h2" 
                                                    />
                                            </Grid>
                                            <Grid container className="section-content">
                                                드라마 카드 리스트
                                            </Grid>
                                        </section>
                                    </Grid>
                                    <Grid container className="main-paper-section-wrapper">
                                        <section className="main-paper-section">
                                            <Grid container className="section-title">
                                                <Chip label="포스팅 해야 될 글" 
                                                    component="h2" 
                                                    />
                                            </Grid>
                                            <Grid container className="section-content">
                                                표
                                            </Grid>
                                        </section>
                                    </Grid>
                                </Paper>
                            </Grid>
                            <Grid item xs={2} className="aside"></Grid>
                        </Grid>
                    </main>
                </Grid>
                <Grid container item xs={12} className="authorized-page-footer-wrapper">
                    <footer className="authorized-page-footer">
                        <Typography component="span">@Copyright Homgcompany</Typography>
                    </footer>
                </Grid>
            </div>
        </Grid>
    )
}
