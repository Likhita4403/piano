import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import img4 from '../pictures/help.png'
// import './help.css'


function Help() {
  return (
    <div className="body text-center text-white lead ">
      <div className=''>
        <h2 className="display-4 mb-5 mt-0">Learning how to play the piano: The basics in 13 steps</h2>

        <h4 className='mb-3'>Learn how to play piano with us in only 12 steps for free! In our crash course for beginners we teach you (not at all boring).</h4>
        <div className='container '>
          <div className=" row">


            <div className="col-md-7 mt-5 ">
              <img src={img4} alt='img4' width="700" height={400} className="mt-4" />

            </div>


            <div className="col-md-5 mt-4 py-2 ">

              <div className="steps p-5 lead " style={{ fontSize: "1.3rem" }}>
                <ul className='list-unstyled d-flex flex-column align-items-start'>
                  <li>Step 1: Get to know the keyboard with notes</li>
                  <li>Step 2: Half steps on the keyboard</li>
                  <li>Step 3: Learning note values on the piano</li>
                  <li>Step 4: Everything about the beat</li>
                  <li>Step 5: Bars and tempo in practice</li>
                  <li>Step 6: Learning to play a melody on the piano</li>
                  <li>Step 7: Fingering-where to put all your fingers?</li>
                  <li>Step 8: Playing the piano with both hands</li>
                  <li>Step 9: Playing pauses</li>
                  <li>Step 10: The Waltz and other types of music</li>
                  <li>Step 11: The correct playing techniques</li>
                  <li>Step 12: Staying in rhythm</li>
                  {/* <li>Step 13: Motivational tips when practicing becomes difficult</li> */}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div>
        <p className='display-6 fs-2' >To know More About Each Step<a href="https://music2me.com/en/magazine/learn-piano-in-13-steps" className="text-decoration-none mx-3">Click here</a>
        </p>
      </div>


    </div>

  )
}




export default Help