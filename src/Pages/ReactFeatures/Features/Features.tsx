import React from 'react'
import { Button } from '@mui/material';
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import * as Styled from './Features.styled';
import { createUser } from '../utils/createUser';
import { Forward } from '../Forward/Forward';

type TProps = {
  onClick: () => void;
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


  const handleClick = () => setCount(count => count + 1)

  return (
    <>
      <Styled.CeneteredComp>
        <Button
          sx={{
            width: 'fit-content',
            alignSelf: 'center',
          }}
          color='warning'
          variant="outlined"
          onClick={handleClick}
        >
          {count}
        </Button>
        <Forward ref={ref} />

      </Styled.CeneteredComp>
    </>
  )
}

export default ReactFeatures