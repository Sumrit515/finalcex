import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonLoader = () => {

    const [checked, setChecked] = React.useState(false);

    const handleCheckChange = () => {
        setChecked(!checked);
      };
  return (
    <div>
 <Skeleton />
  
    </div>
  )
}

export default SkeletonLoader