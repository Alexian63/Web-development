import React from 'react';
import "../styles/polices.css" ;

interface InputFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  width: string; // Paramètre pour la largeur
  height : string;
  type : string;
  
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  mode='text',
  name,
  value,
  onChange,
  required,
  width,
  height,
  type,
}) => {
  return (
    <div className="form-group" style={{ width}}>
      <label className = "raleway" htmlFor={name}>{label}</label>
      <input
        className='nunito'
        type={mode}
        height={height}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default InputField;
