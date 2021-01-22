import { Grid, TextField, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import "./LoginForm.css";

export default function LoginForm() {
    return (                  
        <Grid container spacing={1} className="login-form-wrapper">
            <div className="login-form">
                <Grid container item xs={12} className="form-wrapper">
                    <form noValidate>
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
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                        >
                            Sign In
                        </Button>
                    </form>
                </Grid>
                <Grid container item xs={12} className="form-extra-info-wrapper">
                    <Typography component="span">Blog Automation이 처음이신가요?</Typography>
                    <Link to="/">회원가입</Link>
                </Grid>
            </div>
        </Grid>
    )
}
