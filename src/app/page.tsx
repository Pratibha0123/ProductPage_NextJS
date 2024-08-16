// import EditProfilePage from "@/components/EditProfilePage";
import HeroSection from "@/components/HeroSection";
import ProductCenter from "@/components/ProductCenter";
import ProductDescription from "@/components/ProductDescription";
// import YourSizeModal from "@/components/YourSizeModal";




export default function Home() {
  return (
    <main className="min-h-screen antialiased bg-grid-white">   
   {/* <EditProfilePage/> */}
   <HeroSection/> 
    <ProductCenter/>
    <ProductDescription/>  
    {/* <YourSizeModal isOpen={false} onClose={function (): void {
        throw new Error("Function not implemented.");
      } } onSave={function (answers: Record<string, string>): void {
        throw new Error("Function not implemented.");
      } }/> */}
    
     

    </main>
  );
}
