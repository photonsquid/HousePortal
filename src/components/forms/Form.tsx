import React from 'react';

export declare interface JsonCategory {
  name: string,
  tabs: {
    name: string,
    url: string,
    icon: JSX.Element,
    fields: FormData
  }[],
}

export enum FormElementType {
  Text = 'text',
  Password = 'password',
  Number = 'number',
  Checkbox = 'checkbox',
  Select = 'select',
  Radio = 'radio',
  Textarea = 'textarea',
  Date = 'date',
  Time = 'time',
  DateTime = 'datetime',
  Hidden = 'hidden',
}

export declare interface FormElement {
  name: string,
  type: FormElementType,
  value: string | number | boolean | File | Date | FormData,
  editable?: boolean,
  visible?: boolean,
  options?: {
    [key: string]: string
  },
  description?: string,
}

export declare interface FormData {
  [key: string]: FormElement;
}

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
            <label htmlFor={key}>{value.name}</label>
            <div className="form-field-content">
              {value.type === FormElementType.Text && (
                <input
                  type="text"
                  id={key}
                  value={value.value as string}
                  disabled={!value.editable}
                />
              )}
              {value.type === FormElementType.Password && (
                <input
                  type="password"
                  id={key}
                  value={value.value as string}
                  disabled={!value.editable}
                />
              )}
              {value.type === FormElementType.Number && (
                <input
                  type="number"
                  id={key}
                  value={value.value as number}
                  disabled={!value.editable}
                />
              )}
              {value.type === FormElementType.Checkbox && (
                <input
                  type="checkbox"
                  id={key}
                  checked={value.value as boolean}
                  disabled={!value.editable}
                />
              )}
              {value.type === FormElementType.Select && (
                <select
                  id={key}
                  defaultValue={value.value as string}
                  disabled={!value.editable}
                >
                  {Object.entries(value.options!).map(([optionsKey, optionsValue]) => (
                    <option key={optionsKey} value={optionsKey}>
                      {optionsValue}
                    </option>
                  ))}
                </select>
              )}
              {value.type === FormElementType.Radio && (
                <div className="radio-group">
                  {Object.entries(value.options!).map(([optionsKey, optionsValue]) => (
                    <div className="radio-option" key={optionsKey}>
                      <input
                        type="radio"
                        id={optionsKey}
                        name={optionsKey}
                        value={optionsKey}
                        checked={optionsKey === optionsValue}
                      />
                      <label htmlFor={optionsKey}>{optionsValue}</label>
                    </div>
                  ))}
                </div>
              )}
              {value.type === FormElementType.Textarea && (
                <textarea
                  id={key}
                  value={value.value as string}
                  disabled={!value.editable}
                />
              )}
              {value.type === FormElementType.Date && (
                <input
                  type="date"
                  id={key}
                  value={value.value as string}
                  disabled={!value.editable}
                />
              )}
              {value.type === FormElementType.Time && (
                <input
                  type="time"
                  id={key}
                  value={value.value as string}
                  disabled={!value.editable}
                />
              )}
              {value.type === FormElementType.DateTime && (
                <input
                  type="datetime"
                  id={key}
                  value={value.value as string}
                  disabled={!value.editable}
                />
              )}
              {value.type === FormElementType.Hidden && (
                <input
                  type="hidden"
                  id={key}
                  value={value.value as string}
                  disabled={!value.editable}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
