import React from 'react';
//import logo from './logo.svg';
import './CalculatorV2.css';

export default class Calculator2 extends React.Component{
    constructor(){
        super();
        this.state ={
            result: 17,
            number1:10,
            number2:7,
            operation: '+', //null
        };
        //this.showResult = this.showResult.bind(this);// тоже самое что призвоить стрелочную функцию
        //this.handleChange = this.handleChange.bind(this);
        //this.handleChange2 = this.handleChange2.bind(this); можно просто поставить бил в самой функции где она выводиться
        //this.handleOperationChange = this.handleOperationChange.bind(this);
    }
/*    showResult(){
        let result2 = 0;
        switch (this.state.operation){
            case '+':
                result2 = this.state.number1 + this.state.number2;
                break;
            case '-':
                result2 = this.state.number1 -  this.state.number2;
                //this.setState = this.setState({result:this.state.number1 -  this.state.number2}); тоже самое что и выше только без переменной result
                break;
            default:
                break;
        }
        //this.setState({result:this.state.number1 + this.state.number2});
        this.setState({result: result2});
    }*/
    showResult(operation,number1,number2) {
        let result2 = 0;
        switch (operation) {
            case '+':
                result2 = number1 + number2;
                break;
            case '-':
                result2 = number1 - number2;
                break;
            default:
                break;
        }
        this.setState({result: result2});
    }
    handleChange(e){
        let number1 = +e.currentTarget.value;
        this.setState({number1: number1}) //+e.currentTarget.value + - преобразовать в число
        //this.setState({number1: +e.currentTarget.value})//this.setState меняеться не моментально иза этого +e.currentTarget.value и есть стейт
        //this.showResult() показывает прошлое значение стате с опазданием
        let {operation,number2} = this.state; //берет значение из this.state
        //let operation = this.state.operation; тоже самое что верху
        //let number2 = this.state.number2;
        this.showResult(operation,number1,number2);
        //<button onClick={this.showResult.bind(this)}>Get result</button>
    }
    handleChange2(e){
        let number2 = +e.currentTarget.value;
        this.setState({number2: number2}) //this.setState меняеться не моментально иза этого +e.currentTarget.value и есть стейт
        //this.showResult() показывает прошлое значение стате с опазданием
        let {operation,number1} = this.state;
        this.showResult(operation,number1,number2);
    }
    handleOperationChange(e){
        let operation = e.currentTarget.value;
        this.setState({ operation: operation}) //e.currentTarget.value;
        console.log(this.state.operation);

        let {number1,number2} = this.state; // this.state.number1,this.state.number2 призваивает переменным значение this.state.number1,this.state.number2
        this.showResult(operation,number1,number2);

        //this.showResult(e.currentTarget.value,this.state.number1,this.state.number2); //старое без присвоенивание переменных number1,number2 = this.state.number1,this.state.number2
        //this.showResult(e.currentTarget.value,this.state.number1,this.state.number2); //первое значение измененый operation

        console.log(this.state.result)
    }
    render(){
        return(
            <div className="calculator_class">
                <div>
                    <input value={this.state.number1} onChange={this.handleChange.bind(this)}/>
                </div>
                <div>
                    <select name="" id="" onChange={this.handleOperationChange.bind(this)}>
                        <option value="+">+</option>
                        <option value="-">-</option>
                    </select>
                </div>
                <div>
                    <input value={this.state.number2} onChange={this.handleChange2.bind(this)}/>
                </div>
                <div>
                    Result: <span>{this.state.number1} {this.state.operation} {this.state.number2} = {this.state.result}
                    </span>
                </div>
            </div>

        );
    }
}

