import Image from 'next/image'; 
import img1 from '../../public/Image/img4.png'; 
function ProductDescription() {
  return (
    <div className="flex flex-col md:flex-row justify-between bg-gray-100 p-0 m-0">
      <div className="flex flex-col items-center mb-5 md:mb-0 mr-5">
        <a href={img1.src}>
          <Image src={img1} alt="Image 1" height={550} width={610} className="object-cover cursor-crosshair" />
        </a>
      </div>
      <div className="flex-1 flex flex-col pr-24 leading-relaxed">
        <div className="text-gray-800 text-2xl mb-2">
          <h5>Product Description</h5>
        </div>
        <hr className="border-t-2 border-gray-300 my-2" />
        <div className="text-gray-600 text-lg">
          <p>This checked shirt is one you can wear for a quintessential office look.
             It is made with a lightweight, high-quality 100% cotton fabric.</p>
        </div>
        <div className="flex justify-between text-gray-700 text-sm mt-2">
          <span>Product Type - Custom Made</span>
        </div>
        <div className="mt-2 text-gray-600 text-lg">
          <p>The model is and is wearing a shirt custom-made to his unique size.</p>
        </div>
        <div className="text-gray-800 text-2xl mt-4 mb-2">
          <h5>Design Details</h5>
        </div>
        <hr className="border-t-2 border-gray-300 my-2" />
        <p>Polo Collar | Single Button Cuffs | Regular Placket</p>
        <div className="text-gray-800 text-2xl mt-4 mb-2">
          <h5>Fabric Details</h5>
        </div>
        <hr className="border-t-2 border-gray-300 my-2" />
        <h4 className="text-gray-700 text-base">
          <span>Fabric - 100% cotton</span>
        </h4>
      </div>
    </div>
  
  )
}

export default ProductDescription