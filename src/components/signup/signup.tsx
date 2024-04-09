import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SignUpRequest, SignUpResponse } from '../../models/models';
import { signup } from '../../services/authService';

const SignUpContainer = styled(Box)(({ theme }) => ({
maxWidth: '400px',
margin: '50px auto',
padding: theme.spacing(2.5),
border: `1px solid ${theme.palette.divider}`,
borderRadius: theme.shape.borderRadius,
backgroundColor: theme.palette.background.paper,
boxShadow: theme.shadows[2],
}));

const FormButton = styled(Button)(({ theme }) => ({
margin: theme.spacing(1, 0),
}));

function SignUpPage() {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [address, setAddress] = useState('');
const [accountType, setAccountType] = useState<'admin' | 'normal'>('normal');
const [profileImageLink, setProfileImageLink] = useState('');
const [error, setError] = useState('');
const navigate = useNavigate();
const [success, setSuccess] = useState(false);

const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
setUsername(event.target.value);
};

const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
setPassword(event.target.value);
};

const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
setAddress(event.target.value);
};

const handleAccountTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
setAccountType(event.target.value as 'admin' | 'normal');
};

const handleProfileImageLinkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
setProfileImageLink(event.target.value);
};

const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
event.preventDefault();
const fakeSignUpRequest: SignUpRequest = {
    username: 'fakeuser',
    password: 'fakepassword',
    address: '123 Fake Street',
    account_type: 'normal',
    profile_image_link: 'http://fakeimage.com/profile.jpg',
};
const signUpRequest: SignUpRequest = {
    username,
    password,
    address,
    account_type: accountType,
    profile_image_link: profileImageLink,
};
try {
    const response: SignUpResponse = await signup(signUpRequest);
    if (response.message === 'success' && response.token) {
    setSuccess(true); // Set success to true if signup was successful
    } else {
    setError('Signup failed. ' + response.message);
    }
} catch (error:any) {
    setError('An error occurred during signup: ' + error.message);
}
};

return (
<SignUpContainer>
    <Typography variant="h5" textAlign="center" color="textPrimary" gutterBottom>
    Sign Up
    </Typography>
    {error && <Typography color="error">{error}</Typography>}
    {success && <Typography color="primary">Signup successful!</Typography>}
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
    <TextField
        margin="normal"
        required
        fullWidth
        id="username"
        label="Username"
        name="username"
        autoComplete="username"
        value={username}
        onChange={handleUsernameChange}
    />
    <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="new-password"
        value={password}
        onChange={handlePasswordChange}
    />
    <TextField
        margin="normal"
        fullWidth
        id="address"
        label="Address"
        name="address"
        autoComplete="address"
        value={address}
        onChange={handleAddressChange}
    />
    <FormControl fullWidth margin="normal">
        <InputLabel id="accountType-label">Account Type</InputLabel>
        <Select
        labelId="accountType-label"
        id="accountType"
        value={accountType}
        label="Account Type"
        >
        <MenuItem value="normal">Normal</MenuItem>
        <MenuItem value="admin">Admin</MenuItem>
        </Select>
    </FormControl>
    <TextField
        margin="normal"
        fullWidth
        id="profileImageLink"
        label="Profile Image Link"
        name="profileImageLink"
        autoComplete="url"
        value={profileImageLink}
        onChange={handleProfileImageLinkChange}
    />
    <FormButton
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
    >
        Sign Up
    </FormButton>
    <Box sx={{ display: 'flex', justifyContent: 'left', gap: 1, mt: 2 }}>
        <Button component={Link} to="/login" variant="outlined">
        Login
        </Button>
        <Button component={Link} to="/" variant="outlined">
        Home
        </Button>
    </Box>
    </Box>
</SignUpContainer>
);
};

export default SignUpPage;