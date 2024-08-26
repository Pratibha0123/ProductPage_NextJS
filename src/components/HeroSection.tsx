"use client";
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; 
import img1 from '../../public/Image/img2.png';
import img2 from '../../public/Image/img1.png';
import YourSizeModal from './YourSizeModal';
import styles from './HeroPage.module.css';
import Link from 'next/link'; 

function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter(); 

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add(styles.modalOpen); 
    } else {
      document.body.classList.remove(styles.modalOpen); 
    }

    return () => {
      document.body.classList.remove(styles.modalOpen);
    };
  }, [isModalOpen]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleEditProfileClick = () => {
    router.push('/edit-Profile'); 
  };

  return (
    <div>
      <div className={`${styles.container} ${isModalOpen ? styles.containerBlur : ''}`}>
        <div className={styles.containerLeft}>
          <Image src={img1} alt="Image 1" />
          <Image src={img2} alt="Image 2" />
        </div>
        <div className={styles.containerRight}>
          <div className={styles.left}>
            <h1>Cotton Checked Shirt-White & Navy</h1>
            <Link href="/editProfile">
              <span className={styles.editButton} onClick={handleEditProfileClick}>
                Edit size
              </span>
            </Link>
          </div>
          <div className={styles.cont}>
            <div className={styles.contLeft}>
              <h3>Rs. 2,890.00</h3>
              <h4>Incl. of all taxes</h4>
            </div>
            <div className={styles.contRight}>
              <h4>Ships in 8 Days</h4>
            </div>
            <hr />
          </div>
          <div className={styles.button}>
            <button onClick={handleOpenModal}>Select size</button>
          </div>
        </div>
      </div>
      <YourSizeModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default HeroSection;
