import { Component } from 'react'
import { styled, ThemeProvider } from 'styled-components'
import { GlobalStyle } from '@/styles/globalstyles'
import { theme } from '@/styles/theme'
import { ConfigProvider, Button } from 'antd'
import ExpenseForm from '@/components/ExpenseForm'
import ExpenseList from '@/components/ExpenseList'
import { getExpense } from '@/api/api'
import Loading from '@/components/Loading'
import axios from 'axios'

interface Expense {
  id: number
  expense: string
  amount: number
}

export default class App extends Component<{}, { expenseData: Expense[]; isDataLoaded: boolean }> {
  constructor(props: {}) {
    super(props)
    this.state = {
      expenseData: [],
      isDataLoaded: false,
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    try {
      const res = await getExpense()
      if (res.status === 200) {
        this.setState({ expenseData: res?.data, isDataLoaded: true })
      }
    } catch (error) {
      console.log(error)
    }
  }

  handleClickDelete = async id => {
    try {
      const res = await axios.delete(`/expense/${id}`)
      if (res.status === 200) {
        console.log('삭제 성공')
        const newExpenses = this.state.expenseData.filter(expense => expense.id !== id)
        this.setState({ expenseData: newExpenses })
      }
    } catch (error) {
      console.error('Error deleting data', error)
    }
  }

  render() {
    const { expenseData, isDataLoaded } = this.state

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
          <Title>Budget Calculator</Title>
          <Container>
            <FormContainer>
              <ExpenseForm />
            </FormContainer>
            <DeleteButton>전체 삭제</DeleteButton>
            <ListContainer>
              {isDataLoaded && (
                <ExpenseList handleClickDelete={this.handleClickDelete} expenseData={this.state.expenseData} />
              )}
            </ListContainer>
          </Container>
          <Total>총 지출: 원</Total>
          {!isDataLoaded && <Loading />}
        </ConfigProvider>
      </ThemeProvider>
    )
  }
}

const Title = styled.h2`
  color: ${props => props.theme.primary};
`

const Container = styled.div`
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

const Total = styled.h3`
  display: flex;
  justify-content: end;
`
