import React, { useState } from 'react';
import './Navbar.css';
import Card from './Card';
function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [formData1, setFormData1] = useState({ textInput1: '' });
  const [formData2, setFormData2] = useState({ textInput2: '' });
  const [sliderValue, setSliderValue] = useState(2.5); // Initialize slider value
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const handleChange1 = (e) => {
    const { name, value } = e.target;
    setFormData1(prevState => ({ ...prevState, [name]: value }));
  };

  const handleChange2 = (e) => {
    const { name, value } = e.target;
    setFormData2(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit1 = (e) => {
    e.preventDefault();
    console.log('Form 1 submitted:', formData1);
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();
    console.log('Form 2 submitted:', formData2);
  };

  const handleSliderChange = (e) => {
    setSliderValue(e.target.value);
  };

  const circleDiameter = `${sliderValue * 30}px`;
  const circleRadius = `${sliderValue * 20}px`;
  
  const movingElementStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: circleDiameter,
    height: circleDiameter,
    borderRadius: circleRadius, // Makes it a circle
    backgroundColor: 'transparent', // No fill
    border: '2px solid blue', // Outline
    transform: 'translate(-50%, -50%)' // Center the circle
  };
  

  return (
    <div>
    <div className='navbar'>
      <button className='menu-bars' onClick={toggleSidebar}>
        ☰
      </button>
    </div>
    <div className={`sidebar ${sidebarVisible ? 'active' : ''}`}>
      <button className='menu-bars' onClick={toggleSidebar}>
        ✖
      </button>
        <div className="container mt-4">
          <div className='title'>
            <h1>Charon</h1>
            <div className="line"></div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <form onSubmit={handleSubmit1} className="mb-4">
                <div className="mb-3">
                  <label htmlFor="textInput1" className="form-label">Your Location:</label>
                  <input 
                    type="text" 
                    id="textInput1"
                    name="textInput1"
                    className="form-control"
                    placeholder="Italy town" 
                    value={formData1.textInput1}
                    onChange={handleChange1}
                  />
                </div>
              </form>
              <form onSubmit={handleSubmit2}>
                <div className="mb-3">
                  <label htmlFor="textInput2" className="form-label">Your Destination:</label>
                  <input 
                    type="text" 
                    id="textInput2"
                    name="textInput2"
                    className="form-control"
                    placeholder="Albania City" 
                    value={formData2.textInput2}
                    onChange={handleChange2}
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="customRange1" className="form-label">Radius (Km): {sliderValue}</label>
            <input 
              type="range" 
              className="form-range" 
              id="customRange1" 
              min="0.5" 
              max="5" 
              step="0.5"
              value={sliderValue}
              onChange={handleSliderChange}
            />
          </div>
          <div class="card-container">

  <div class="card">
    <div class="card-body">
      Card 1 content
    </div>
  </div>
  <div class="card">
    <div class="card-body">
      Card 2 content
    </div>
  </div>
  <div class="card">
    <div class="card-body">
      Card 3 content
    </div>
  </div>
</div>


          <div className="col-md-12 text-center mt-5">
            <button type="button" className="btn btn-primary w-100">Submit</button>
          </div>
        </div>



</div>

      <div id="movingElement" style={movingElementStyle}></div>
      
      
    </div>
  );
}

export default Navbar;
