"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import img1 from '../../public/Image/img2.png';
import img2 from '../../public/Image/img1.png';
import YourSizeModal from './YourSizeModal';
import EditProfilePage from './EditProfilePage';

function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const { id } = router.query || {}; 

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex justify-between items-start bg-[#fcfcfc]">
      <div className="flex flex-col items-center justify-center mr-5">
        <Image src={img1} alt="Image 1" className="mb-2 h-[900px] w-[1000px] cursor-crosshair" />
        <Image src={img2} alt="Image 2" className="mb-2 h-[900px] w-[1000px] cursor-crosshair" />
      </div>

      <div className="flex-1 flex flex-col justify-center gap-5 px-40 py-[13%] leading-tight">
        <div className="flex items-center px-7">
          <h1 className="text-[#1f1c1c] text-2xl font-medium mr-5 flex-1">Cotton Checked Shirt-White & Navy</h1>
          {/* <Link href={EditProfilePage}> */}
            <span className="text-blue-800 text-lg cursor-pointer underline hover:text-blue-700">Edit size</span>
          {/* </Link> */}
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h3 className="text-[#161616] text-lg font-bold mr-4">Rs. 2,890.00</h3>
            <h4 className="text-gray-500 text-base font-normal">Incl. of all taxes</h4>
          </div>
          <div>
            <h4 className="text-gray-500 text-base font-normal">Ships in 8 Days</h4>
          </div>
        </div>
        <hr />
        <div className="inline-block bg-black rounded-[12px] h-[55px] w-full text-white font-bold uppercase tracking-widest relative overflow-hidden z-10">
          <button
            className="w-full h-full hover:text-black focus:outline-none transition-all ease-in-out duration-300"
            onClick={handleOpenModal}
          >
            Select size
          </button>
          {isModalOpen && (

<YourSizeModal isOpen={false} onClose={function (): void {
  throw new Error("Function not implemented.");
} } onSave={function (answers: Record<string, string>): void {
  throw new Error("Function not implemented.");
} }/>
            // <YourSizeModal
            //   onClose={handleCloseModal}  
            //   isOpen={isModalOpen}         
            //   onSave={(answers: Record<string, string>) => {
            //     handleCloseModal();  
            //   }}
            // />
          )}
          <div className="absolute left-0 top-0 w-full h-full bg-black transform scale-x-0 transition-transform duration-[0.5s] ease-[cubic-bezier(0.5,1.6,0.4,0.7)]"></div>
          <div className="absolute left-0 top-0 w-full h-full bg-[#f4f5f0] rounded-[12px] transform scale-x-[0] transition-transform duration-[0.5s] ease-[cubic-bezier(0.86,0,0.07,1)]"></div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;









