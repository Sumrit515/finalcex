import { title } from 'process';
import React from 'react'
import Image from 'next/image';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';



// const ExperienceCard = ({experience} : {  experience:{title: string, company_name: string, icon: string, iconBg: string, date: string, points: string[]}}) => { return(
//     <VerticalTimelineElement
//        contentStyle={{
//         background: "#1d1836",
//         color: '#fff'
//        }}
//        contentArrowStyle={{
//         borderRight: '7px solid #232631'
//        }}
//      //  date={experience}
//        iconStyle={{
//         background: experience.iconBg
//        }}
//     icon={
//       <div className='
//       flex
//       items-center
//       justify-center
//       w-full
//       h-full
//       '>
//         <img
//         src={experience.icon}
//         alt={experience.company_name}
//         className="w-[60%] h-[60%]
//         object-contain
//         "
//         />
//       </div>
//     }
//     >
//         <div>
//              <h3 className='
//              text-white
//              text-[24px]
//              font-bold
//              '>
//               {experience.title}
//              </h3>
//              <p className='
//              text-secondary
//              text-[16px] 
//              font-semibold
//              '
//              style={{
//               margin: 0
//              }}
//              >{experience.company_name}</p>
//         </div>
    
//         <ul className='
//         mt-5 list-disc ml-5 
//         space-y-2
//         '>
//             {experience.points.map((point, index) => (
//               <li key={`experience-point-${index}`}
//               className='text-white-100
//               text-[14px]
//               pl-1
//               tracking-wider
//               '
//               >
//                     {point}
    
//               </li>
//             ))}
//         </ul>
//     </VerticalTimelineElement>
//     )
    
    // }

const NewCard = ({
  title,
  body
}) => {
  return (

    <>

<VerticalTimelineElement
       contentStyle={{
        background: "#1d1836",
        color: '#fff'
       }}
       contentArrowStyle={{
        borderRight: '7px solid #232631'
       }}
     //  date={experience}
    //    iconStyle={{
    //     background: experience.iconBg
    //    }}
    // icon={
    //   <div className='
    //   flex
    //   items-center
    //   justify-center
    //   w-full
    //   h-full
    //   '>
    //     <img
    //     src={experience.icon}
    //     alt={experience.company_name}
    //     className="w-[60%] h-[60%]
    //     object-contain
    //     "
    //     />
    //   </div>
    // }
    >
       
        <div
    className='
    bg-white
    border-black
    border-2
    p-4
    rounded-xl
    text-center
    text-black
    w-[600px]
    h-[460px]
    hover:shadow-xl
    cursor-pointer
    transition
    duration-800
    flex
    flex-col
    justify-between
    overflow-hidden
    items-center
    gap-4
    hover:scale-105
    '
    >
        
        <p>
          <Image
          src={body}
          alt='IMG'
          width={300}
          height={300}
          />
            </p>
            <h1 className='
    font-bold
    text-[30px]
    '>
        {title}
        </h1>       
            </div>
    
        {/* <ul className='
        mt-5 list-disc ml-5 
        space-y-2
        '>
            {experience.points.map((point, index) => (
              <li key={`experience-point-${index}`}
              className='text-white-100
              text-[14px]
              pl-1
              tracking-wider
              '
              >
                    {point}
    
              </li>
            ))}
        </ul> */}
    </VerticalTimelineElement>
  

  
            </>
  )
}

export default NewCard