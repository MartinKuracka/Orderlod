const H2 = (props) => {
    return (
        <>
        <div className='flex h-14 mt-4'>
        <div className='h-full w-2 bg-yellow-500 '></div>
        {/* <div className='h-full w-1 bg-gray-800'></div> */}
        <h2 className='text-black h-full text-2xl font-bold w-full bg-header pl-3 py-3'>{props.children}</h2>
        </div>
        <div className='w-full h-1 bg-gradient-to-r from-white  to-black mb-4'></div>
        </>
    )
}

export default H2;