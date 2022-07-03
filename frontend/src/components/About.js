import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../pictures/PianoFingeringNumberSystem.png';
import img2 from '../pictures/chords.png';
import img3 from '../pictures/easypianosongs.png';
// import './About.css'
const About = props => {
  return (
    <div className=' container-fluid d-flex justify-content-center m-3 p-3'>
      <div className=" row">
        <div className=" col-md-4">
          <div className="card text-center h-100">
            <div className="overflow">
              <h4 className="pt-3">Piano Fingering Number System</h4>
              <img src={img1} alt='img1' width="350" height={300} className="img1 mt-2" />
            </div>
            <div className=" pt-5">

              <p className="About-text lead fw-normal fst-normal px-3">
                This beginner piano lesson is all about piano fingering. Learn the piano finger numbering system. How are your fingers numbered? Find out.
              </p>
              <a href="https://youtu.be/xEjpHoUg1fE" className="btn btn-primary btn-lg mb-3">Click Here</a>
            </div>
          </div>
        </div>
        <div className=" col-md-4 ">
          <div className="card text-center">
            <div className="overflow">
              <h4 className="pt-3">Piano Chords For Beginners</h4>
              <img src={img2} alt='img2' width="450" height={300} className="img2 mt-2" />
            </div>
            <div className=" pt-4">
              <p className="mt-4 lead fw-normal fst-normal px-3">A chord is created when more than one note is played at once, and contains two or more individual notes. On the piano, this means you push down more than one key at the same time.
              </p>
              <a href="https://www.schoolofrock.com/resources/keyboard/piano-chords-for-beginners" className=" mb-3 btn btn-primary btn-lg">Click Here</a>
            </div>
          </div>
        </div>
        <div className=" col-md-4 ">
          <div className="card text-center h-100 me-4">
            <div className="overflow">
              <h4 className="pt-3 ">Easy Piano Songs for Beginners</h4>
              <img src={img3} alt='img3' width="350" height={300} className="img3 mt-2" />
            </div>
            <div className="pt-5">

              <p className="About-text lead fw-normal fst-normal px-3">If you’re just venturing into the world of playing the piano, you might be wondering what the best easy piano songs are to get you started.</p>
              <a href="https://youtu.be/3awdYvj-nhc" className="btn btn-primary btn-lg mb-3">Click Here</a>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}


export default About