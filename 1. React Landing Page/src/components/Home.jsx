import React from 'react';
import vg from '../assets/2.webp';
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai";

const Home = () => {
  return (
    <>
    <div className='home' id='home'>
      <main>
        <h1>Moonstar</h1>
        <p>Solution to all your problems</p>
      </main>
    </div>

    <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
            <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children. 
            </p>
        </div>
    </div>

    <div className="home3" id='about'>

        <div>
            <h1>Who we are?</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ad pariatur quam deserunt quas fugit, officia reiciendis vitae unde ab, distinctio voluptatum beatae! Ratione, consequuntur magni magnam, in iusto similique dolorum aut natus ipsa molestiae tempore, dolor labore inventore cumque explicabo distinctio quidem culpa aliquam mollitia repudiandae repellendus maxime fuga aperiam. Sequi recusandae cumque omnis animi iure magnam fugiat sint eos. Laudantium iure ut numquam praesentium consectetur, quos non accusantium tempora quia, tempore, ipsam rem!</p>
        </div>
    </div>

    <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
    </div>
    </>
  )
}

export default Home
