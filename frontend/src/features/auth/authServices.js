import axios from 'axios'
import axiosInstance from '../../axios';



//Register user
const register = async(userData)=>{
    const response =await axios.post('http://localhost:5000/user/signup',userData)
    if(response.data){
        console.log(response.data);
        localStorage.setItem('user',JSON.stringify(response.data))
    }
    return response.data
}


//login user
const login = async(loginCredential)=>{
    const response = await axiosInstance.post('/user/login',loginCredential)
    console.log(response);
    if(response.data){
        console.log(response.data);
        localStorage.setItem('user',JSON.stringify(response.data)) 
    }
    return response.data
}


//logout user
const logout = ()=>{
    localStorage.removeItem('user')
}

const authService = {
    register,
    logout,
    login
}

export default authService