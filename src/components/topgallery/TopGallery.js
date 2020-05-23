import * as React from 'react';
import TopGalleryComponent from "./TopGalleryComponent";
import {Store} from "../../modules/auth/Store";

class TopGallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: []
        }

    }

    componentDidMount (){
        console.log("TopGalleryComp");
        this.submit()
    }

    submit() {
        fetch('http://localhost:8080/page', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + Store._retrieveData()
            }
        })
            .then((response) => response.json())
            .then((responseData) => {
                let arrays = [];
                responseData.forEach(
                    (image)=>{
                       arrays.push(image);
                    }
                )
                this.setState({
                    images: arrays
                })
            });
    }

    render() {
        return (
            <TopGalleryComponent>{this.state.images}</TopGalleryComponent>
        );
    }
};


export default TopGallery;
