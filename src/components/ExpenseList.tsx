import React, { Component } from 'react'
import { styled } from 'styled-components'
import ExpenseItem from './ExpenseItem'

export default class ExpenseList extends Component {
  render() {
    return (
      <Container>
        <ListWrap>
          {this.props.expenseData &&
            this.props.expenseData.map(expense => {
              return <ExpenseItem handleClickDelete={this.props.handleClickDelete} key={expense.id} expense={expense} />
            })}
        </ListWrap>
      </Container>
    )
  }
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
