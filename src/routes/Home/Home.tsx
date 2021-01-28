import React from 'react';
import Icon from '@material-ui/core/Icon';
import { AppBar, Card, Chip, Grid, Paper, Toolbar, Typography, CardMedia, CardContent } from '@material-ui/core';

import "./Home.css";

const dramaList = [
    {
        id: 0,
        imageUrl: "https://search.pstatic.net/common?type=o&size=150x214&quality=90&direct=true&src=https%3A%2F%2Fcsearch-phinf.pstatic.net%2F20210125_152%2F1611553331636y3oFQ_JPEG%2F57_14261794_poster_image_1611553331567.jpg",
        title: "선배, 그 립스틱 바르지 마요",
        broadcast: "JTBC",
        days: ["월", "화"],
        time: "오후 09:00",
        rating: 2.1,
        subscribe: 13285,
    },
];

export default function Home() {    
    const dramaCardList = dramaList.map(drama => 
    <Card className="drama-card" elevation={5} key={drama.id}>
        <div className="drama-card-img-wrapper">
            <CardMedia component="img"
                    image={drama.imageUrl}
                    title={`${drama.title}-image`}
                    className="drama-card-img"
                    />
        </div>
        <div className="drama-card-content-wrapper">
            <CardContent className="drama-card-content">
                <div className="drama-card-content-nested-wrapper">
                    <div className="drama-title">
                        <Typography component="h5">
                            {drama.title}
                        </Typography>
                    </div>
                    <div className="drama-broadcast-info">
                        <Typography component="span">
                            {drama.broadcast} /
                            {drama.days} /
                            {drama.time}
                        </Typography>
                    </div>
                    <div className="drama-rating-info">
                        <Typography component="span">
                            시청률 {drama.rating}%
                        </Typography>
                    </div>
                    <div className="drama-subscribe-info">
                        <Typography component="span">
                            구독수 {drama.subscribe}
                        </Typography>
                    </div>
                </div>
            </CardContent>
        </div>
    </Card> 
    );
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
                                                { 
                                                    (dramaCardList) ? dramaCardList : <></> 
                                                }
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
