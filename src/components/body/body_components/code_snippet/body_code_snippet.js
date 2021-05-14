const Code = (props) => {
    return (
        <div className='w-full rounded-2xl p-5 my-5 bg-snippet'>
            <img className='rounded-2xl' src={props.children} alt='code snippet'/>
        </div>
    )
}

export default Code;