import React, { Component } from 'react'
import { styled } from 'styled-components'
import { BiPencil, BiTrash } from 'react-icons/bi'

export default class ExpenseItem extends Component {
  render() {
    return (
      <ListItem>
        <InfoWrap>
          <Expense>{this.props.expense.expense}</Expense>
          <Amount>{this.props.expense.amount}원</Amount>
        </InfoWrap>
        <ButtonWrap>
          <Button>
            <BiPencil />
          </Button>
          <Button onClick={() => this.props.handleClickDelete(this.props.expense.id)}>
            <BiTrash />
          </Button>
        </ButtonWrap>
      </ListItem>
    )
  }
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
