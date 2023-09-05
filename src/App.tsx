import { useEffect, useState, ChangeEvent, FormEventHandler } from 'react'
import { styled, ThemeProvider } from 'styled-components'
import { GlobalStyle } from '@/styles/globalstyles'
import { theme } from '@/styles/theme'
import { ConfigProvider, Button } from 'antd'
import { ExpenseForm } from '@/components/ExpenseForm'
import { ExpenseList } from '@/components/ExpenseList'
import { getExpense, addExpense, editExpense, deleteExpense } from '@/lib/api'
import { ExpenseType } from '@/lib/types'
import Loading from '@/components/Loading'
import Alert from '@/components/Alert'

const App = () => {
  const [expenses, setExpenses] = useState<ExpenseType[]>([])
  const [isDataLoaded, setIsDataLoaded] = useState(false)
  const [isEdited, setisEdited] = useState(false)
  const [id, setid] = useState('')
  const [charge, setcharge] = useState('')
  const [amount, setamount] = useState(0)
  const [alert, setalert] = useState({ show: false, type: '', text: '' })

  const handleAlert = ({ type, text }: { type: string; text: string }) => {
    setalert({ show: true, type, text })
    setTimeout(() => {
      setalert({ show: false, type: '', text: '' })
    }, 7000)
  }

  const handleClickEdit = async (id: string | `${string}-${string}-${string}-${string}-${string}`) => {
    const expense = expenses.find(item => item.id === id)
    if (expense) {
      const { charge, amount } = expense
      setid(id)
      setcharge(charge)
      setamount(amount)
      setisEdited(true)
    }
  }

  const handleClickDelete = async (id: string | `${string}-${string}-${string}-${string}-${string}`) => {
    deleteData(id)
  }

  const handleClickAllDelete = () => {
    deleteAllData()
  }

  const handleChangeCharge = (e: ChangeEvent<HTMLInputElement>) => {
    setcharge(e.target.value)
  }

  const handleChangeAmount = (e: ChangeEvent<HTMLInputElement>) => {
    setamount(Number(e.target.value))
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()
    if (charge !== '' && amount > 0) {
      if (isEdited) {
        editData(id, charge, amount)
        const newExpenses = expenses.map(item => {
          return item.id === id ? { ...item, charge, amount } : item
        })
        setExpenses(newExpenses)
        setisEdited(false)
      } else {
        const randomId = crypto.randomUUID()
        const newExpense = { id: randomId, charge, amount }
        const newExpenses = [...expenses, newExpense]
        addData(randomId, charge, amount)
        setExpenses(newExpenses)
      }
      setcharge('')
      setamount(0)
    } else {
      handleAlert({ type: 'danger', text: '항목을 정확하게 입력해주세요' })
    }
  }

  const fetchData = async () => {
    try {
      const res = await getExpense()
      if (res?.status === 200) {
        setExpenses(res?.data)
        setIsDataLoaded(true)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const addData = async (id: string, charge: string, amount: number) => {
    try {
      const res = await addExpense(id, charge, amount)
      if (res?.status === 200) {
        handleAlert({ type: 'success', text: '내역 추가 완료' })
      }
    } catch (error) {
      console.log(error)
    }
  }

  const editData = async (id: string, charge: string, amount: number) => {
    try {
      const res = await editExpense(id, charge, amount)
      if (res?.status === 200) {
        handleAlert({ type: 'success', text: '내역 수정 완료' })
      }
    } catch (error) {
      console.log(error)
    }
  }

  const deleteData = async (id: string) => {
    try {
      const res = await deleteExpense(id)
      if (res?.status === 200) {
        const newExpenses = expenses.filter(expense => expense.id !== id)
        setExpenses(newExpenses)
        handleAlert({ type: 'danger', text: '내역 삭제 완료' })
      }
    } catch (error) {
      console.log(error)
    }
  }

  const deleteAllData = async () => {
    try {
      const allData = expenses.map(item => item.id)
      const deletePromises = allData.map(id => deleteData(id))
      const results = await Promise.all(deletePromises)
      if (results.every(result => result)) {
        handleAlert({ type: 'danger', text: '전체 내역 삭제 완료' })
      }
      setExpenses([])
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ConfigProvider
        theme={{
          token: {
            // Seed Token
            colorPrimary: '#5B7DD7',
          },
        }}
      >
        {alert.show && <Alert type={alert.type} text={alert.text} />}
        <Title>Budget Calculator</Title>
        <Container>
          <FormContainer>
            <ExpenseForm
              handleChangeCharge={handleChangeCharge}
              handleChangeAmount={handleChangeAmount}
              charge={charge}
              amount={amount}
              handleSubmit={handleSubmit}
              isEdited={isEdited}
            />
          </FormContainer>
          {expenses.length > 0 && <DeleteButton onClick={handleClickAllDelete}>전체 삭제</DeleteButton>}
          <ListContainer>
            {isDataLoaded && (
              <ExpenseList
                handleClickDelete={handleClickDelete}
                handleClickEdit={handleClickEdit}
                expenseData={expenses}
              />
            )}
          </ListContainer>
          {isDataLoaded && expenses.length <= 0 && <EmptyList>내역이 없습니다.</EmptyList>}
          {!isDataLoaded && <Loading />}
        </Container>
        {isDataLoaded && (
          <TotalWrap>
            <h3>총 지출 : </h3>
            <h3>
              {expenses
                .reduce((acc, curr) => {
                  return (acc += curr.amount)
                }, 0)
                .toLocaleString('ko-KR')}
            </h3>
            <h3>원</h3>
          </TotalWrap>
        )}
      </ConfigProvider>
    </ThemeProvider>
  )
}

export default App

const Title = styled.h2`
  color: ${props => props.theme.primary};
`

const Container = styled.div`
  position: relative;
  width: 900px;
  height: 500px;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const FormContainer = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
`

const DeleteButton = styled(Button)`
  align-self: flex-start;
  margin-left: 1rem;
`

const ListContainer = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  &&::-webkit-scrollbar {
    display: none;
  }
`

const TotalWrap = styled.div`
  display: flex;
  justify-content: end;
`

const EmptyList = styled.div`
  color: ${props => props.theme.primary};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
