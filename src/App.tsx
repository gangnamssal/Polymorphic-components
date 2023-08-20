/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Button from './Button';

function App() {
  return (
    <>
      <Button onClick={() => console.log('123')} css={appStyle.button}>
        Click
      </Button>
    </>
  );
}

const appStyle = {
  button: () =>
    css({
      width: '10vw',
      height: '5vh',
      backgroundColor: 'red',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }),
};

export default App;
