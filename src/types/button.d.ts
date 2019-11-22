import { CustomPropTypes } from './index';
import * as React from 'react'
import * as Button from '@material-ui/core/Button';
import { ButtonTypeMap } from '@material-ui/core/Button';
import { ExtendButtonBase } from '@material-ui/core/ButtonBase';


declare module '@material-ui/core/Button' {

    export type CustomButtonTypeMap <
    P = {},
    D extends React.ElementType = 'button'
    > = ButtonTypeMap<{
    props: P & {
      color?: PropTypes.Color;
    };
    defaultComponent: D;
  }>;

  declare const Button: ExtendButtonBase<CustomButtonTypeMap>;
}
