import { styled } from 'styled-components'
import { BiPencil, BiTrash } from 'react-icons/bi'
import { ExpenseType } from '@/lib/types'

export const ExpenseItem = ({
  handleClickDelete,
  handleClickEdit,
  expense,
}: {
  handleClickDelete: (id: string) => Promise<void>
  handleClickEdit: (id: string) => Promise<void>
  expense: ExpenseType
}) => {
  return (
    <ListItem>
      <InfoWrap>
        <Expense>{expense.charge}</Expense>
        <Amount>{expense.amount.toLocaleString('ko-KR')}원</Amount>
      </InfoWrap>
      <ButtonWrap>
        <Button onClick={() => handleClickEdit(expense.id)}>
          <BiPencil />
        </Button>
        <Button onClick={() => handleClickDelete(expense.id)}>
          <BiTrash />
        </Button>
      </ButtonWrap>
    </ListItem>
  )
}

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding-left: 10px;
  &:hover {
    background-color: ${props => props.theme.gray};
  }
`

const InfoWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const Expense = styled.span`
  width: 100%;
`

const Amount = styled.span`
  width: 100%;
  color: ${psops => psops.theme.primary};
  font-weight: 700;
`

const ButtonWrap = styled.div`
  display: flex;
`

const Button = styled.div`
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`
