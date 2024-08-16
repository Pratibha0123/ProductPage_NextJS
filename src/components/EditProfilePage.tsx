

'use client'; 

import { useState } from 'react';
import { useRouter } from 'next/navigation'; 
import styles from './EditProfilePage.module.css'; 
import Image from 'next/image'; 
// import YourSizeModal from './YourSizeModal'

import img1 from '../../public/Image/img2.png'; 


interface ProfileData {
  upperBodyShape: string;
  lowerBodyShape: string;
  height: string;
  shirtSize: string;
  shoulderType: string;
  preferredFitType: string;
}

const EditProfilePage = () => {
  
  const [profileData, setProfileData] = useState<ProfileData>({
    upperBodyShape: 'Athletic',
    lowerBodyShape: 'Flat',
    height: '5\'10"',
    shirtSize: '38',
    shoulderType: 'Average',
    preferredFitType: 'Structured'
  });

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const router = useRouter(); 

  
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSave = (data: ProfileData) => {
    setProfileData(data);
    handleCloseModal();
  };

  const handleClosePage = () => {
    router.push('/'); 
  };

  return (
    <div className={styles.editProfile}>
      {/* <div className={styles.editProfileLeft}>
      <a href={img1.src}>
            <Image src={img1} alt="Image 1" width={1000} height={400}  />
          </a>
      </div> */}

      <div className={styles.editProfileRight}>
        
        <div className={styles.profile}> 
        <div>
            <h4>We guarantee the fit you need</h4>
            <div className={styles.heading}>
              <h4>94% of our customers love their fit the first time.</h4>
              <h4 className={styles.learn}>Learn more</h4>
            </div>
          </div>
          <div className={styles.size}>
            <h2>Your Size</h2>
            <button onClick={handleClosePage}>X</button>
          </div>
          <div className={styles.user}>
            <h4 className={styles.left}>I'm New</h4>
            <h4 className={styles.right}>I've Shopped Before</h4>
          </div>
          <hr/>
          <div className={styles.heading}>
            <h2>Profile</h2>
            <button onClick={handleOpenModal}>Edit</button>
          </div>

          <div className={styles.profileItem}>
            <strong>Upper Body Shape:</strong>
            <p>{profileData.upperBodyShape}</p>
          </div>

          <div className={styles.profileItem}>
            <strong>Lower Body Shape:</strong>
            <p>{profileData.lowerBodyShape}</p>
          </div>

          <div className={styles.profileItem}>
            <strong>Height:</strong>
            <p>{profileData.height}</p>
          </div>

          <div className={styles.heading}>
            <h2>Shirt Sizing</h2>
            <button onClick={handleOpenModal}>Edit</button>
          </div>
          <div className={styles.profileItem}>
            <strong>Shirt Size:</strong>
            <p>{profileData.shirtSize}</p>
          </div>

          <div className={styles.profileItem}>
            <strong>Shoulder Type:</strong>
            <p>{profileData.shoulderType}</p>
          </div>

          <div className={styles.profileItem}>
            <strong>Preferred Fit Type:</strong>
            <p>{profileData.preferredFitType}</p>
          </div>

        
          <div className={styles.button}>
            <button onClick={handleClosePage}>Continue</button>
          </div>
        </div>
        
     {/* <YourSizeModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onSave={handleSave}
          initialData={profileData}
        />  */}
      </div>
    </div>
  );
};

export default EditProfilePage;



// 'use client';
// import { useState } from 'react';
// import { useRouter } from 'next/router';
// import styles from './EditProfilePage.module.css'; 


// interface ProfileData {
//   upperBodyShape: string;
//   lowerBodyShape: string;
//   height: string;
//   shirtSize: string;
//   shoulderType: string;
//   preferredFitType: string;
// }

// const EditProfilePage = () => {
//   const [profileData, setProfileData] = useState<ProfileData>({
//     upperBodyShape: 'Athletic',
//     lowerBodyShape: 'Flat',
//     height: '5\'10"',
//     shirtSize: '38',
//     shoulderType: 'Average',
//     preferredFitType: 'Structured'
//   });

//   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
//   const router = useRouter();

//   const handleOpenModal = () => {
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };

//   const handleSave = (data: ProfileData) => {
//     setProfileData(data);
//     handleCloseModal();
//   };

//   const handleClosePage = () => {
//     router.push('/'); 
//   };

//   return (
//     <div className={styles.editProfile}>
//       <div className={styles.editProfileLeft}>
//         {/* <img src="/path/to/img4.png" alt="Profile Image" /> */}
//       </div>

//       <div className={styles.editProfileRight}>
//         <div className={styles.profile}>
//           <div className={styles.size}>
//             <h2>Your Size</h2>
//             <button onClick={handleClosePage}>X</button>
//           </div>
//           <div className={styles.user}>
//             <h4 className={styles.left}>I am New</h4>
//             <h4 className={styles.right}>I have Shopped Before</h4>
//           </div>
//           <hr/>
//           <div className={styles.heading}>
//             <h2>Profile</h2>
//             <button onClick={handleOpenModal}>Edit</button>
//           </div>

//           <div className={styles.profileItem}>
//             <strong>Upper Body Shape:</strong>
//             <p>{profileData.upperBodyShape}</p>
//           </div>

//           <div className={styles.profileItem}>
//             <strong>Lower Body Shape:</strong>
//             <p>{profileData.lowerBodyShape}</p>
//           </div>

//           <div className={styles.profileItem}>
//             <strong>Height:</strong>
//             <p>{profileData.height}</p>
//           </div>

//           <div className={styles.heading}>
//             <h2>Shirt Sizing</h2>
//             <button onClick={handleOpenModal}>Edit</button>
//           </div>
//           <div className={styles.profileItem}>
//             <strong>Shirt Size:</strong>
//             <p>{profileData.shirtSize}</p>
//           </div>

//           <div className={styles.profileItem}>
//             <strong>Shoulder Type:</strong>
//             <p>{profileData.shoulderType}</p>
//           </div>

//           <div className={styles.profileItem}>
//             <strong>Preferred Fit Type:</strong>
//             <p>{profileData.preferredFitType}</p>
//           </div>

//           <div>
//             <h4>We guarantee the fit you need</h4>
//             <div className={styles.heading}>
//               <h4>94% of our customers love their fit the first time.</h4>
//               <h4 className={styles.learn}>Learn more</h4>
//             </div>
//           </div>
//           <div className={styles.button}>
//             <button onClick={handleClosePage}>Continue</button>
//           </div>
//         </div>
//         {/* <YourSizeModal
//           isOpen={isModalOpen}
//           onClose={handleCloseModal}
//           onSave={handleSave}
//           initialData={profileData}
//         /> */}
//       </div>
//     </div>
//   );
// };

// export default EditProfilePage;
