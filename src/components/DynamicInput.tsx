/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

export enum LabelContentLevel {
  INFO,
  WARNING,
  ERROR,
}
export declare interface DynamicInputProps
extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  level: LabelContentLevel,
  message: string
}

// unused
export default function DynamicInput({ level, message, ...other }: DynamicInputProps): JSX.Element {
  return (
    <div className="dynamic-input-wrapper">
      <div className={`dynamic-input-label ${level}`}>
        {message}
      </div>
      <input
        {...other}
      />
    </div>
  );
}
