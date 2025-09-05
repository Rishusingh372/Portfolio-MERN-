import axios from 'axios';

const testLogin = async () => {
  try {
    console.log('Testing login API...');
    const response = await axios.post('http://localhost:5000/api/auth/login', {
      username: 'admin',
      password: 'admin123'
    });
    
    console.log('Login successful!');
    console.log('Response:', response.data);
  } catch (error) {
    console.error('Login failed!');
    console.error('Error:', error.response?.data || error.message);
  }
};

testLogin();
