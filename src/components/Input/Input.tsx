import React from 'react';
import clsx from 'clsx';
import styled from 'styleguide/styled';
import Icon from 'components/Icon';
import { IconName } from 'components/Icon/Icon';

interface IComponentProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * The content of the label.
   */
  label?: React.ReactNode;
  /**
   * Error state. If used as string error text will appear below the input.
   */
  error?: boolean | React.ReactNode;
  /**
   * Success state. Makes icon green and adds default 'check-circle' icon.
   */
  success?: boolean;
  /**`
   * Name of an icon to dispay on the right side of the input.
   */
  icon?: IconName;
  /**`
   * Removes focus from input when "Enter" is pressed.
   */
  blurOnSubmit?: boolean;
}

const ErrorText = styled.div`
  font-size: 12px;
  line-height: 16px;
  color: #DF1721;
`;

const InputLabel = styled.label`
  font-family: 'Inter-Regular';
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 16px;
  color: #000000;
  margin-bottom: 4px;
  display: block;
`;

const InputWrapper = styled.div`
  @media (min-width: 320px) {
    position: relative;
    width: 100%;
    height: 40px;
    & > input {
      background: #ffffff;
      border: 1px solid #DADADA;
      box-sizing: border-box;
      border-radius: 3px;
      width: 100%;
      height: 40px;
      outline: none;
      font-size: 12px;
      color: #000000;
      padding-left: 8px;
      position: relative;
      &:hover {
        border: 1px solid #000000;
        cursor: pointer;
      }
      &::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        color:#8B8B8B;
      }
      &::-moz-placeholder { /* Firefox 19+ */
        color:#8B8B8B;
      }
      &:-ms-input-placeholder { /* IE 10+ */
        color:#8B8B8B;
      }
      &:-moz-placeholder { /* Firefox 18- */
        color:#8B8B8B;
      }
    }
  }
  @media (min-width: 640px) {
    width: 300px;
    & > input {
      width: 300px;
    }
  }
`;

const InputWrapperIcon = styled.div`
  position: absolute;
  top: 14px;
  right: 14px;
`;

const Input: React.FC<IComponentProps> = ({
  label,
  error,
  success,
  disabled,
  icon,
  blurOnSubmit,
  className,
  onKeyPress,
  ...props
}) => {
  if (success && !icon) icon = 'check-circle';

  const handleKeyPress = e => {
    if (blurOnSubmit && e.charCode === 13) e.target.blur();
    if (onKeyPress) onKeyPress(e);
  };

  return (
    <StyledInput className={clsx('input', { label, icon, error, success, disabled }, className)}>
      <InputLabel>{label}</InputLabel>
      <InputWrapper>
        <input onKeyPress={handleKeyPress} {...props}
        />
        <InputWrapperIcon>
          {icon && <Icon name={icon} />}
        </InputWrapperIcon>
      </InputWrapper>
      <ErrorText>{error}</ErrorText>
    </StyledInput>
  );
};

export default Input;

const StyledInput = styled.div``;
