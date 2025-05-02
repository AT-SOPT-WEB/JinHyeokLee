import { useState } from 'react';
import * as style from './inputStyle';

const Input = ({ ...props }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <div css={[style.containerStyle, isFocused && style.containerFocusStyle]}>
      <input
        // ref={ref}
        type="text"
        css={style.inputStyle}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      />
    </div>
  );
};

export default Input;
