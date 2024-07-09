import { jwtDecode } from "jwt-decode";

const apiUrl = 'http://localhost:8090/api/auth'; // Your backend API URL

export async function signIn(username, password) {
    try {
        const response = await fetch(`${apiUrl}/signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });
        if (!response.ok) {
            throw new Error('Failed to sign in');
        }
        const data = await response.json();
        localStorage.setItem('token', data.token);
    } catch (error) {
        console.error('Sign in error:', error);
        throw error; // Propagate the error for handling in the UI or calling code
    }
}

export async function signUp(username, email, password) {
    try {
        const response = await fetch(`${apiUrl}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify( username, email, password ),
        });
        if (!response.ok) {
            throw new Error('Failed to sign up');
        }
        const data = await response.json();
        return data; // Return the response data for potential further processing
    
    } 
    
    catch (error) {
        console.error('Sign up error:', error);
        throw error; // Propagate the error for handling in the UI or calling code
    }
}

export function logout() {
    localStorage.removeItem('token');
}

export function getCurrentUser() {
    try {
        const token = localStorage.getItem('token');
        if (!token) {
            return null;
        }
        return jwtDecode(token);
    } catch (error) {
        console.error('Error decoding token:', error);
        return null;
    }
}

export function getJwt() {
    return localStorage.getItem('token');
}
