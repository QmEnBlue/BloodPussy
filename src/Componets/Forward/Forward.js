import './Forward.css';

export default function Forward() {
    return(
        <div className='Forward'>
            <nav className='icon nav_icon_link'>
                <button className='button_link icon_link'>Vk</button>
                <button className='button_link icon_link'>Tw</button>
                <button className='button_link icon_link'>Yo</button>
            </nav>
            <nav className='nav_icon_link'>
                <button className='button_link vk_link'>Message</button>
                <button className='button_link vk_link'>Page</button>
                <button className='button_link vk_link'>Group</button>
            </nav>
        </div>
    )
}