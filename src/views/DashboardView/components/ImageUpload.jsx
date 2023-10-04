import React, {useCallback} from 'react'
import {CldUploadWidget} from 'next-cloudinary'
import Image from 'next/image'
import { ImagePlus } from 'lucide-react'

// declare global {
//     var clodinary: any;
// }

// interface ImageUploadProps{
// onChange:(value: string) => void;
// value : string;
// }

const ImageUpload = ({
    onChange, 
    value
}) => {


    const handleUpload = useCallback((result) => {
        onChange(result.info.secure_url);
    }, [onChange])

  return (
    <CldUploadWidget
    onUpload={handleUpload}
    uploadPreset='uj7hpy3k'
    options={{
        maxFiles: 1
    }}
    >
       {({open}) => {
        return(
            <div
            onClick={() => open?.()}
            className='
            relative
            cursor-pointer
            hover:opacity-70
            transition
            border-dashed
            border-2
            p-20
            border-black
            flex
            flex-col
            justify-center
            items-center
            gap-4
            text-black
            '
            >
            <ImagePlus
             size={50}
            />
            <div className='
            font-semibold
            text-lg
            '>
                Click to upload
                </div>
                 {value && (
                    <div className='
                    absolute inset-0
                    w-full
                    h-full
                    '>
                      <Image
                      alt='upload'
                      fill
                      style={{objectFit:"cover"}}
                      src={value}
                      />
                        </div>
                 )}
            </div>
        )
       }}
    </CldUploadWidget>

  )
}

export default ImageUpload