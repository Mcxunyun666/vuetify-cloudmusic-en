import axios from '../api'

// 返回登录状态等信息
function status() {
  return new Promise((resolve, reject) => {
    axios
      .get('/login/status')
      .then(response => {
        if (response.data.account) {
          axios
            .get('/user/detail', {
              params: {
                uid: response.data.account.id
              }
            })
            .then(response => {
              resolve({
                uid: response.profile.userId,
                level: response.level,
                avatarUrl: response.profile.avatarUrl
              })
            })
            .catch(error => reject(error))
        } else {
          resolve({
            uid: -1,
            level: 0,
            avatarUrl: ''
          })
        }
      })
      .catch(error => reject(error))
  })
}

export default status
