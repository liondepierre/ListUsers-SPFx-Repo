import * as React from 'react';
import styles from './ListUsers.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';

export interface IListUsersProps {
  description: string;
  isDarkTheme: boolean;
  environmentMessage: string;
  hasTeamsContext: boolean;
  userDisplayName: string;
}


export default class ListUsers extends React.Component<IListUsersProps, {}> {
  public render(): React.ReactElement<IListUsersProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName
    } = this.props;

    return (
     <div>
      Hello World
     </div>
    );
  }
}
