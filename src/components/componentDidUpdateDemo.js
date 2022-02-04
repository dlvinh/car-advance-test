import React, { Component } from 'react';

export default class componentDidUpdateDemo extends Component {
    state = {
        currentCar: {
            "id": 1,
            "title": "Crystal Black",
            "type": "Pearl",
            "img": "./images/icons/icon-black.jpg",
            "srcImg": "images-black/images-black-1/",
            "color": "Black",
            "price": "19,550",
            "engineType": "In-Line 4-Cylinder",
            "displacement": "1996 cc",
            "horsepower": "158 @ 6500 rpm",
            "torque": "138 lb-ft @ 4200 rpm",
            "redline": "6700 rpm",
            "wheels": [
                {
                    "idWheel": 1,
                    "srcImg": "images-black/images-black-1/"
                },
                {
                    "idWheel": 2,
                    "srcImg": "images-black/images-black-2/"
                },
                {
                    "idWheel": 3,
                    "srcImg": "images-black/images-black-3/"
                }
            ]
        }
    }

    DemoHandler = () => {
        this.setState({
            currentCar: { ...this.state.currentCar, id: this.state.currentCar.id + 1 }
        }, () => {
            console.log(this.state.currentCar.id)
        })
    }

    componentDidUpdate = ()=>{
        console.warn(this.state.currentCar.id)
    }
    render() {
        return <div>
            <div className="form-group">
        <label htmlFor />
        <input type="text" className="form-control" name id aria-describedby="helpId" placeholder value={this.state.currentCar.id} />
        <small id="helpId" className="form-text text-muted">Help text</small>
    </div>

            <button type="button" class="btn btn-primary" onClick={this.DemoHandler}>Click</button>
        </div>;
    }
}
