import React from "react";
import { useParams } from "react-router-dom";
import TitleAndVideo from "../../components/TitleAndVideo/TitleAndVideo";
import logo from "../../assets/logo/logo_blanco-re.png";
import Footer from "../../components/Footer/Footer";
import ModalButton from "../../components/ModalButton/ModalButton";
import users from "../../utils"; // Importamos el array de usuarios
import InstagramSection from "../../components/InstagramSection/InstagramSection";

const LandingVsl = () => {
  const { slug } = useParams(); // Obtenemos el slug de la URL
  const user = users.find((user) => user.slug === `${slug}`); // Buscamos el usuario por slug

  if (!user) {
    return <div>Usuario no encontrado</div>; // Manejo de error si no se encuentra el usuario
  }

  const {
    historyPart1,
    historyPart2,
    historyPart3,
    actually,
    historyData,
    calendlyPage,
    historyImages,
    googleSheets,
    wppLink,
    wppNumber,
  } = user;

  const data = {
    historyPart1,
    historyPart2,
    historyPart3,
    actually,
    historyData,
    calendlyPage,
    historyImages,
    googleSheets,
    wppLink,
    wppNumber,
  };

  return (
    <div className="flex flex-wrap justify-center overflow-hidden bg-gray-900 ">
      <div className="bg-gray-900 py-4">
        <div className="w-screen h-14 lg:h-20 flex justify-center items-center border-b-[1px] border-[#062f70]">
          <img className="w-14 lg:w-20" src={logo} alt="logo" />
        </div>
        <div className="px-4 lg:px-14 xl:px-[9rem] pt-2 lg:pt-6">
          <TitleAndVideo video={"wpp"} calendlyPage={calendlyPage} data={data} />
        </div>
        {/* <div className="px-3 lg:px-14 xl:px-[9rem] pt-2 lg:pt-6">
          <InstagramSection  />
        // </div> */}
         
      </div>
      <div className="overflow-hidden lg:overflow-visible bg-gray-900 ">
         <InstagramSection  />
         </div>
      <div className="bg-gray-900 py-4 border-t-[1px] border-[#062f70] pb-32">
        <Footer />
      </div>
      <ModalButton calendlyPage={calendlyPage} dataUser={data} />
    </div>
  );
};

export default LandingVsl;
