import React from "react";
import Sliderss from "./data";
import "./navbar.css"
import home from './home.svg'
import event from './event.png'
import marketplace from './ethereum.png'
import profile from './profile.png'




const EventsPage = () => {
    let slides = ["https://i0.wp.com/filmyhype.com/wp-content/uploads/2021/03/animal-movie-release-date.jpg?w=1280&ssl=1",
        'https://bingeddata.s3.amazonaws.com/uploads/2022/05/Salaar-Poster-Teases-Prabhas-Kicking-Some-High-Octane-Action.jpg',
        'https://i.ytimg.com/vi/Kwmid4Ud1ao/maxresdefault.jpg'
    ]
    let sports = [
        'https://img00.deviantart.net/9bf0/i/2016/337/d/3/fc_barcelona_vs_real_madrid_wallpaper_2016_17__by_chakib_design-daqdy5f.png'
        , 'https://www.indiantvinfo.com/media/2022/08/India-Vs-Pakistan-Live-Asia-Cup-2022.jpg',
        'https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_1316/https://media.insider.in/image/upload/c_crop%2Cg_custom/v1582015199/chi9bblu4ejximkw8xhi.jpg'

    ]
    let concerts = [
        'https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2022/12/30232004/arijit-singh.jpeg',
        'https://graphicsfamily.com/wp-content/uploads/edd/2021/07/Music-Concert-Event-Ticket-Design-1536x864.jpg',
        'https://s1.ticketm.net/dam/a/7d5/97b67038-f926-4676-be88-ebf94cb5c7d5_1802151_TABLET_LANDSCAPE_LARGE_16_9.jpg'
    ]

    let comingsoon=['https://i.ytimg.com/vi/CDNQFJuR3hE/maxresdefault.jpg',
]







    return (<main className='bg-[url(https://images.yourstory.com/cs/1/eb1786d0-a7a9-11e9-b510-6f7c0abb0d14/audience-band-celebration-22634361567750376859.jpg?fm=png&auto=format)]  h-https://images.yourstory.com/cs/1/eb1786d0-a7a9-11e9-b510-6f7c0abb0d14/audience-band-celebration-22634361567750376859.jpg?fm=png&auto=format    h-max '>
        <nav className='main bg-black bg-opacity-55  '>
            <div className='Title'>
                <h2>EventMint</h2>
            </div>
            <div className='menu'>
                <ul>

                    <li>
                        <a href='#' className='home'>
                            <img className='home-icon' src={home} /> Home
                        </a>
                    </li>
                    <li>
                        <a href='#' className='event'>
                            <img className='event-icon' src={event} /> Events
                        </a>
                    </li>
                    <li>
                        <a href='#' className='marketplace'>
                            <img className='marketplace-icon' src={marketplace} />Marketplace
                        </a>
                    </li>
                </ul>
            </div>
            <div className='profile'>
                <ul>
                    <li>
                        <a href='#' className='profile-main'>
                            <img className='profile-icon' src={profile} /> Profile
                        </a>
                    </li>
                </ul>

            </div>


        </nav>

        <div className=" bg-black bg-opacity-15 ">
            <div className=" pt-20 pl-52  ">
                <b className="text-center pl-4 pr-4 pt-4 pb-4 rounded-full font-bold text-white bg-black border-white border-solid border-2 ">Featured Events</b>
            </div>
            <div className="pt-16 box-border m-auto  w-[90%]  size   flex space-x-4">
                <Sliderss slides={slides}></Sliderss>
                <Sliderss slides={sports}></Sliderss>
                <Sliderss slides={concerts}></Sliderss>
            </div>


        </div>

        <div className=" bg-black bg-opacity-15 h-screen">
            <div className=" pt-24  pl-52   ">
                <b className="text-center  pl-4 pr-8 pt-4 pb-4 rounded-full font-bold text-white bg-black border-white border-solid border-2 ">Coming Soon</b>
            </div>
            <div className="pt-16 box-border m-auto w-[90%] flex space-x-4">
                <Sliderss slides={comingsoon}></Sliderss>
                <Sliderss slides={comingsoon}></Sliderss>
                <Sliderss slides={comingsoon}></Sliderss>
            </div>


        </div>
        <div className='bg-black h-40 bg-opacity-55  ' >
            <p className='text-left pl-9 text-xl font-medium text-white'>Contact Us :</p>
            <p className=' my-1 text-left pl-9 text-xs font-medium text-white'><p className='font-semibold text-base'>Tele No.: </p>XXXXXXXXX</p>
            <p className=' my-1 text-left pl-9 text-xs font-medium text-white'><p className='font-semibold text-base'>Email :</p>eventmint2023@gmail.com</p>
        </div>



    </main>


    )
}

export default EventsPage