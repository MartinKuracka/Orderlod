const H2 = (props) => {
    return (
        <div className='flex h-10 my-4'>
        <div className='h-full w-2 bg-header mr-5'></div>
        <h2 className='text-2xl bg-gradient-to-r from-header2 to-header font-bold w-full pl-3'>{props.children}</h2>
        </div>
    )
}

export default H2;