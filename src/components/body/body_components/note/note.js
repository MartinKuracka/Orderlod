const Note = (props) => {
    return (
        <div className='bg-header2 ml-5 my-5 italic p-4 rounded-lg text-sm leading-4'>
        <p>Note:</p>
        <p>{props.children}</p>
        </div>
    )
}

export default Note;