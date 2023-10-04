import { useRouter } from "next/navigation";
import {GoTriangleUp} from 'react-icons/go'
import {RxTriangleDown} from 'react-icons/rx'

// interface CategoriesProps{
//     title: string;
//     link: string;
// }

const Categories = ({
    title, 
    link
}) => {
const router = useRouter()

    return(
        <div
        onClick={() => {
           
            router.push(link)
        
        }} 
        className="
        hover:cursor-pointer
        hover:drop-shadow-lg
        hover:underline
        ">
            <div
            className="
            flex
            flex-row
            items-center
           
            "
            >
                <div 
                 className="
                 pr-2
                peer
                 "
                >
                {title} 
                </div>
                <div
                className="
              
                peer-hover:rotate-180
                
                "
                >
                    <GoTriangleUp/>
                </div>
            
            <div>

            </div>
            </div>
            
        </div>
    )
}

export default Categories