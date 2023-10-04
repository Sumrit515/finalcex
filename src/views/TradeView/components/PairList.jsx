import React from 'react'

import ScreenerTable from '@/views/ScreenerTable'

const PairList = () => {


  const data = [
    {
        id: "1",
        label: "asdadsa",
        createdAt: 'saddadsa',
        price: "24",
        change: '+5',
        volume: '5454'
    }, 
    {
        id: "2",
        label: "asdadsa",
        createdAt: 'saddadsa',
        price: '56',
        change: '-9',
        volume: '46545'
    },
    {
        id: "2",
        label: "asdadsa",
        createdAt: 'saddadsa',
        price: '56',
        change: '-9',
        volume: '46545'
    },
    {
        id: "2",
        label: "asdadsa",
        createdAt: 'saddadsa',
        price: '56',
        change: '-9',
        volume: '46545'
    },
    {
        id: "2",
        label: "asdadsa",
        createdAt: 'saddadsa',
        price: '56',
        change: '-9',
        volume: '46545'
    },
    {
        id: "2",
        label: "asdadsa",
        createdAt: 'saddadsa',
        price: '56',
        change: '-9',
        volume: '46545'
    },
    {
        id: "2",
        label: "asdadsa",
        createdAt: 'saddadsa',
        price: '56',
        change: '-9',
        volume: '46545'
    },
    {
        id: "2",
        label: "asdadsa",
        createdAt: 'saddadsa',
        price: '56',
        change: '-9',
        volume: '46545'
    },
    {
        id: "2",
        label: "asdadsa",
        createdAt: 'saddadsa',
        price: '56',
        change: '-9',
        volume: '46545'
    },
    {
        id: "2",
        label: "asdadsa",
        createdAt: 'saddadsa',
        price: '56',
        change: '-9',
        volume: '46545'
    },
    {
        id: "2",
        label: "asdadsa",
        createdAt: 'saddadsa',
        price: '56',
        change: '-9',
        volume: '46545'
    },
    {
        id: "2",
        label: "asdadsa",
        createdAt: 'saddadsa',
        price: '56',
        change: '-9',
        volume: '46545'
    },
]

  return (
    <div className='
    flex
    pt-6
    
    flex-col
  
    text-sm
    md:text-[16px]
    
    items-center
    justify-center
    '>

    <ScreenerTable
    isCaption={false}
    isFull={false}
    />
{/* <DataTable
     columns={columns}
     data={data}
     searchKey='label'
     pagination={false}
    
     /> */}
        {/* <div className='
        flex
        flex-row
bg-slate-100
        justify-between
        w-full
      px-2
      rounded-lg
        items-center
       
        '>
            <AiOutlineSearch/>
<input
className='
p-1
w-full
input focus:outline-none
bg-slate-100
rounded-lg
border-none
'
type='text'
placeholder='Search'
/> 

        </div>
        <div className='
        w-full
        pt-2
        '>
        <PairListTable/>
            </div> */}
        
        {/* <div className='
        grid
        grid-cols-3
        '>
            <div>
                Pair
            </div>
            <div>
Price
            </div>
            <div>
Change
            </div>

        </div> */}
    </div>
  )
}

export default PairList