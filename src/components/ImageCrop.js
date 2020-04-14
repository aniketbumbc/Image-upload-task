import React from 'react';
import PropTypes from 'prop-types';
import AvatarEditor from 'react-avatar-editor';

const ImageCrop = ({ valueProgress, imageSrc, onCrop, setEditorRef, scaleValue, onScaleChange }) => (
  
 
          <div>
            <AvatarEditor image={imageSrc} border={50} 
            scale={scaleValue} rotate={0} ref={setEditorRef} className="cropCanvas" />
            <label style={{"margin-right":"30px"}}> Scale Range </label>
            <input className="custom-range" style={{ width: '50%' }} type="range" value={scaleValue} name="points" min="1" max="10" onChange={onScaleChange} />
            <br/> 
            <label style={{"margin-right":"30px"}}> Progress Bar  </label>
            <progress style={{"margin-right":"30px"}}  value={valueProgress} max='100'/>
            <button className="btn btn-primary" onClick={onCrop}>
              Upload 
            </button>
          </div> 
    
  
  
);

ImageCrop.propTypes = {
  open: PropTypes.bool.isRequired,
  setEditorRef: PropTypes.func.isRequired,
  onCrop: PropTypes.func.isRequired,
  scaleValue: PropTypes.number.isRequired,
  onScaleChange: PropTypes.func.isRequired,
};

export default ImageCrop;
