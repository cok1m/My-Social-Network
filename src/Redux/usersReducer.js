const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW'

let initialState = {
  users: [
    // {
    //   id: 1,
    //   avatarUrl: 'https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-7-avatar-2754582_120519.png',
    //   name: 'Dmitry K.',
    //   location: {
    //     country: 'Qazaqstan',
    //     city: 'Almaty',
    //   },
    //   status: 'I\'m looking for a Job right now',
    //   isFollow: true
      
    // },
    // {
    //   id: 2,
    //   avatarUrl: 'https://sibsvaya-nk.ru/wp-content/uploads/2018/08/baba.png',
    //   name: 'Svetlana D.',
    //   location: {
    //     country: 'Qazaqstan',
    //     city: 'Astana',
    //   },
    //   status: 'I am so pretty',
    //   isFollow: false
    // },
    // {
    //   id: 3,
    //   avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSFD1Ofi7-DsfgVE7CojIqMuNGYEN1N4dGyec3hJQebtISancyF&usqp=CAU',
    //   name: 'Sergei S.',
    //   location: {
    //     country: 'Ukraine',
    //     city: 'Kiev',
    //   },
    //   status: 'I like football',
    //   isFollow: false
    // },
    // {
    //   id: 4,
    //   avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTmHvlQey7sRB-lIKvwZQHlY-Gwi0TIDWloz6LZcCYwdubZ5-nV&usqp=CAU',
    //   name: 'Andrew T.',
    //   location: {
    //     country: 'United States',
    //     city: 'Philadelphia',
    //   },
    //   status: 'I\'m free to help you to create good Video Production',
    //   isFollow: true
    // }

  ]
}

const usersReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case FOLLOW:
      return { 
        ...state, 
        users: state.users.map(user => {
          return user.id === action.userId ? {...user, isFollow: true } : user
        })
      }

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          return user.id === action.userId ? {...user, isFollow: false } : user
        })
      }
    // case TOGGLE_FOLLOW:
    //   return {
    //     ...state,
    //     users: state.users.map(user => {
    //       return user.id === action.userId ? {...user, isFollow: !user.isFollow} : user
    //     })
    //   }
      
    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users]
      }
    default:
      return state
  }
}


export const followActionCreator = (userId) => ({ type: FOLLOW, userId })

export const unfollowActionCreator = (userId) => ({ type: UNFOLLOW,userId })

export const setUsersActionCreator = users => ({ type: SET_USERS, users })

export default usersReducer