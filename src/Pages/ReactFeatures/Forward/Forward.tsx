import React, { forwardRef } from 'react';

type TProps = {
  onClick: () => void;
}

export const Forward = forwardRef((props: TProps, ref: React.Ref<HTMLDivElement>) => {
  const { onClick } = props;
  return (
    <div ref={ref}></div>
  );
});
