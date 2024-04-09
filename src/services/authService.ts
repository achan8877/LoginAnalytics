import { LoginResponse, SignUpRequest, SignUpResponse } from "../models/models";

// src/services/authService.ts
export const login = async (username: string, password: string):Promise<LoginResponse> => {
  
    try {
      const response = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),//
      });
      if (!response.ok) {
        throw new Error(`Server responded with status ${response.status}`);
      }
  
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new TypeError("Didn't receive JSON");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error during login:', error);
      throw error;
    }
  };
  
// In your authService or wherever the signup function is located

// Mock implementation of the signup service
export async function signup(signUpRequest: SignUpRequest): Promise<SignUpResponse> {
  // Simulate a network request delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Return a fake response
  return {
    message: 'success',
    token: 'fake_token_value',
  };

  }