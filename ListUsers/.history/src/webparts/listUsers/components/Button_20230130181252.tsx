import { DefaultButton, PrimaryButton, Stack } from 'office-ui-fabric-react';
import * as React from 'react';

export interface IButtonProps { }

export const Button: React.FunctionComponent<IButtonProps> = (props: React.PropsWithChildren<IButtonProps>) => {
  const [value, setValue] = React.useState('');

  return (
    <>
      <Stack tokens={{childrenGap: "10px"}} style={{width: "50"}}>
        <DefaultButton text='Update' />
        <PrimaryButton text='Delete' onClick={(event) => console.log(event)} />
      </Stack>
    </>
  );
};