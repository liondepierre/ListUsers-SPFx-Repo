import { DefaultButton, PrimaryButton } from 'office-ui-fabric-react';
import * as React from 'react';

export interface IButtonProps {}

export const Button: React.FunctionComponent<IButtonProps> = (props: React.PropsWithChildren<IButtonProps>) => {
  const [value, setValue] = React.useState('');

  return (
    <>
      <DefaultButton text='Update' />
      <PrimaryButton text='Delete' onClick={(event) => console.log(event)}/>
    </>
  );
};