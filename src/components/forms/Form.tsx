import React from 'react';
import { FormData } from 'pages/Settings';

export declare interface FormProps {
  title: string,
  formData: FormData,
}

export default function Form({ title, formData }: FormProps) {
  return (
    <div className="form">
      <h2>{title}</h2>
      <div className="form-content">
        {Object.entries(formData).map(([key, value]) => (
          <div className="form-field" key={key}>
            <label htmlFor={key}>{key}</label>
            <input type="text" id={key} defaultValue={value as string} />
          </div>
        ))}
      </div>
    </div>
  );
}
