import styled, { css } from 'styled-components/native';

interface PlaceholderLabelProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.View`
  width: 306px;
  height: 50px;
  margin-top: 40px;
  border-bottom-width: 1px;
  padding: 0;
  border-bottom-color: #ffffff80;
`;

export const PlaceholderLabel = styled.Text<PlaceholderLabelProps>`
  position: absolute;
  left: 0;
  color: #ffffffb3;

  ${(props) =>
    props.isFocused || props.isFilled
      ? css`
          transform: translateY(-25px);
          font-size: 13px;
        `
      : css`
          transform: translateY(+25px);
          font-size: 16px;
        `}
`;

export const LabeledInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: #fff;
  padding: 0;
  margin: 0;
`;