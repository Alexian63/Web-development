import React from 'react';
import "../styles/polices.css" ;

interface SelectFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  required?: boolean;
  width: string; // Paramètre pour la largeur
}

const SelectField: React.FC<SelectFieldProps> = ({
  label,
  name,
  value,
  onChange,
  options,
  required,
  width,
}) => {
  return (
    <div className="form-group" style={{ width }}>
      <label className = "raleway" htmlFor={name}>{label}</label>
      <select
        className='nunito'
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      >
        <option value="">Select...</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
