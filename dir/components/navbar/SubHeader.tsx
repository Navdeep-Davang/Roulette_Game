import { Volume2 } from "lucide-react";

const SubHeader = () => {
    return (
      <div className="absolute top-0 left-0 w-full bg-gray-800 py-2 flex flex-col items-start gap-2 shadow-lg z-40">
        <div className="flex gap-4 px-4">
          <Volume2 className="w-6 h-6 stroke- icon-custom-orange cursor-pointer" />
          <button className="p-3 bg-custom-orange rounded justify-center items-center transition-color">
            <div className="text-black text-xs font-semibold uppercase leading-tight">
              login
            </div>
          </button>
        </div>
      </div>
    );
  };
  
export default SubHeader;
