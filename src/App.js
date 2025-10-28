import './App.css';

function App() {
  return (
    <>
      <div className='top_bar' >
        <label id='top_bar_label'>Portfolio</label>
        <div className='top_bar_icons' >
          <label>About</label>
          <label>Work</label>
          <label>Contact</label>
        </div>
      </div>
    
      <div className='profile' style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
        <div className='intro'>
          <label style={{fontSize:'20px',fontWeight:'bold'}}>Branding | Image making </label>
          <label style={{fontWeight:'bold',marginBottom:'24px',marginTop:'24px'}}>Visual Designer</label>
          <label style={{fontSize:'17px',marginBottom:'48px'}}>This is a template Figma file, turned into React code!</label>
          <button style={{fontWeight:'bold',fontSize:'20px',backgroundColor:'black',color:'white'}}>Contact</button>
        </div>
        <img src='HeaderImage 1.png' ></img>
      </div>

      <div className='icons'>
        <img src='Group 5334.png'></img>
        <img src='image 1 (Traced).png'></img>
        <img src='image 5 (Traced).png'></img>
        <img src='image 2 (Traced).png'></img>
        <img src='image 7 (Traced).png'></img>
      </div>

      <div className='skills'>
        <div className='skill_item'>
          <img src='Skills Card Icon.png'></img>
          <label>Product Design</label>
          <label>This is a template Figma file, turned into React code!</label>
        </div>
        <div className='skill_item'>
          <img src='Skills Card Icon (1).png'></img>
          <label>Visual Design</label>
          <label>This is a template Figma file, turned into React code!</label>
        </div>
        <div className='skill_item'>
          <img src='Skills Card Icon (2).png'></img>
          <label>Art Direction</label>
          <label>This is a template Figma file, turned into React code!</label>
        </div>
      </div>

      <div className='gallery'>
        <label style={{fontSize:'32px',fontWeight:'bold',marginBottom:'24px',alignSelf:'center'}}>Latest work</label>
        <div className='gallery_row'>
          <div className='gallery_item'>
            <img src='Image (1).png'></img>
            <label>Project Title</label>
            <label>UI,Art Direction</label>
          </div>
          <div className='gallery_item'>
            <img src='Image (2).png'></img>
            <label>Project Title</label>
            <label>UI,Art Direction</label>
          </div>
          <div className='gallery_item'>
            <img src='Image (3).png'></img>
            <label>Project Title</label>
            <label>UI,Art Direction</label>
          </div>
        </div>
        <div className='gallery_row'>
          <div className='gallery_item'>
            <img src='Image (4).png'></img>
            <label>Project Title</label>
            <label>UI,Art Direction</label>
          </div>
          <div className='gallery_item'>
            <img src='Image (5).png'></img>
            <label>Project Title</label>
            <label>UI,Art Direction</label>
          </div>
          <div className='gallery_item'>
            <img src='Image (6).png'></img>
            <label>Project Title</label>
            <label>UI,Art Direction</label>
          </div>
        </div>
      </div>

      <div className='testimonial'>
        <label style={{fontSize:'32px',fontWeight:'bold',marginBottom:'24px',alignSelf:'center'}}>Testimonial</label>
        <div className='testimonial_row'>
          <div className='testimonial_item'>
            <label>This is a template Figma file, turned into React code!</label>
            <div className='testimonial_user'>
              <img src='Client Image.png'></img>
              <div className='user_details'>
                <img src='Stars.png'></img>
                <label>Gemma Nolen</label>
                <label>Goggle</label>
              </div>
            </div>
          </div>
          <div className='testimonial_item'>
            <label>This is a template Figma file, turned into React code!</label>
            <div className='testimonial_user'>
              <img src='Client Image.png'></img>
              <div className='user_details'>
                <img src='Stars.png'></img>
                <label>Gemma Nolen</label>
                <label>Goggle</label>
              </div>
            </div>
          </div>
          <div className='testimonial_item'>
            <label>This is a template Figma file, turned into React code!</label>
            <div className='testimonial_user'>
              <img src='Client Image.png'></img>
              <div className='user_details'>
                <img src='Stars.png'></img>
                <label>Gemma Nolen</label>
                <label>Goggle</label>
              </div>
            </div>
          </div>
        </div>
        <div className='testimonial_row'>
          <div className='testimonial_item'>
            <label>This is a template Figma file, turned into React code!</label>
            <div className='testimonial_user'>
              <img src='Client Image.png'></img>
              <div className='user_details'>
                <img src='Stars.png'></img>
                <label>Gemma Nolen</label>
                <label>Goggle</label>
              </div>
            </div>
          </div>
          <div className='testimonial_item'>
            <label>This is a template Figma file, turned into React code!</label>
            <div className='testimonial_user'>
              <img src='Client Image.png'></img>
              <div className='user_details'>
                <img src='Stars.png'></img>
                <label>Gemma Nolen</label>
                <label>Goggle</label>
              </div>
            </div>
          </div>
          <div className='testimonial_item'>
            <label>This is a template Figma file, turned into React code!</label>
            <div className='testimonial_user'>
              <img src='Client Image.png'></img>
              <div className='user_details'>
                <img src='Stars.png'></img>
                <label>Gemma Nolen</label>
                <label>Goggle</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='contact_form'>
        <div className='social_info'>
          <label style={{fontSize:'32px',fontWeight:'bold',marginBottom:'24px'}}>Lets work together</label>
          <label style={{fontSize:'17px',marginBottom:'42px'}}>This is a template Figma file, turned into React code!</label>
          <div className='social_icons' >
            <img src='Vector.png'></img>
            <img src='facebook.png'></img>
            <img src='Vector (1).png'></img>
            <img src='Vector (2).png'></img>
            <img src='Vector (3).png'></img>

          </div>
        </div>
        <div className='inputs'>
          <input placeholder='Name' style={{marginBottom:'12px'}}></input>
          <input placeholder='Email' style={{marginBottom:'24px'}}></input>
          <button>Submit</button>
        </div>
      </div>


    
    </>
  );
}

export default App;
