import React from 'react';
import clsx from 'clsx';
import 'styleguide/components/inputStyles.scss';
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
      <label className="input-label">{label}</label>
      <div className="input-wrapper">
        <input
            className="input-field"
            onKeyPress={handleKeyPress} {...props}
        />
        {icon && <Icon name={icon} />}
      </div>
      <div className="error-text">{error}</div>
    </StyledInput>
  );
};

export default Input;

const StyledInput = styled.div``;
