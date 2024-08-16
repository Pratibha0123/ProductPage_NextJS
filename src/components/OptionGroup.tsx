import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface Option {
  value: string;
  imgSrc: StaticImageData;
  label: string;
}

interface OptionGroupProps {
  options: Option[];
  selectedOption: string;
  onOptionSelect: (value: string) => void;
  id: string;
}

const OptionGroup: React.FC<OptionGroupProps> = ({ options, selectedOption, onOptionSelect, id }) => (
  <div id={id} className="option-group">
    {options.map(option => (
      <div
        key={option.value}
        className={`option ${selectedOption === option.value ? 'selected' : ''}`}
        onClick={() => onOptionSelect(option.value)}
      >
        <Image src={option.imgSrc} alt={option.label} />
        <span>{option.label}</span>
      </div>
    ))}
  </div>
);

export default OptionGroup;
