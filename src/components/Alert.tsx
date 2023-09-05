import { styled } from 'styled-components'

export default function Alert({ type, text }: { type: string; text: string }) {
  return <Container className={type}>{text}</Container>
}

const Container = styled.div`
  color: ${props => props.theme.white};
  border-radius: 6px;
  padding: 10px;
  &.danger {
    background-color: ${props => props.theme.red};
  }
  &.success {
    background-color: ${props => props.theme.green};
  }
`
