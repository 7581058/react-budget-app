import { styled } from 'styled-components'
import { ChangeEvent, FormEvent } from 'react'
import { Input, Typography, Button } from 'antd'
const { Title } = Typography

export const ExpenseForm = ({
  handleChangeCharge,
  handleChangeAmount,
  handleSubmit,
  charge,
  amount,
  isEdited,
}: {
  handleChangeCharge: (e: ChangeEvent<HTMLInputElement>) => void
  handleChangeAmount: (e: ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void
  charge: string
  amount: number
  isEdited: boolean
}) => {
  return (
    <Container onSubmit={handleSubmit}>
      <FormContainer>
        <FormWrap>
          <Title level={5}>지출 항목</Title>
          <Input type="text" placeholder="예) 카페" value={charge} onChange={handleChangeCharge} />
        </FormWrap>
        <FormWrap>
          <Title level={5}>비용</Title>
          <Input placeholder="예) 1000원" value={amount} onChange={handleChangeAmount} />
        </FormWrap>
      </FormContainer>
      <SubmitButton type="primary" htmlType="submit">
        {isEdited ? '수정' : '제출'}
      </SubmitButton>
    </Container>
  )
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
