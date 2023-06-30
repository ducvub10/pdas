function ProfileCard({title, handle,imgSrc,content}){ //props names have to be the same as declared in the app component and vice versa
    // const title = props.title;
    // const handle = props.handle;
    return (
        
        <div className='card'>
            <div className='card-image'>
                <figure className='image is-1by1'>
                    <img src={imgSrc} alt = 'pda logo' />

                </figure>
            </div>

            <div className='card-content'>
                <div className='media-content'>
                <p className="title is-4">{title}</p>
                <p className="subtitle is-6">{handle}</p>
            </div>
            <div className='content'>
                {content}
            </div>
            </div>
        </div>
    )
}
export default ProfileCard