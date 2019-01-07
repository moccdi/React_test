import React from 'react';
//import Circle from './circle'


export default class Modal extends React.Component{
    constructor (props){
        super(props)
        this.state = {
            isOpen: props,

        }
    }

    render(){
        return(
            <div className="modal">
                <div className="close" onClick={this.handleClick2}>X</div>
                <h2>План тренировки </h2>
                <textarea autoFocus id="textarea_id">
                </textarea>
                 <button type="button" >Сохранить</button>
            </div>
        )
    }
    handleClick2 =() => {

        this.setState({
            isOpen: false
        })
        alert(this);
        console.log(this)
    }
}





// function Modal() {
//     return (
//             <div className="modal">
//                 <h2>План тренировки</h2>
//                 <textarea autoFocus>
//         текст
//         </textarea>
//                 <button type="button">Сохранить</button>
//             </div>
//         )
//
// }
//
// export default Modal;