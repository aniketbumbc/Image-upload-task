import React, { Component } from 'react';
import { storage } from '../firebase';
import '../Css/getImage.css';
class GetImages extends Component {
      state = {
            images: [],
      }
      componentDidMount() {
            storage.ref('images/').listAll().then((image) => {
                  const imageRefs = image.items.map(item => {
                        return item.getDownloadURL()

                  })
                  Promise.all(imageRefs).then(images => this.setState({
                        images,
                  }));
            })
      }

      render() {
            let imagesLength = this.state.images.length;
            return (
                  <div>
                        {imagesLength === 0 ? <h4> Images  loading........... </h4> : this.state.images.map((image, index) => {
                              return (
                                    <ul key={index}>
                                          <li>
                                                <img className="img-display" src={image} />
                                          </li>

                                    </ul>

                              )
                        })}

                  </div>
            )
      }




}


export default GetImages;