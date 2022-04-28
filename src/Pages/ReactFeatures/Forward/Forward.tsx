import React, { forwardRef } from 'react';

export const Forward = forwardRef((props: {}, ref: React.Ref<HTMLDivElement>) => {
  return (
    <div ref={ref}></div>
  );
});
