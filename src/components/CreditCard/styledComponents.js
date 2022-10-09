import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`
export const CreditCardContainer = styled.div`
  width: 700px;
  background-color: #3b4b69;
  padding-top: 20px;
  padding-left: 30px;
  height: 600px;
  padding-left: 40px;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 700px;
    align-items: center;
    padding-top: 50px;
  }
`
export const CreditCardHeading = styled.h1`
  color: #ffffff;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 25px;
    font-weight: 500;
  }
`

export const HrLine = styled.hr`
  background-color: #ffd773;
  width: 125px;
  height: 3px;
  margin-left: 235px;
  @media screen and (min-width: 768px) {
    width: 115px;
    height: 3px;
    margin-left: 275px;
  }
`
export const CreditCardImageContainer = styled.div`
  margin-top: 120px;
  width: 600px;
  height: 300px;
  border-radius: 25px;
  padding-left: 40px;
  padding-top: 130px;
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
`

export const CreditCardNumber = styled.p`
  color: #ffffff;
  font-size: 20px;
  margin-bottom: 40px;
`
export const CreditCardDescription = styled.p`
  color: #ffffff;
  font-size: 15px;
  margin-top: 40px;
  line-height: 1.2;
`
export const CreditCardName = styled.p`
  color: #ffffff;
  font-size: 17px;
  margin-top: 30px;
  line-height: 1.2;
`
export const PaymentContainer = styled.div`
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin-left: 100px;
  height: 300px;
  width: 450px;
  border-radius: 20px;
  margin-top: 100px;
  align-items: center;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    height: 300px;
    width: 450px;
    border-radius: 20px;
    margin-top: 250px;
    display: flex;
    flex-direction: column;
    margin-left: 50px;
    justify-content: center;
    align-items: center;
  }
`
export const TitlePaymentContainer = styled.h1`
  color: #475569;
  padding-bottom: 30px;
`
export const InputNumber = styled.input`
  width: 300px;
  height: 40px;
  margin-bottom: 20px;
  color: #475569;
  @media screen and (min-width: 768px) {
    height: 35px;
    width: 300px;
    margin: 20px;
  }
`
