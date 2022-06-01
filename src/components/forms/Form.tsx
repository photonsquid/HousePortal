import React from 'react';

export declare interface JsonCategory {
  name: string,
  tabs: {
    name: string,
    url: string,
    icon: JSX.Element,
    fields: Field[]
  }[],
}

export enum FieldType {
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

export declare interface Field {
  /** The name displayed in the form. */
  name: string,
  /** The id of the field: must be unique. */
  id: string,
  /** The field type. */
  type: FieldType,
  /** The default value of the field. */
  default: string | number | boolean | File | Date | Field,
  /** Field editability. */
  editable?: boolean,
  /** Field visibility. */
  visible?: boolean,
  /** Field options (required for select and radio fields). */
  options?: {
    [key: string]: string
  },
  /** Field description, will be displayed on mouse hover. */
  description?: string,
  fieldAction?: FieldActions
}

export declare interface FormProps {
  title: string,
  formData: Field[],
  fieldActions: FieldActions
}

export declare interface FieldActions {
  get: (id: string) => Promise<string>,
  set: (id: string, value: string) => void,
}

export default function Form({ title, formData, fieldActions: formActions }: FormProps) {
  // retrieve the form data from the storage
  const fetchedFormData = formData.map((field) => ({
    ...field,
    value: formActions.get(field.id),
  }));

  return (
    <div className="form">
      <h2>{title}</h2>
      <div className="form-content">
        {Object.entries(fetchedFormData).map(([key, value]) => (
          <div className="form-field" key={key}>
            <label htmlFor={key}>{value.name}</label>
            <div className="form-field-content">
              {value.type === FieldType.Text && (
                <input
                  type="text"
                  id={key}
                  defaultValue={value.default as string}
                  disabled={!value.editable}
                />
              )}
              {value.type === FieldType.Password && (
                <input
                  type="password"
                  id={key}
                  defaultValue={value.default as string}
                  disabled={!value.editable}
                />
              )}
              {value.type === FieldType.Number && (
                <input
                  type="number"
                  id={key}
                  defaultValue={value.default as number}
                  disabled={!value.editable}
                />
              )}
              {value.type === FieldType.Checkbox && (
                <input
                  type="checkbox"
                  id={key}
                  checked={value.default as boolean}
                  disabled={!value.editable}
                />
              )}
              {value.type === FieldType.Select && value.options && (
                <select
                  id={key}
                  defaultValue={value.default as string}
                  disabled={!value.editable}
                >
                  {Object.entries(value.options).map(([optionsKey, optionsValue]) => (
                    <option key={optionsKey} defaultValue={optionsKey}>
                      {optionsValue}
                    </option>
                  ))}
                </select>
              )}
              {value.type === FieldType.Radio && value.options && (
                <div className="radio-group">
                  {Object.entries(value.options).map(([optionsKey, optionsValue]) => (
                    <div className="radio-option" key={optionsKey}>
                      <input
                        type="radio"
                        id={optionsKey}
                        name={value.name}
                        defaultChecked={optionsKey === value.default}
                      />
                      <label htmlFor={optionsKey}>{optionsValue}</label>
                    </div>
                  ))}
                </div>
              )}
              {value.type === FieldType.Textarea && (
                <textarea
                  id={key}
                  defaultValue={value.default as string}
                  disabled={!value.editable}
                />
              )}
              {value.type === FieldType.Date && (
                <input
                  type="date"
                  id={key}
                  defaultValue={value.default as string}
                  disabled={!value.editable}
                />
              )}
              {value.type === FieldType.Time && (
                <input
                  type="time"
                  id={key}
                  defaultValue={value.default as string}
                  disabled={!value.editable}
                />
              )}
              {value.type === FieldType.DateTime && (
                <input
                  type="datetime"
                  id={key}
                  defaultValue={value.default as string}
                  disabled={!value.editable}
                />
              )}
              {value.type === FieldType.Hidden && (
                <input
                  type="hidden"
                  id={key}
                  defaultValue={value.default as string}
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
