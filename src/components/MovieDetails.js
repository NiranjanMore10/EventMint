import React from 'react'
import './MovieDetails.css'
import home from './home.svg'
import event from './event.png'
import marketplace from './ethereum.png'
import profile from './profile.png'


const MovieDetails = () => {
    return (

        <main className='bg-[url(https://images.yourstory.com/cs/1/eb1786d0-a7a9-11e9-b510-6f7c0abb0d14/audience-band-celebration-22634361567750376859.jpg?fm=png&auto=format)]  h-https://images.yourstory.com/cs/1/eb1786d0-a7a9-11e9-b510-6f7c0abb0d14/audience-band-celebration-22634361567750376859.jpg?fm=png&auto=format    h-max '>
<nav className='main bg-black bg-opacity-55  '>
            <div className='Title'>
                <h2>EventMint</h2>
            </div>
            <div className='menu space-x-20'>
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

<main className='bg-black bg-opacity-55'>
            <div className='heading'>
                <h1 className='title'>Animal</h1>
            </div>
            <div className='menu'>
                <img className='poster w-[50%]' src='https://www.bollywoodhungama.com/wp-content/uploads/2019/09/Animal-cover-image2.jpg' />
                <div className='overview'>
                    <h2>Overview:</h2>
                    <h3>A father, who is often away due to work, is unable to comprehend the intensity of his son's fervent love and admiration, which creates conflict between both of them.</h3>
                </div>

            </div>
              <div className=' ml-24'><button className='bg-gray-600 text-white pr-40 m-auto text-balance '><p className='size-40 text-center pt-2'>Book Tickets</p></button></div>
            <div className='genre'>
                <button>Suspense</button>
                <button>Horroe</button>
                <button>Thriller</button>
            </div>

            <div className='info'>
                <p><strong>Writers :</strong> Suresh Bandaru &middot; Saurabh Gupta &middot; Pranay Reddy Vanga</p>
                <p><strong>Director :</strong>Sandip Reddy Vanga</p>
                <p><strong>Stars :</strong> Ranbir Kapoor &middot; Anil Kapoor &middot; Bobby Deol</p>
            </div>
            <div className='cast'>
                <h2 className='cast-title'><strong>Cast</strong></h2>
                <ul className='cast-info'>
                    <li>
                        <a href='google.com/Ranbir-Kapoor'>
                            <img className='cast-image' src='https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/ranbir-kapoor-2817-1691565170.jpg' />
                            <h2 className='name'> Ranbir Kapoor </h2>
                        </a>
                    </li>
                    <li>
                        <a href='google.com/Rashmika-Mandhana'>
                            <img className='cast-image' src='https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/rashmika-mandanna-1076783-28-12-2016-12-20-39.jpg' />
                            <h2 className='name'>Rashmika Mandhana</h2>
                        </a>
                    </li>
                    <li>
                        <a href='google.com/Anil-Kapoor'>
                            <img className='cast-image' src='https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/anil-kapoor-176-12-09-2017-07-42-36.jpg' />
                            <h2 className='name'>Anil Kapoor</h2>
                        </a>
                    </li>
                </ul>
            </div>
</main>
        </main>


    )
}

export default MovieDetails