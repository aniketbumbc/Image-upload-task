import React, { Component } from 'react';
import ImageCrop from './ImageCrop';
import { storage } from '../firebase';

class ImageUpload extends Component {
      constructor(props) {
            super(props);
            this.state = {
                  uploadPic: '',
                  editor: null,
                  scaleValue: 1,
                  progress:0,
            };
           
      }

      setEditorRef = (editor) => this.setState({ editor });
      // image upload to firestore database
      onCrop = () => {
            if(this.state.selectedImage !== undefined ){
            const { editor } = this.state;
            if (editor != null) {
                  const url = editor.getImageScaledToCanvas().toDataURL();
                  let imageNumber = Math.floor(Math.random() * 100);
                  let imageName = `image -${imageNumber}`;
                  let image = this.DataURLtoFile(url, imageName);
                  const uploadTask = storage.ref(`images/${image.name}`).put(image);
                  this.fileInput.value = "";
                  uploadTask.on('state_changed',
                        (snapshot) => {
                              //progress
                              const progress = Math.round((snapshot.bytesTransferred / snapshot .totalBytes) * 100);
                              this.setState({progress})
                        }
                        , (error) => {
                              console.log(error);
                        }, () => {storage.ref('images').child(image.name).getDownloadURL().then(url => {
                              alert("Image Uploaded Sucessfully");
                        })
                              
                        
                  });
                       
            }
      }else{
                  alert("Please choose Image");
            }
      };

      onScaleChange = (scaleChangeEvent) => {
            const scaleValue = parseFloat(scaleChangeEvent.target.value);
            this.setState({ scaleValue });
      };
//convert base64 URL into image
      DataURLtoFile = (dataurl, filename) => {
            let arr = dataurl.split(','),
                  mime = arr[0].match(/:(.*?);/)[1],
                  bstr = atob(arr[1]),
                  n = bstr.length,
                  u8arr = new Uint8Array(n);
            while (n--) {
                  u8arr[n] = bstr.charCodeAt(n);
            }
            return new File([u8arr], filename, { type: mime });
      };

      //Check image type and setState
      picChange = (fileChangeEvent) => {
            const file = fileChangeEvent.target.files[0];
            const { type } = file;
            if (!(type.endsWith('jpeg') || type.endsWith('png') || type.endsWith('jpg') || type.endsWith('gif'))) {
            } else {
                  this.setState({ openCropper: true, selectedImage: fileChangeEvent.target.files[0], fileUploadErrors: [] });
            }
      };
      render() {
            return (
                  <div className="App">
                       
                        <input type="file" name="profilePicBtn" accept="image/png, image/jpeg" onChange={this.picChange}
                        ref={ref=> this.fileInput = ref}
                         />
                        <ImageCrop
                              imageSrc={this.state.selectedImage}
                              setEditorRef={this.setEditorRef}
                              onCrop={this.onCrop}
                              scaleValue={this.state.scaleValue}
                              onScaleChange={this.onScaleChange}
                              valueProgress = {this.state.progress}
                        />
                  </div>

            );
      }
}

export default ImageUpload;
