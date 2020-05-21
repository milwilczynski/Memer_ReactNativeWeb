import * as React from 'react';
import TopGallery from "./TopGallery";

class TopGalleryComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        }
    }

    componentDidMount() {
    }

    submit() {
        fetch('http://localhost:8080/page', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                 "Authorization": "Bearer " + "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJMb2dpbiIsInJvbGVzIjoidXNlciIsImxvZ2luIjoidXJrZWsiLCJpYXQiOjE1OTAwNzg5NDAsImV4cCI6MTU5MDA3OTk0MH0.vtYgpmjks-iv4kOUt_GmCJc6RTYz8CI0Wg-ggWF1VE0"
            }
        })
            .then((response) => response.json())
            .then((responseData) => {
                this.setState = {
                    title: responseData[0].name
                }
                return responseData[0].name;
            });
    }

    render() {
        console.log(this.state.title);
        return (
            <TopGallery>{this.state.title}</TopGallery>
        );
    }
};


export default TopGalleryComponent;
