import React, { forwardRef } from 'react'
import styled from '@emotion/styled';
import _ from 'lodash'
import { Button } from '@mui/material';
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';


const CeneteredComp = styled.div`
    height:90vh;
    display:flex;
    align-items:center;
    justify-content:center;
`
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
  const ref = React.useRef<HTMLDivElement>(null);
  const [message, setMessage] = React.useState('Hello');
  const [count, setCount] = React.useState(0);
  const [name, setName] = React.useState('Dmitry');
  const [surname, setSurname] = React.useState('Kozlov');

  const user = React.useMemo(() => { createUser(name, surname) }, [name, surname])

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