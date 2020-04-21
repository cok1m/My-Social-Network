import Axios from "axios";

const axios = Axios.create({  
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    "API-KEY": "2a313df2-ed6d-49e1-b08e-da68dd887bcd"
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
  }
} 

export const authAPI  = {
  authMe: async () => {
    let response = await axios.get('auth/me')
    return response.data
  }

}