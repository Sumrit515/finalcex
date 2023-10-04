import React, { useState } from "react";
import { GrUserSettings } from "react-icons/gr";
import Modal from "../modals/Modal";
import { useTheme } from "next-themes";
import { BsFillMoonFill, BsSun } from "react-icons/bs";
import { AiTwotoneCheckCircle } from "react-icons/ai";

const GlobalSetting = () => {
  const { theme, setTheme } = useTheme();
  const [isModalOpen, setShowModalOpen] = useState<boolean>(false);
  const [changeTheme, setChangeTheme] = useState<boolean>(false);
  return (
    <div>
      <div
        className="
      p-1
      rounded-lg
      hover:bg-purple-400"
      >
        <GrUserSettings
          className="
        hover:cursor-pointer
        "
          onClick={() => setShowModalOpen((value) => !value)}
          size={20}
        />
        {isModalOpen && (
          <div
            className="

text-[14px]
text-black
z-21
relative


"
          >
            <div
              className="
  bg-white
  mt-5
  p-2
  flex 
flex-col
hover:cursor-pointer
gap-4
  rounded-xl
  border-2
border-purple-500
   absolute
  top-0 right-0
  h-100
  w-[50vh]
  "
            >
              <div
                className="
    flex
    flex-row
w-full
justify-between
items-center
p-1
rounded-lg

hover:bg-slate-200
    "
              >
                <div>Theme</div>
                <div
                  onClick={() => {
                    setChangeTheme((value) => !value);
                    setTheme(changeTheme ? "light" : "dark");
                  }}
                  className="
                  hover:cursor-pointer
border-2
rounded-full
border-black
p-2

"
                >
                  <div
                    className="
  flex
  flex-row gap-2
  relative
  "
                  >
                    <BsSun
                      className="
 
    "
                      size={12}
                    />
                    <div
                      className="
    
    "
                    >
                      <AiTwotoneCheckCircle
                        size={26}
                        className={`
    
  
      ${changeTheme ? "-translate-x-6" : "-translate-x-1"}
      transition
    -top-2
      duration-150
      absolute
      `}
                        color={changeTheme ? "black" : "black"}
                      />
                    </div>

                    <BsFillMoonFill color="black" size={12} />
                  </div>
                </div>
              </div>
              <hr />
              <div
                className="
               hover:bg-slate-200
               p-1
               rounded-lg
               "
              >
                Change Language
              </div>
              <hr />
              <div
                className="
               hover:bg-slate-200
               p-1
               rounded-lg
               "
              >
                Change Currency
              </div>
              <hr/>
              <div 
               className="
               hover:bg-slate-200
               p-1
               rounded-lg
               "
              >
                Settings
                </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GlobalSetting;
