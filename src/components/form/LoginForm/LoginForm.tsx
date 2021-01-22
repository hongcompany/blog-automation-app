import { Grid, TextField, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import "./LoginForm.css";

export default function LoginForm() {
    return (                  
        <Grid container spacing={1} className="login-form-wrapper">
            <div className="login-form">
                <Grid container item xs={12} className="form-wrapper">
                    <form>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            className="form-input"
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            className="form-input"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className="form-button"
                        >
                            Sign In
                        </Button>
                    </form>
                </Grid>
                <Grid container item spacing={1} xs={12} className="form-extra-info-wrapper">
                    <Grid item xs={10}>
                        <Typography component="span">Blog Automation이 처음이신가요?</Typography>
                    </Grid>
                    <Grid item xs={2} className="sign-up-link-wrapper">
                        <Typography component="span">
                            <Link to="/">회원가입</Link>
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        </Grid>
    )
}
