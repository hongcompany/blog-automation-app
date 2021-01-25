import { Grid, TextField, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import "components/form/SignForm.css";

export default function LoginForm() {
    return (                  
        <Grid container spacing={1} className="form-wrapper">
            <div className="sign-form">
                <Grid container item xs={12} className="form-nested-wrapper">
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
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="password"
                            label="Password"
                            name="password"
                            type="password"
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
                <Grid container item spacing={1} xs={12} className="form-extra-info-wrapper">
                    <Grid item xs={10}>
                        <Typography component="span">Blog Automation이 처음이신가요?</Typography>
                    </Grid>
                    <Grid item xs={2} className="sign-form-link-wrapper">
                        <Typography component="span">
                            <Link to="/signup">회원가입</Link>
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        </Grid>
    )
}
