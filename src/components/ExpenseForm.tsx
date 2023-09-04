import React, { Component } from 'react'
import { styled } from 'styled-components'
import { Input, Typography, Button } from 'antd'
const { Title } = Typography

export default class ExpenseForm extends Component {
  render() {
    return (
      <Container>
        <FormContainer>
          <FormWrap>
            <Title level={5}>지출 항목</Title>
            <Input placeholder="예) 카페" />
          </FormWrap>
          <FormWrap>
            <Title level={5}>비용</Title>
            <Input placeholder="예) 1000원" />
          </FormWrap>
        </FormContainer>
        <SubmitButton type="primary">제출</SubmitButton>
      </Container>
    )
  }
}

const Container = styled.form`
  width: 100%;
  display: flex;
  gap: 20px;
`

const FormContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
`

const FormWrap = styled.div`
  width: 100%;
`

const SubmitButton = styled(Button)`
  align-self: end;
`
