import React from 'react'
import './MovieDetails.css'
import home from './home.svg'
import event from './event.png'
import marketplace from './ethereum.png'
import profile from './profile.png'
import './navbar.css'

const Comingsoon = () => {
    return (


        <main className='bg-[url(https://images.yourstory.com/cs/1/eb1786d0-a7a9-11e9-b510-6f7c0abb0d14/audience-band-celebration-22634361567750376859.jpg?fm=png&auto=format)]  h-https://images.yourstory.com/cs/1/eb1786d0-a7a9-11e9-b510-6f7c0abb0d14/audience-band-celebration-22634361567750376859.jpg?fm=png&auto=format    h-max '>
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
        <main className=' bg-black bg-opacity-40'>
        <div>
            <div className='heading  '>
                <h1 className='title'>The Communion Girl</h1>
           
            </div>
            <div className='menu'>
                <img className='poster w-[60%]' src='https://i.ytimg.com/vi/CDNQFJuR3hE/maxresdefault.jpg ' c />
                <div className='overview'>
                    <h2>Overview:</h2>
                    <h3>May, 1987. While returning from a nightclub and after having taken drugs, new girl in town Sara and her friend Rebe find a doll wearing a communion dress. From that moment, their lives will become a living hell..</h3>
                </div>

            </div>
            <div className=' ml-24'><button className='bg-gray-600 text-white pr-40 m-auto text-balance '><p className='size-40 text-center pt-2'>I am interested</p></button></div>
            <div className='genre'>
                <button>Suspense</button>
                <button>Horroe</button>
                <button>Thriller</button>
            </div>

            <div className='info'>
                <p><strong>Writers :</strong> Guillem Clua &middot; Víctor Garcia &middot; Alberto Marini</p>
                <p><strong>Director :</strong>Víctor Garcia</p>
                <p><strong>Stars :</strong> Marc Soler &middot; Aina Quiñones&middot; Carla Campra</p>
            </div>
            <div className='cast'>
                <h2 className='cast-title'><strong>Cast</strong></h2>
                <ul className='cast-info'>
                    <li>
                        <a href='google.com/Ranbir-Kapoor'>
                            <img className='cast-image' src='https://tse4.mm.bing.net/th?id=OIP.iH8C_eufqTn-2ZCO2JHmgQHaLH&pid=Api&P=0&h=180' />
                            <h2 className='name'>Marc Soler </h2>
                        </a>
                    </li>
                    <li>
                        <a href='google.com/Rashmika-Mandhana'>
                            <img className='cast-image' src='https://tse4.mm.bing.net/th?id=OIP.Qnm6Nbhtl3XRbJQDxrlL1QHaLB&pid=Api&P=0&h=180' />
                            <h2 className='name'>Carla Campra</h2>
                        </a>
                    </li>
                    <li>
                        <a href='google.com/Anil-Kapoor'>
                            <img className='cast-image' src='https://br.web.img3.acsta.net/c_310_420/pictures/23/03/22/19/12/0869837.png' />
                            <h2 className='name'>Aina Quiñones</h2>
                        </a>
                    </li>
                </ul>
            </div></div>
</main>
        </main>


    )
}

export default Comingsoon