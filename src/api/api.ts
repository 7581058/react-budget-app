import axios from 'axios'

export const getExpense = async () => {
  try {
    const res = await axios({
      method: 'get',
      url: '/expense',
    })
    return res
  } catch (error) {
    console.error('내역 불러오기 실패', error)
  }
}
