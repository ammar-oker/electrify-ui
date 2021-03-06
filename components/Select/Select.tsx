import { forwardRef, useId } from 'react';
import { SelectProps } from './types';
import * as S from './styles';

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      options,
      label,
      hideDetails,
      error = false,
      color = 'primary',
      helperText,
      id,
      errorMessage,
      ...props
    },
    ref,
  ) => {
    const defaultInputId = useId();
    const inputId = id || defaultInputId;

    return (
      <S.StyledSelect $error={error} $color={color} $withLabel={!!label}>
        <S.SelectWrapper>
          <select ref={ref} id={inputId} {...props}>
            {options.map(option => {
              if (option) {
                const title =
                  typeof option === 'string' ? option : option.title;
                const value =
                  typeof option === 'string' ? option : option.value;

                return (
                  <option key={String(value)} value={String(value)}>
                    {title}
                  </option>
                );
              }
            })}
          </select>
          {label && <label htmlFor={inputId}>{label}</label>}
        </S.SelectWrapper>
        {!hideDetails && (
          <S.SelectHelperText $error={error}>
            {errorMessage || helperText}
          </S.SelectHelperText>
        )}
      </S.StyledSelect>
    );
  },
);

Select.displayName = 'Select';

export default Select;
