import { styled } from 'styled-components'
import { ExpenseItem } from './ExpenseItem'
import { ExpenseType } from '@/lib/types'

export const ExpenseList = ({
  handleClickDelete,
  handleClickEdit,
  expenseData,
}: {
  handleClickDelete: (id: string) => Promise<void>
  handleClickEdit: (id: string) => Promise<void>
  expenseData: ExpenseType[]
}) => {
  return (
    <Container>
      <ListWrap>
        {expenseData &&
          expenseData.map(expense => {
            return (
              <ExpenseItem
                handleClickDelete={handleClickDelete}
                handleClickEdit={handleClickEdit}
                key={expense.id}
                expense={expense}
              />
            )
          })}
      </ListWrap>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const ListWrap = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`
