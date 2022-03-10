import React, { forwardRef } from 'react'
import { Button } from '@mui/material';
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { CeneteredComp } from './ReactFeaturesStyled';

type TProps = {
  onClick: () => void;
}

const ForwardRef = forwardRef((props: TProps, ref: React.Ref<HTMLDivElement>) => {
  const { onClick } = props;
  return (
    <div ref={ref}></div>
  )
})

function createUser(name: string, surname: string): { name: string, surname: string } {
  const user = { name, surname };
  console.log(user);
  return user;
}

const ReactFeatures: React.FC = (): EmotionJSX.Element => {

  const message: string = 'Hello';
  const ref = React.useRef<HTMLDivElement>(null);
  const [count, setCount] = React.useState<number>(0);
  const [userCreate, setUser] = React.useState({
    name: 'Dmitry',
    surname: 'Kozlov'
  });

  const user = React.useMemo(() => { createUser(userCreate.name, userCreate.surname) }, [userCreate])

  const sayHi = React.useCallback((text: string) => {
    console.log(text);
  }, []);


  React.useEffect(() => {
    sayHi(message);
    console.log(ref)
  }, [sayHi, message, ref]);

  return (
    <>
      <CeneteredComp>
        <Button
          sx={{
            width: 'fit-content',
            alignSelf: 'center',
          }}
          color='warning'
          variant="outlined"
          onClick={() => setCount(count => count + 1)}>{count}</Button>
        <ForwardRef onClick={() => console.log('Click')} ref={ref} />

      </CeneteredComp>
    </>
  )
}

export default ReactFeatures