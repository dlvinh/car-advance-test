import React, { Component } from 'react';
import ColorData from '../Data/arrayFeatures.json';
import WheelData from "../Data/wheels.json";

export default class CarModelBody extends Component {
    RenderColorOption = () => {
        let ColorOptionList = ColorData.map((color, index) => {
            let carModel = color.srcImg;
            return <div className="card m-2">
                <div className="card-body d-flex justify-content-start align-items-center" onClick={this.OnClickColorOptionHandler.bind(this, carModel)}>
                    <img key={index} className="card-img-top" src={color.img} alt="..." style={{ width: '60px' }} />
                    <div className='ml-3 '>
                        <h4 className="card-title">{color.title}</h4>
                        <p className="card-text text-left">{color.type}</p>
                    </div>
                </div>
            </div>
        })
        return ColorOptionList;
    }
    RenderWheelType = () => {
        let wheelType = WheelData.map((type, index) => {
            return <div className="card m-2">
                <div className="card-body d-flex justify-content-start align-items-center">
                    <img key={index} className="card-img-top" src={type.img} alt="..." style={{ width: '60px' }} />
                    <div className='ml-3 '>
                        <h4 className="card-title">{type.title}</h4>
                    </div>
                </div>
            </div>
        })
        return wheelType;
    }

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
    OnClickColorOptionHandler = (carModel) => {
        this.setState({
            currentCar: {
                ...this.state.currentCar,
                srcImg: carModel
            }
        }, () => {

        })
    }
    // OnCLickWheelOptionHandler = (wheelId) => {
    //     this.setState({
    //         ...this.state,
    //         status: true,
    //         wheelId: wheelId
    //     }, () => {
    //         console.log(this.state);
    //     })
    // }
    RenderCarModel = () => {
        // if (this.state.status) {
        // return <img style={{ width: "100%" }} alt="..." src={newModel} ></img>
        // let carModel = ColorData.map((color, index)=>{
        //     return (
        //         <div className="cloudimage-360" data-folder={"./images/"+this.state.currentCar.srcImg} data-filename-x={"civic-index.jpg"} data-amount-x={8} />
        //     )
        // })
        //console.log(this.state.currentCar.srcImg)
        return (
            <div >
                <div  id="currentCar" className="cloudimage-360 initialise" data-folder={"./images/" + this.state.currentCar.srcImg} data-filename-x={`civic-{index}.jpg`} data-amount-x={8} />
            </div>

        )
        //return carModel
        //return <img style={{ width: "100%" }} alt="..." src={"./images/" + this.state.currentCar.srcImg + "civic-1.jpg"}></img>
        // } else {
        //     return <img style={{ width: "100%" }} alt="..." src="./images/images-black/images-black-1/civic-1.jpg" ></img>
        // }
    }
    // Test = ()=>{
    //     let carModel = ColorData.map((color, index)=>{
    //             return (
    //                 <div className="cloudimage-360" data-folder="./images/images-black/images-black-1/" data-filename-x={"civic-{index}.jpg"} data-amount-x={8} />
    //             )
    //         })
    //         return carModel;
    //     }

    componentDidMount = () => {
        let additionalScript = document.querySelector("#additionalScript")
        let cloudImageScr = document.createElement("script");
        cloudImageScr.setAttribute("src", "https://cdn.scaleflex.it/plugins/js-cloudimage-360-view/2.7.4/js-cloudimage-360-view.min.js");
        cloudImageScr.setAttribute("id", "cloudImg");
        additionalScript.appendChild(cloudImageScr);
    }
    componentDidUpdate = () => {
        
       document.querySelector("#currentCar").innerHTML = "";
        
        document.querySelector("#additionalScript").innerHTML ="";

        // let cloudImageScr = document.createElement("script");
        // cloudImageScr.setAttribute("src", "https://cdn.scaleflex.it/plugins/js-cloudimage-360-view/2.7.4/js-cloudimage-360-view.min.js");
        // cloudImageScr.setAttribute("id", "cloudImg");

        let lazyLoad = document.createElement("script");
        lazyLoad.setAttribute("src", "https://cdn.scaleflex.it/filerobot/js-cloudimage-360-view/v2.0.0.yall.min.js");
        lazyLoad.setAttribute("id", "lazy");

        // document.querySelector("#additionalScript").appendChild(cloudImageScr);
        document.querySelector("#additionalScript").appendChild(lazyLoad);
        
    }

    render() {
        return <div className='container-fluid'>
            <div className='row'>
                <div className='col-7 carModel_container' id="carModel_container">
                    {/* {this.RenderCarModel()} */}
                    {/* {this.Test()} */}
                    <div  id="currentCar" className="cloudimage-360 initialise" data-folder={"./images/" + this.state.currentCar.srcImg} data-filename-x={`civic-{index}.jpg`} data-amount-x={8} />
                    <div id="additionalScript">

                    </div>
                </div>
                <div className='col-5 optional_container'>
                    <div className="card mb-2">
                        <h2>Color Option</h2>
                        {this.RenderColorOption()}
                    </div>
                    <div className="card">
                        <h2>Wheels Option</h2>
                        {this.RenderWheelType()}
                    </div>
                </div>
            </div>
        </div>;
    }
}
