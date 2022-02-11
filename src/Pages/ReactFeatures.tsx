import React, { forwardRef } from 'react'
import styled from '@emotion/styled';
import _ from 'lodash'
import { Button } from '@mui/material';


const CeneteredComp = styled.div`
    height:90vh;
    display:flex;
    align-items:center;
    justify-content:center;
`
type TProps = {
  onClick: () => void;
}
const ForwardRef = forwardRef((props: TProps, ref) => {
  const { onClick } = props;
  return (
    <div></div>
  )
})

function createUser(firstWord: string, secondWord: string) {
  const user = { firstWord, secondWord };
  console.log(user);
  return user;
}

function ReactFeatures() {
  const ref = React.useRef();
  const [message, setMessage] = React.useState('Hello');
  const [count, setCount] = React.useState(0);
  const [name, setName] = React.useState('Dmitry');
  const [surname, setSurname] = React.useState('Kozlov');

  const user = React.useMemo(() => { createUser(name, surname) }, [name, surname])

  const sayHi = React.useCallback((text) => {
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