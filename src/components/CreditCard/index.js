import {useState} from 'react'
import {
  MainContainer,
  CreditCardContainer,
  CreditCardHeading,
  HrLine,
  PaymentContainer,
  TitlePaymentContainer,
  InputNumber,
  CreditCardImageContainer,
  CreditCardNumber,
  CreditCardDescription,
  CreditCardName,
} from './styledComponents'

const CreditCard = () => {
  const [number, setNumber] = useState('')
  const onChangeNumber = event => setNumber(event.target.value)
  const [name, setName] = useState('')
  const onChangeName = event => setName(event.target.value)
  return (
    <MainContainer>
      <CreditCardContainer>
        <CreditCardHeading>CREDIT CARD</CreditCardHeading>
        <HrLine />
        <CreditCardImageContainer data-testid="creditCard">
          <CreditCardNumber>{number}</CreditCardNumber>
          <CreditCardDescription>CARDHOLDER NAME</CreditCardDescription>
          <CreditCardName>{name.toUpperCase()}</CreditCardName>
        </CreditCardImageContainer>
      </CreditCardContainer>
      <PaymentContainer>
        <TitlePaymentContainer>Payment Method</TitlePaymentContainer>
        <InputNumber
          type="text"
          placeholder="Card Number"
          value={number}
          onChange={onChangeNumber}
        />
        <InputNumber
          type="text"
          placeholder="Cardholder Name"
          value={name}
          onChange={onChangeName}
        />
      </PaymentContainer>
    </MainContainer>
  )
}

export default CreditCard
