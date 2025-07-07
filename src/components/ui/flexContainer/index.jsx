import React from 'react';

// FlexContainer - це простий компонент-обгортка.
// Він повинен приймати `children` як проп і рендерити їх.
// Ми також передаємо решту пропсів (`...props`), щоб можна було задавати `className`, `id` і т.д.
const FlexContainer = ({ children, ...props }) => {
  return (
    <div {...props}>{children}</div>
  );
};

export default FlexContainer;