import Image from 'next/image'; 
import img1 from '../../public/Image/img1.png'; 

const ProductCenter = () => {
  return (
    <div className="flex justify-center items-center bg-whitesmoke">
      <div className="w-full max-w-[580px] h-auto cursor-crosshair">
        <a href={img1.src}>
          <Image src={img1} alt="Product Image" layout="responsive" width={580} height={780}  className="object-cover cursor-crosshair" />
        </a>
      </div>
    </div>
  );
};

export default ProductCenter;
