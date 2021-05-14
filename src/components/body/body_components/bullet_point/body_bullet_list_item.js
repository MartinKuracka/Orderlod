const Bullet = (props) => {
    return (
        <div className='flex ml-10'>
            <p className='text-xl'>•</p>
            <p className='ml-3 self-center'>{props.children}</p>
        </div>
    )
}

export default Bullet;