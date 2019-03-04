import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { v4 as randomString } from 'uuid';
import Dropzone from 'react-dropzone';
import { GridLoader } from 'react-spinners';
import Nav from './../Nav/Nav';

class UploadTutorProfilePic extends Component {
  constructor() {
    super();
    this.state = {
      isUploading: false,
      url: 'http://via.placeholder.com/250x250',
    };
  }

  getSignedRequest = ([file]) => {
    this.setState({ isUploading: true });
    const fileName = `${randomString()}-${file.name.replace(/\s/g, '-')}`;
    axios.get('/api/signs3', {
        params: {
          'file-name': fileName,
          'file-type': file.type,
        },
      })
      .then(response => {
        const { signedRequest, url } = response.data;
        this.uploadFile(file, signedRequest, url);
      })
      .catch(err => {
        console.log(err);
      });
  };

  uploadFile = (file, signedRequest, url) => {
    const options = {
      headers: {
        'Content-Type': file.type,
      },
    };

    axios.put(signedRequest, file, options)
    .then(response => {
        this.setState({ isUploading: false, url });
        const picture = {
          profile_pic: this.state.url,
          tutor: this.props.tutor.id
        }
        axios.put('/api/tutorprofilepic', picture)   
      })
    .catch(err => {
        this.setState({
          isUploading: false,
        });
        if (err.response.status === 403) {
          alert(
            `Your request for a signed URL failed with a status 403. Double check the CORS configuration and bucket policy in the README. You also will want to double check your AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY in your .env and ensure that they are the same as the ones that you created in the IAM dashboard. You may need to generate new keys\n${
              err.stack
            }`
          );
        } else {
          alert(`ERROR: ${err.status}\n ${err.stack}`);
        }
      });
  };

  render() {
    const { url, isUploading } = this.state;
    return (
      <div>
        <Nav />
        <p className = 'Uploadphototitle'>Add a Photo</p>
        <div className = 'Uploadphotodisplaydiv'>
        <div>
          <img className = 'Uploadphoto' src={url} alt="" width="200px" />
        </div>

        <Dropzone
          onDropAccepted={this.getSignedRequest}
          accept="image/*"
          multiple={false}>
          {({getRootProps, getInputProps}) => (
            <div 
            style = {{
            position: 'relative',
            width: 160,
            height: 80,
            borderWidth: 5,
            marginTop: 25,
            borderColor: 'gray',
            borderStyle: 'dashed',
            borderRadius: 5,
            display: 'inline-block',
            fontSize: 17,}}
            {...getRootProps()}>
              <input {...getInputProps()} />
                {isUploading ? <GridLoader /> : <p>Drop files here, or click to select files</p>}
            </div>
          )}
        </Dropzone>
          <div className = 'Uploadphotobuttondiv'>
            <Link to = {`/tutorprofile/${this.props.tutor.id}`}><button className = 'Uploadphotobutton'>Submit</button></Link>
          </div>
          </div>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  const {tutor} = reduxState;
  return {
    tutor
  } 
}

export default connect(mapStateToProps)(UploadTutorProfilePic);
