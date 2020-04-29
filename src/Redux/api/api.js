import Axios from "axios";

const axios = Axios.create({  
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    "API-KEY": "4df29c85-3f77-4244-a766-7b3c2a94e24d"
    }
})

export const usersAPI = {
  getUsers: async (currentPage = 1, pageSize = 100) => {
    const response = await axios.get(`users?page=${currentPage}&count=${pageSize}`)
    return response.data;
  },

  follow: async userId => {
    const response = await axios.post(`follow/${userId}`)
    return response.data
  },

  unfollow: async userId => {
    const response = await axios.delete(`follow/${userId}`)
    return response.data
  },
} 

export const profileAPI = {
  getProfile: async userId => {
    let response = await axios.get(`profile/${userId}`)
    return response.data
  },
  
  getStatus: async userId => {
    let response = await axios.get(`profile/status/${userId}`)
    return response;
  },

  updateStatus: async (status) => {
    let response = await axios.put(`profile/status/`, {
      status: status
    })
    return response
  },

  updateProfileInfo: async (profileInfo) => {
    let response = await axios.put('profile', profileInfo)
    return response
  },

  saveProfilePhoto: async (photoFile) => {
    let formData = new FormData();
    formData.append("image", photoFile)
    let response = await axios.put('profile/photo', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    return response
  }
}

export const authAPI  = {
  authMe: async () => {
    let response = await axios.get('auth/me')
    return response.data
  },

  login: async (email, password, rememberMe = false, captcha = null) => {
    let response = await axios.post('auth/login', {
      email,
      password,
      rememberMe,
      captcha
    })
    return response
  },

  logout: async () => {
    let response = await axios.delete('auth/login')
    return response
  }
}

export const securityAPI = {
  getCaptchaUrl: async () => {
    return axios.get('security/get-captcha-url')
  }
}