import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../pictures/PianoFingeringNumberSystem.png';
import img2 from '../pictures/chords.png';
import img3 from '../pictures/easypianosongs.png';
const About = props => {
  return (
    <div className='c container-fluid d-flex justify-content-center m-3'>
      <div className=" row">
        <div className=" col-md-4 ">
          <div className="card text-center">
            <div className="overflow">
              <img src={img1} alt='img1' width="350" height={300} className="img1" />
            </div>
            <div className="About-body text-dark">
              <h4 className="About-title">Piano Fingering Number System</h4>
              <p className="About-text text-secondary">
                <h6>This beginner piano lesson is all about piano fingering. Learn the piano finger numbering system. How are your fingers numbered? Find out.</h6>
              </p>
              <a href="https://youtu.be/xEjpHoUg1fE" className="btn btn-success">Click Here</a>
            </div>
          </div>
        </div>


        <div className=" col-md-4 ">
          <div className="card text-center">
            <div className="overflow">
              <img src={img2} alt='img2' width="350" height={300} className="img2" />
            </div>
            <div className="About-body text-dark">
              <h4 className="About-title">Piano Chords For Beginners</h4>
              <p className="About-text text-secondary">
                <h6>A chord is created when more than one note is played at once, and contains two, three, or more individual notes. On the piano, this means you push down more than one key at the same time.</h6>
              </p>
              <a href="https://www.schoolofrock.com/resources/keyboard/piano-chords-for-beginners" className="btn btn-success">Click Here</a>
            </div>
          </div>
        </div>
        <div className=" col-md-4 ">
          <div className="card text-center">
            <div className="overflow">
              <img src={img3} alt='img3' width="350" height={300} className="img3" />
            </div>
            <div className="About-body text-dark">
              <h4 className="About-title">Easy Piano Songs for Beginners</h4>
              <p className="About-text text-secondary">
                <h6>If you’re just venturing into the world of playing the piano, you might be wondering what the best easy piano songs are to get you started. </h6>
              </p>
              <a href="https://youtu.be/3awdYvj-nhc" className="btn btn-success">Click Here</a>
            </div>
          </div>
        </div>

        <div class="footer p-3 position-absolute bottom-0 start-0"></div>
        <div class="card-footer bg-info">

          <h6>For Further Details: Contact us @.........</h6>
        </div>




      </div>
    </div>

  );
}


export default About