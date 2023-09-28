const { default: styled } = require('styled-components');

export const FormContainer = styled('form')(() => ({
  paddingTop: 20,
  margin: '0 auto',
  border: '1px solid black',
  padding: 10,
  display: 'flex',
  flexDirection: 'column',
  maxWidth: 300,
}));

export const FormWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const Input = styled('input')(() => ({
  borderRadius: 5,
  boxShadow: 'box-shadow: inset 10px -10px 30px 0px rgba(0,0,0,0.75)',
  padding: '5px 10px',
}));

export const LabelTypography = styled('label')(() => ({
  fontWeight: 700,
  marginBottom: 5,
}));

export const SubmitButton = styled.button`
  margin-left: auto;
  padding: 5px 10px;
  font-weight: 600;
  border-radius: 10px;
  &:hover {
    background-color: green;
    color: #fff;
  }
`;
