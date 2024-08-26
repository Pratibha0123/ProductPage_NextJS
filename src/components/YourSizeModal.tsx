"use client"
import { useState, useEffect } from 'react';
import router, { useRouter } from 'next/router';
import Image, { StaticImageData } from 'next/image';
import Athletic from '../../public/Image/Athletic.jpg'; 
import Slight_Belly from '../../public/Image/Slight Belly.jpg';
import Significant_Belly from '../../public/Image/Significant Belly.jpg';
import Flat from '../../public/Image/Flat.jpg';
import Standard from '../../public/Image/Standard.jpg';
import Heavy from '../../public/Image/Heavy.jpg';
import Average from '../../public/Image/Average.jpg';
import Sloping from '../../public/Image/Sloping.jpg';
import Super_Slim from '../../public/Image/Super_Slim.jpg';
import Structured from '../../public/Image/Structured.jpg';
import Relaxed from '../../public/Image/Relaxed.jpg';
import styles from './YourSizeModal.module.css';

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

interface YourSizeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: Answers) => void;
  initialData?: Answers;
}

interface Answers {
  upperBodyShape: string;
  lowerBodyShape: string;
  height: string;
  shirtSize: string;
  shoulderType: string;
  preferredFitType: string;
}

const OptionGroup: React.FC<OptionGroupProps> = ({ options, selectedOption, onOptionSelect, id }) => (
  <div id={id} className={styles.optionGroup}>
    {options.map(option => (
      <div
        key={option.value}
        className={`${styles.option} ${selectedOption === option.value ? styles.selected : ''}`}
        onClick={() => onOptionSelect(option.value)}
      >
        <Image src={option.imgSrc} alt={option.label} />
        <span>{option.label}</span>
      </div>
    ))}
  </div>
);

const YourSizeModal: React.FC<YourSizeModalProps> = ({ isOpen, onClose, onSave, initialData }) => {
  const [answers, setAnswers] = useState<Answers>({
    upperBodyShape: '',
    lowerBodyShape: '',
    height: '',
    shirtSize: '',
    shoulderType: '',
    preferredFitType: ''
  });

  // const router = useRouter();

  useEffect(() => {
    if (initialData) {
      setAnswers(initialData);
    }
  }, [initialData]);

  const handleAnswerChange = (question: keyof Answers, value: string) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [question]: value
    }));
  };

  const answeredQuestions = Object.values(answers).filter(answer => answer !== '').length;
  const totalQuestions = Object.keys(answers).length;
  const progressPercentage = Math.round((answeredQuestions / totalQuestions) * 100);
  const allQuestionsAnswered = answeredQuestions === totalQuestions;

  if (!isOpen) return null;

  const handleCalculateSizeClick = () => {
    onSave(answers); 
    router.push('/EditProfilePage'); 
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>X</button>
        <h1 className={styles.p}>Your Size</h1>
        <p className={styles.p}>We guarantee the fit you need.</p>
        <p className={styles.p}>94% of our customers love their fit the first time.</p>
        <div className={styles.progressBar}>
          <div className={styles.progressBarFill} style={{ width: `${progressPercentage}%` }}></div>
        </div>
        <p>{progressPercentage}% Complete</p>
        <form>
          <p>Question {answeredQuestions} of {totalQuestions}</p>

          <p className={styles.heading}>Select Upper Body Shape :</p>
          <OptionGroup
            options={[
              { value: 'Athletic', imgSrc: Athletic, label: 'Athletic' },
              { value: 'Slight Belly', imgSrc: Slight_Belly, label: 'Slight Belly' },
              { value: 'Significant Belly', imgSrc: Significant_Belly, label: 'Significant Belly' }
            ]}
            selectedOption={answers.upperBodyShape}
            onOptionSelect={(value) => handleAnswerChange('upperBodyShape', value)}
            id="upper-body-shape"
          />

          <p className={styles.heading}>Select Lower Body Shape:</p>
          <OptionGroup
            options={[
              { value: 'Flat', imgSrc: Flat, label: 'Flat' },
              { value: 'Standard', imgSrc: Standard, label: 'Standard' },
              { value: 'Heavy', imgSrc: Heavy, label: 'Heavy' }
            ]}
            selectedOption={answers.lowerBodyShape}
            onOptionSelect={(value) => handleAnswerChange('lowerBodyShape', value)}
            id="lower-body-shape"
          />

          <p className={styles.heading}>Select Height :</p>
          <div id="height" className={styles.height}>
            {['5\'1', '5\'2', '5\'3', '5\'4', '5\'5', '5\'6', '5\'7', '5\'8', '5\'9', '5\'10', '5\'11', '6\'1', '6\'2', '6\'3', '6\'4', '6\'5', '6\'6'].map(height => (
              <button
                key={height}
                type="button"
                onClick={() => handleAnswerChange('height', height)}
                className={answers.height === height ? styles.selected : ''}
              >
                {height}
              </button>
            ))}
          </div>

          <p className={styles.heading}>Select Shirt Size :</p>
          <div id="shirt-size" className={styles.shirt}>
            {['36', '38', '40', '42', '44'].map(size => (
              <button
                key={size}
                type="button"
                onClick={() => handleAnswerChange('shirtSize', size)}
                className={answers.shirtSize === size ? styles.selected : ''}
              >
                {size}
              </button>
            ))}
          </div>

          <p className={styles.heading}>Select Shoulder Type :</p>
          <OptionGroup
            options={[
              { value: 'Average', imgSrc: Average, label: 'Average' },
              { value: 'Sloping', imgSrc: Sloping, label: 'Sloping' }
            ]}
            selectedOption={answers.shoulderType}
            onOptionSelect={(value) => handleAnswerChange('shoulderType', value)}
            id="shoulder-type"
          />

          <p className={styles.heading}>Select Preferred Fit Type :</p>
          <OptionGroup
            options={[
              { value: 'Super Slim', imgSrc: Super_Slim, label: 'Super Slim' },
              { value: 'Structured', imgSrc: Structured, label: 'Structured' },
              { value: 'Relaxed', imgSrc: Relaxed, label: 'Relaxed' }
            ]}
            selectedOption={answers.preferredFitType}
            onOptionSelect={(value) => handleAnswerChange('preferredFitType', value)}
            id="preferred-fit-type"
          />
        </form>
        <div className={styles.button}>
          <button 
            className={`${styles.btn} ${allQuestionsAnswered ? styles.active : ''}`} 
            disabled={!allQuestionsAnswered}
            onClick={handleCalculateSizeClick}
          >
            Calculate Size
          </button>
        </div>
      </div>
    </div>
  );
};

export default YourSizeModal;





