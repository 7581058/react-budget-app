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

export const addExpense = async (id: string, charge: string, amount: number) => {
  try {
    const res = await axios({
      method: 'post',
      url: '/expense',
      data: {
        id,
        charge,
        amount,
      },
    })
    return res
  } catch (error) {
    console.error('내역 추가 실패', error)
  }
}

export const editExpense = async (id: string, charge: string, amount: number) => {
  try {
    const res = await axios({
      method: 'post',
      url: `/expense/${id}`,
      data: {
        charge,
        amount,
      },
    })
    return res
  } catch (error) {
    console.error('내역 수정 실패', error)
  }
}

export const deleteExpense = async (id: string) => {
  try {
    const res = await axios({
      method: 'delete',
      url: `/expense/${id}`,
    })
    return res
  } catch (error) {
    console.error('내역 삭제 실패', error)
  }
}
