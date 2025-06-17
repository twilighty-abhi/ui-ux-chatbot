import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getRedirectResult } from 'firebase/auth';
import { auth } from '../firebase';

const GoogleAuthHandler = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const handleRedirectResult = async () => {
            try {
                const result = await getRedirectResult(auth);
                if (result) {
                    // User signed in successfully
                    console.log('Google sign-in successful:', result.user);
                    navigate('/home');
                }
            } catch (error) {
                console.error('Google redirect error:', error);
                // Navigate back to login with error
                navigate('/login?error=google_auth_failed');
            }
        };

        handleRedirectResult();
    }, [navigate]);

    return null; // This component doesn't render anything
};

export default GoogleAuthHandler; 