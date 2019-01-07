import React from 'react';
//import logo from './logo.svg';
import './SliderV1.css';

export default class SliderV1 extends React.Component{
    constructor(props){
        super();
        this.state ={
            images: props.images,
            // images:['http://bipbap.ru/wp-content/uploads/2017/09/1164905.jpg',
            //     'http://multoigri.ru/images/desc/igri-mashinki-01.jpg',
            //     'http://lifeglobe.net/x/entry/0/1a-13.jpg',
            //     'http://vodi.su/wp-content/uploads/2014/07/McLaren-P1.jpg',
            // ],
            //currentImageIndex:0,
            currentImageIndex: props.index,
            isCycleMode: false,
            canGoPrev: props.index > 0,
            canGoNext: props.index < props.images.length - 1,
            };
        this.nextSlideHandler = this.nextSlideHandler.bind(this);
        }
    nextSlideHandler(e){
        let newIndex = this.state.currentImageIndex;
        if(e.currentTarget.dataset.direction === 'next'){ // dataset.direction html = data-direction
            if(newIndex < this.state.images.length - 1){
                newIndex = newIndex + 1;
                this.setState({canGoPrev : true}); //выполняеться меняет state и рендориться иза другой стайт рендориться и этот меняеться this.setState({currentImageIndex: newIndex})
                }
            if (newIndex === this.state.images.length - 1){
                this.setState({canGoNext : false});
            }
            }
        else {
            if (newIndex > 0) {
                newIndex = newIndex - 1;
                this.setState({canGoNext : true});
            }
            if (newIndex === 0){
                this.setState({canGoPrev : false});
            }
        }
        this.setState({currentImageIndex: newIndex})
        console.log(this.state.currentImageIndex)
    }
    render(){
        return(
           <div className="slider_v1">
                <div>
                    <button disabled={!this.state.canGoPrev} data-direction="prev" onClick={this.nextSlideHandler.bind(this)}>PREV</button>
                </div>
               <div>
                   <img src={this.state.images[this.state.currentImageIndex]} alt=""/>
                   {this.state.currentImageIndex}

                   </div>
               <div>
                   <button disabled={!this.state.canGoNext} data-direction="next" onClick={this.nextSlideHandler.bind(this)}>NEXT</button>
               </div>
           </div>

        );
    }
}

