import React, {Component,Fragment,Children} from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import PropTypes from 'prop-types';
import moment from 'moment'
import 'moment/locale/ru'
//import Modal from './modal'
import Calculator2 from './components/calculator/calculator2/CalculatorV2.js'
import SliderV1 from "./components/Sliders/SliderV1/SliderV1.js";
import ToDoList1 from "./components/ToDoList/ToDoList.js"
import ToDoList2 from "./components/ToDoList/ToDoListV2.js"
import ToDoListV3 from "./components/ToDoList/ToDoListV3.js"
import ToDoListV4 from "./components/ToDoList/ToDoListV4.js";
import ToDoListV5 from "./components/ToDoList/ToDoListV5.js";
import ToDoListV6 from "./components/ToDoList/ToDoListV6";
import ToDoListV7 from "./components/ToDoList/V7/ToDoListV7";
import ToDoListV8 from "./components/ToDoList/V8/ToDoListV8";
import CalculatorTemperature from "./components/temperature/CalculatorTemperature";
import currencies from './currencies';
// import Demo1 from './lesson9/Demo1';
// import Demo2 from './lesson9/Demo2';

//
// class Lesson9 extends React.Component{
//     render (){
//         return(
//             <div>
//                 <Demo1/>
//                 <Demo2 message="Hello there! "/>
//             </div>
//         )
//     }
// }
// ReactDOM.render(<Lesson9 />, document.getElementById('test59_lesson9'));



class MenuItem58 extends React.Component{
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <li>{this.props.index} - {this.props.title}</li>
        )
    }
}
//  function MenuList58({children}) {
//     return <ul>{children}</ul>
//
// }
// function MenuList58(props) {
//     return <ul>{props.children}</ul>
// }
function MenuList58({children}) {
    const changedChildren = Children.map(children,(child,index) =>{
    return React.cloneElement(child,{index});
});
   return <ul>{changedChildren}</ul>; }


class MenuList58_3 extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        // console.log(this.props)
        // console.log(this.props.list)
        return (
            <Fragment>
                {this.props.list.map((name) => {
                        return <div>{name}</div>
                    })
                }
            </Fragment>

        )
    }
}

// function MenuList58_3({list}) {
//     {list.map(title => {
//             return <div>{title}</div>
//         }
//     )}
// }


function MenuList58_2({children,list}) {
    return <Fragment>{list.map(title => children(title))}</Fragment>;
}
// class MenuList58_2 extends React.Component{
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return (
//             <ul>{this.props.list.map(title => this.props.children(title))}</ul>
//         )
//     }
// }

// class MenuList58 extends React.Component{
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return (
//             <ul>{this.props.children}</ul>
//         )
//     }
// }
class Sidebar58 extends React.Component{
    constructor(props) {
        super(props);
    }
    handAsideRef = (node) => {
        if(this.props.onRef){
            this.props.onRef(node)
        }
    }
    render() {
        return (
            <aside ref={this.handAsideRef} className={ this.props.isOpen ? 'aside58 ' + 'isOpen58' : 'aside58' }>{this.props.children}</aside>
        )
    }

}
class Menu58 extends React.Component{
    state = {
        isMenuOpen: true,
    }
    // toggleMenu = () => {
    //     this.setState(({isMenuOpen})=componentWillUnmount>({isMenuOpen:!isMenuOpen}));
    // };
    onAsideClick = (event) => {
        if (!event.target.contains(this.aside) &&
            !event.target.contains(this.button) && //если на елемент на которого ты нажимешь имеет this.button
            this.state.isMenuOpen
            ){
            this.toggleMenu();
        }
    }
    handAsideRef = (node) => {
        this.aside = node;
        if(node) {
            document.addEventListener('click', this.onAsideClick);
        } else {
            document.removeEventListener('click', this.onAsideClick);
        }
    }
    handleButtonRef = (node) => {
        this.button = node;
    }
    renderItem = title =>{
        return <li key={title}>{title}</li>
    }
    render() {
        return (
            <div className="app58">
                <header className="header58">
                    <button
                        ref={this.handleButtonRef}
                        className="fa fa-bars menu-btn menu-btn58"
                        onClick={this.toggleMenu}/>
                </header>
                {/*<aside ref={this.handAsideRef} className={ this.state.isMenuOpen ? 'aside58 ' + 'isOpen58' : 'aside58' }>aside</aside>*/}
                <Sidebar58 onRef={this.handAsideRef} isOpen={this.state.isMenuOpen}>
                    <MenuList58>
                        <MenuItem58 title="Dashboar"/>
                        <MenuItem58 title="Admin panel"/>
                    </MenuList58>
                    {/*<ul>{this.props.list.map(title => this.props.children(title))}</ul>*/}
                    <MenuList58_2 list={['Dashboar2','Admin2']}>
                        {title =>{
                            return <li key={title}>{title}</li>
                        }}
                    </MenuList58_2>
                    <MenuList58_2 list={['Dashboar3','Admin3']}>
                        {this.renderItem}
                    </MenuList58_2>
                    <MenuList58_3 list={['Dashboar3','Admin3','sdas','dasdas']}/>
                </Sidebar58>
                <main className="main58">Main</main>
            </div>
        )
    }
}
 ReactDOM.render(<Menu58 />, document.getElementById('test58'));


class Ticker57 extends React.Component{
    state = {
        value:0
    }
    updateExchangeRate = () => {
        fetch(`http://coins.demo.javascript.ninja/ticker/${this.props.pair}`)
            .then(r => r.json())
            .then(res => {
                this.setState({
                    value: res.last,
                });
            });
    }

    componentDidMount(){
        this.updateExchangeRate();
        this.interval = setInterval(this.updateExchangeRate,1000)
    }
    componentWillMount(){
        clearInterval(this.interval)
    }
    render() {
        const { pair } = this.props
        return (
            <div className="ticker57">
                <p> {pair.toUpperCase().replace('_',' to ')}</p>
                <p>{this.state.value.toFixed(2)}</p>
            </div>
        )
    }//replace поиск и замена масива;находит _ заменяет на  to
}


class App57 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedPairs:[],
            chichi:1,
            chichi2:20,
            chichi3:30
        }
    }
    //handleCheckbox = (currency) => (event) => тоже самое
        // handleCheckbox(currency){
    //     return function (event) {

    //     }
    // }

    handleCheckbox = (curr) => (event) => {
        const { checked } = event.target;
        this.setState(({ selectedPairs }) => {
            let pairs = [...selectedPairs]
            if(checked){
                pairs.push(curr);
            } else {
                pairs = pairs.filter(pair => pair !== curr)
            }

            return{
                selectedPairs: pairs
            }
            })
    }
    onckiccc(){
        // this.setState(({ chichi }) => {
        //     return{
        //         chichi: chichi * 2
        //     }
        // })

        // this.setState(prevState => ({
        //     chichi: prevState.chichi + 3
        // }));
        // this.setState(prevState => ({
        //     chichi: prevState.chichi * 2
        // }));


        // this.setState((  prevState ) => {
        //     return{
        //         chichi: prevState.chichi + 3
        //     }
        // })
        // this.setState(( prevState ) => {
        //     return{
        //         chichi: prevState.chichi * 2
        //     }
        // })
        this.setState(({ chichi,chichi2,chichi3  }) => {
            return{
                chichi:chichi + 10,
                chichi2:chichi2 + 20,
                chichi3:chichi3 + 30
            }
        })
        this.setState(({ chichi,chichi2,chichi3 }) => {
            return{
                chichi:chichi * 2 ,
                chichi2:chichi2 * 2,
                chichi3:chichi3 * 2
            }
        }) //setState не будет перерисоваться 5 раз все смержит обьэденит в один setState
    }
    render() {
        return (
            <div className="app57">
                <aside className="aside57">
                    <ul className="currList57">
                        {currencies.map((curr) => <li key={curr} className="currItem57">
                            <input type="checkbox" id={curr} onChange={this.handleCheckbox(curr)}/>
                            <label htmlFor={curr}>{curr.toUpperCase()}</label>


                            </li>)}
                    </ul>
                    <div >{this.state.chichi}
                        <button onClick={this.onckiccc.bind(this)}>click</button>
                    </div>
                    <div>
                        {this.state.chichi2}
                    </div>
                    <div>
                        {this.state.chichi3}
                    </div>
                </aside>
                <main className="main57">
                    {this.state.selectedPairs.map(pair => <Ticker57 key={pair} pair={pair}/>)}
                </main>
            </div>
        )
    }
}
// export default class Ticker extends React.Component {
//     state = {
//         value: 0,
//     };
//
//     updateExchangeRate = () => {
//         return fetch(`http://coins.demo.javascript.ninja/ticker/${this.props.pair}`)
//             .then(r => r.json())
//             .then(res => {
//                 this.setState({
//                     value: res.last,
//                 });
//             });
//     };
//
//     componentWillReceiveProps(nextProp) {
//         if (nextProp.isActive && !this.props.isActive) {
//             this.updateExchangeRate();
//             this.interval = setInterval(this.updateExchangeRate, 10000);
//         } else if (!nextProp.isActive && this.props.isActive) {
//             clearInterval(this.interval);
//             this.setState({
//                 value: 0,
//             });
//         }
//     }
//
//     componentWillUnmount() {
//         clearInterval(this.interval);
//     }
//
//     render() {
//         const { pair } = this.props;
//         return (
//             <div className="ticker">
//                 <p>{pair.toUpperCase().replace('_', ' to ')}</p>
//                 <p>{this.state.value.toFixed(2)}</p>
//             </div>
//         );
//     }
// }
// class App extends Component {
//     state = {
//         activePairs: [],
//     };
//
//     handleCurrencyCheck = currency => event => {
//         const { checked } = event.target;
//
//         this.setState(({ activePairs }) => {
//             let pairs = [...activePairs];
//
//             if (checked) {
//                 pairs.push(currency);
//             } else {
//                 pairs = pairs.filter(pair => pair !== currency);
//             }
//
//             return {
//                 activePairs: pairs,
//             };
//         });
//     };
//
//     render() {
//         return (
//             <div className="app">
//                 <aside>
//                     <ul className="currList">
//                         {currencies.map(curr => (
//                             <li key={curr} className="currItem">
//                                 <input type="checkbox" id={curr} onChange={this.handleCurrencyCheck(curr)} />
//                                 <label htmlFor={curr}>{curr.toUpperCase()}</label>
//                             </li>
//                         ))}
//                     </ul>
//                 </aside>
//
//                 <main>
//                     {currencies.map(pair => <Ticker key={pair} pair={pair} isActive={this.state.activePairs.includes(pair)} />)}
//                 </main>
//             </div>
//         );
//     }
// }
ReactDOM.render(<App57 />, document.getElementById('test57'));



// class Cat56 extends React.Component {
//     render() {
//         const mouse = this.props.mouse;
//         return (
//             <img src="./img/icon/image4.png" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
//         );
//     }
// }

// class Mouse56 extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleMouseMove = this.handleMouseMove.bind(this);
//         this.state = { x: 0, y: 0 };
//     }
//
//     handleMouseMove(event) {
//         this.setState({
//             x: event.clientX,
//             y: event.clientY
//         });
//     }
//
//     render() {
//         return (
//             <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
//
//                 {/*
//             Вместо задания статического представления того, что должен отрисовывать <Mouse>,
//             используйте свойство 'render' чтобы  определять это представление динамически.
//           */}
//                 {this.props.render(this.state)}
//             </div>
//         );
//     }
// }
//
// class MouseTracker56 extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>Move the mouse around!</h1>
//                 <Mouse56 render={mouse => (
//                     <Cat56 mouse={mouse} />
//                 )}/>
//             </div>
//         );
//     }
// }
// ReactDOM.render(<MouseTracker56 />, document.getElementById('test56'));
//
//
//
//
//
//
//
// class Cat55 extends React.Component {
//     render() {
//         const mouse = this.props.mouse
//         return (
//             <img src="./img/icon/lamp2_content.png" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
//         );
//     }
// }
//
// class MouseWithCat55 extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleMouseMove = this.handleMouseMove.bind(this);
//         this.state = { x: 0, y: 0 };
//     }
//
//     handleMouseMove(event) {
//         this.setState({
//             x: event.clientX,
//             y: event.clientY
//         });
//     }
//
//     render() {
//         return (
//             <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
//
//                 {/*
//             Здесь мы без труда можем поменять тег <p> на <Cat>... но тогда
//             нам придется создавать отдельный компонент <MouseСЧемТоЕще>
//             каждый раз, когда он нам будет необходим, поэтому <MouseWithCat>
//             в действительности не является повторно используемым.
//           */}
//                 <Cat55 mouse={this.state} />
//             </div>
//         );
//     }
// }
//
// class MouseTracker55 extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>Переместите мышь!</h1>
//                 <MouseWithCat55 />
//             </div>
//         );
//     }
// }
// ReactDOM.render(<MouseTracker55 />, document.getElementById('test55'));









// Эти два контейнера являются соседями в DOM
const appRoot = document.getElementById('test53');
const modalRoot = document.getElementById('test54');

class Modal53 extends React.Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
    }
    componentDidMount() {
        /*
          Элемент портала вставлен в дерево DOM после того, как потомки Modal
        были монтированы, что означает, что потомки будут монтированы в отдельный
        узел DOM.
          Если дочерний компонент требует присоединения к дереву DOM сразу после
        его монтирования, например, для измерения узла DOM или использования
        «autoFocus» в потомке, добавьте состояние в Modal и отрисуйте дочерние
        элементы, после того, как Modal будет вставлен в DOM дерево.
        */
        modalRoot.appendChild(this.el);
    }

    componentWillUnmount() {
        modalRoot.removeChild(this.el);
    }

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.el,
        );
    }
}

class Parent53 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {clicks: 0};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        // Он сработает, когда кнопка в Child будет нажата,
        // обновляя состояние Parent, даже если кнопка
        // не является его прямым потомком в DOM.
        this.setState(prevState => ({
            clicks: prevState.clicks + 1
        }));
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                <p>Число кликов: {this.state.clicks}</p>
                <p>
                    Откройте DevTools браузера,
                    чтобы увидеть, что кнопка button
                    не является потомком div
                    с обработчиком onClick.
                </p>
                <Modal53>
                    <Child53 />
                </Modal53>
            </div>
        );
    }
}

function Child53() {
    // Событие клика на этой кнопке будет всплывать к Parent,
    // так как нет заданного 'onClick' атрибута
    return (
        <div className="modal53">
            <button>Click</button>
        </div>
    );
}

ReactDOM.render(<Parent53 />, appRoot);














// Контекст позволяет нам передавать значение глубоко в дерево компонентов
// без его явной передачи через каждый компонент.
// Создайте контекст для текущей темы (значение "light" по умолчанию).
const ThemeContext52 = React.createContext('light');

class App52 extends React.Component {
    render() {
        // Используйте Provider, чтобы передать текущую тему вглубь дерева.
        // Любой компонент может считать её, вне зависимости от того как глубоко она находится.
        // В данном примере, мы передаем "dark" как текущее значение.
        return (
            <ThemeContext52.Provider value="dark">
                <Toolbar52 />
            </ThemeContext52.Provider>
        );
    }
}

// Промежуточному компоненту необязательно
// явно передавать тему кому-либо далее.
function Toolbar52(props) {
    return (
        <div>
            <ThemedButton52 />
        </div>
    );
}

function ThemedButton52(props) {
    // Используйте Consumer, чтобы считать текущий контекст темы.
    // React будет искать выше ближайший поставщик (Provider) темы и использует его значение.
    // В данном примере текущая тема имеет значение "dark".
    return (
        <ThemeContext52.Consumer>
            {theme => <button {...props}  theme={theme} >{props.children} </button>}
        </ThemeContext52.Consumer>
    );
}
ReactDOM.render(<App52 />,  document.getElementById('test52'));


class SearchUserForm51 extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(event) {
        alert(`Имя пользователя: ${this.nameTextField.value}`);
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <label>Имя пользователя:
                    <input ref={(el) => this.nameTextField = el} name="name" type="text"/></label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

ReactDOM.render(<SearchUserForm51 />,  document.getElementById('test51'));

class CustomTextInput50 extends React.Component {
    constructor(props) {
        super(props);

        this.textInput = null;

        this.setTextInputRef = element => {
            this.textInput = element;
        };

        this.focusTextInput = () => {
            // Фокусировка на текстовом поле, используя нативный DOM API
            if (this.textInput) this.textInput.focus(); //фукусировка на нужной елементе должен this.textInput = element; element должен передаться
        };
    }

    componentDidMount() {
        // автофокус на input при монтировании
        this.focusTextInput();
    }

    render() {
        // Используйте коллбэк для атрибута `ref`, чтобы сохранить
        // ссылку на текстовый DOM-элемент input в свойстве экземпляра
        // (например this.textInput)
        return (
            <div>
                <input
                    type="text"
                    ref={this.setTextInputRef}
                />
                <input
                    type="button"
                    value="Focus the text input"
                    onClick={this.focusTextInput}
                />

            </div>
        );
    }
}
ReactDOM.render(<CustomTextInput50 />, document.getElementById('test50'));



class CustomTextInput49 extends React.Component {
    constructor(props) {
        super(props);
        // создание ссылки для хранения DOM-элемента textInput
        this.textInput = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
    }

    focusTextInput() {
        // Явная фокусировка на текстовом поле, используя нативный DOM API
        // Обратите внимание: мы осуществляем доступ к
        // свойству current, чтобы получить DOM-узел
        this.textInput.current.focus();
    }

    render() {
        // Мы говорим React, что хотим ассоциировать атрибут ref элемента <input>
        // с `textInput`, который мы создали в конструктооре
        return (
            <div>
                <input
                    type="text"
                    ref={this.textInput}
                />

                <input
                    type="button"
                    value="Focus the text input"
                    onClick={this.focusTextInput}
                />
            </div>
        );
    }
}
ReactDOM.render(<CustomTextInput49 />, document.getElementById('test49'));


const MyComponents48 = {
    Button: function Button(props) {
        return <button className={props.color} value={props.text} onClick={props.onClick}/>;
    }
}

function SuccessButton48(props) {
    return <MyComponents48.Button color="green" value="OK" onClick="bibi"/>;
}
ReactDOM.render(<SuccessButton48 />, document.getElementById('test48'));


class PersonForm47 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {sex: 'female', firstName: '', lastname: '', email: '', phone: ''};
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {
        const name = event.target.name;
        this.setState({[name]: event.target.value});
    }

    render() {
        return (
            <form>
                <label>First Name:Одна функция onChange которая применяеться для всех форм   onInputChange(event)  const name = event.target.name; this.setState([name]: event.target.value)  <input name="firstName"  type="text"
                                          value={this.state.firstName} onChange={this.onInputChange}/></label>
                <label> Last Name: <input name="lastName"  type="text"
                                          value={this.state.lastName} onChange={this.onInputChange}/></label>
                <label> Email: <input name="email"  type="email"
                                      value={this.state.email} onChange={this.onInputChange}/></label>
                <label> Phone: <input name="phone"  type="tel"
                                      value={this.state.phone} onChange={this.onInputChange}/></label>
                <label> Sex: <select name="sex"  value={this.state.sex} onChange={this.onInputChange}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                </label>
            </form>
        );
    }
}

ReactDOM.render(<PersonForm47 />,  document.getElementById('test47'));



class LoginForm46 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {login: '', password: ''};

        this.onLoginChange = this.onLoginChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event){
        alert(`${this.state.login}, добро пожаловать!`);
        event.preventDefault();
    }

    onPasswordChange(event){
        this.setState({password: event.target.value});
    }

    onLoginChange(event) {
        this.setState({login: event.target.value.toUpperCase()});
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <p><label> Логин: <input type="text" name="login" value={this.state.login}
                                         onChange={this.onLoginChange}/></label></p>
                <p><label> Пароль: <input type="password" name="password" value={this.state.password}
                                          onChange={this.onPasswordChange}/></label></p>
                <p><input type="submit" value="Submit" /></p>
            </form>
        );
    }
}

ReactDOM.render(<LoginForm46 />,  document.getElementById('test46'));



function UserList45(props){
    function getKey45(str){
        let key45 = 0;
        for (let i = 0; i < str.length; i++) {
            key45 += str.charCodeAt(i);
        }
        return key45.toString();
    }

    const users45 = props.users45;
    const items45 = users45.map((user45) => {
        const key45 = getKey45(user45)
        return <li key={key45}>{user45}</li>;
    });
    return (<ul>{items45}</ul>);
}
const users45 = ['Вася', 'Петя', 'Максим', 'Егор','Егор'];
ReactDOM.render(<UserList45 users45={users45}/>, document.getElementById('test45'));



class Tab44 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time:this.props.lab,
            newtime:11
        };
    }


    // shouldComponentUpdate(nextProps, nextState){
    //     return nextState.time !== nextProps.lab; //this.state.time !== this.props.lab
    // }

    // changeState = () =>{
    //     this.setState((prevState, props) => ({
    //         time: prevState.time +  props.lab + 10
    //
    //     }));
    // }
    changeState222 = () => this.setState(state => this.state.time ===  12 ? null : ({time: 12}));

    // changeState222 = () => this.setState((state => this.state.time ===  12 ? null : ({time: 12})));
    //changeState222 = props => this.setState(prevState => this.state.time ===  this.props.lab ? 2 : ({time: prevState.time +  props.lab + 10}));

    changeState3 = () =>{
       this.setState({
           time:this.props.lab
       })

    }
    render() {
        return (
            <div>
                {this.state.time}
                <button onClick={this.changeState222}>changeState222</button>
                <button onClick={this.changeState3}>changeState333</button>
                {/*{alert('disi')}*/}
            </div>
        );
    }
}

class App44 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 1
        };
    }
    changeState = () =>{
      this.setState({
          time:this.state.time
      })

    }
    render() {
        return (
         <div>
             {this.state.time}
             <button onClick={this.changeState}>changeState111</button>
                <Tab44 lab={this.state.time}/>
         </div>

        );
    }
}
ReactDOM.render(
    <App44 />,
    document.getElementById('test44')
);



class Fragment43 extends React.Component {
    render() {
        return (
            <Fragment>
            <div>Hello</div>
            <div>World</div>
                <main>
                    <dl>{[[1,'a'],[2,'b'],[3,'c']].map(([dd,dt])=>
                    <Fragment key={dd}>
                        <dd>{dd}&nbsp</dd>
                        <dt>{dt}</dt>
                    </Fragment>
                    )}
                    </dl>
                </main>
        </Fragment>
        )
    }
}
ReactDOM.render(
    <Fragment43 />,
    document.getElementById('test43')
);

class MouseTracker42 extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = { x: 0, y: 0 };
    }

    handleMouseMove(event) {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });



    }

    render() {
        return (
            <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
                <h1>Move the mouse around!</h1>
                <p>The current mouse position is ({this.state.x}, {this.state.y})</p>
            </div>
        );
    }
}
ReactDOM.render(
    <MouseTracker42 />,
    document.getElementById('test42')
);


const MyComponents41 = {
    DatePicker: function DatePicker(props) {
        return <div>Imagine a {props.color} datepicker here.</div>;
    }
}

function BlueDatePicker41() {
    return <MyComponents41.DatePicker color="blue" />;
}
ReactDOM.render(
    <BlueDatePicker41 />,
    document.getElementById('test41')
);



const FancyButton40 = React.forwardRef((props, ref1) => (
    <button ref={ref1} className="FancyButton">
        {props.children}
    </button>
));

// You can now get a ref directly to the DOM button:
const ref1 = React.createRef();

class App40 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <FancyButton40 ref={ref1}>Click me!</FancyButton40>
        );
    }
}
ReactDOM.render(
    <App40 />,
    document.getElementById('test40')
);





export const theme = {
    light: {
        foreground: '#c31098',
        background: '#eee302',
    },
    dark: {
        foreground: '#ff001a',
        background: '#a3e300',
    },
};

const ThemeContext = React.createContext({
    theme: theme.dark,
    toggleTheme: () => {},
});


export function ThemeTogglerButton() {
    // The Theme Toggler Button receives not only the theme
    // but also a toggleTheme function from the context
    return (
        <ThemeContext.Consumer>
            {({theme, toggleTheme}) => (
                <button
                    onClick={toggleTheme}
                    style={{backgroundColor: theme.background}}>
                    Toggle Theme
                </button>
            )}
        </ThemeContext.Consumer>
    );
}

class App39 extends React.Component {
    constructor(props) {
        super(props);

        this.toggleTheme = () => {
            this.setState(state => ({
                theme39:
                    state.theme === theme.dark
                        ? theme.light
                        : theme.dark,
            }));
        };

        this.state = {
            theme: theme.light,
            toggleTheme: this.toggleTheme,
        };
    }
    render() {
        return (
            <ThemeContext.Provider value={this.state}>
                <Content />
            </ThemeContext.Provider>
        );
    }
}

function Content() {
    return (
        <div>
            <ThemeTogglerButton />
        </div>
    );
}
ReactDOM.render(
    <App39 />,
    document.getElementById('test39')
);







export const themes38 = {
    light: {
        foreground: '#8705c3',
        background: '#06ee00',
    },
    dark: {
        foreground: '#ff7b06',
        background: '#222222',
    },
};
export const ThemeContext38 = React.createContext(
    themes38.dark // default value
);
function ThemedButton38(props) {
    return (
        <ThemeContext38.Consumer>
            {themes38 => (
                <button
                    {...props}
                    style={{backgroundColor: themes38.background}}
                />

            )}
        </ThemeContext38.Consumer>
    );
}

function Toolbar38(props) {
    return (
        <ThemedButton38 onClick={props.changeTheme}>
            Change Theme
        </ThemedButton38>
    );
}

class App38 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme38: themes38.light,
        };

        this.toggleTheme = () => {
            this.setState(state => ({
                theme38:
                    state.theme38 === themes38.dark
                        ? themes38.light
                        : themes38.dark,
            }));
        };
    }
    render() {

        return (
                <div>
                <ThemeContext38.Provider value={this.state.theme38}>
                    <Toolbar38 changeTheme={this.toggleTheme} />
                </ThemeContext38.Provider>

                    <ThemedButton38/>
                </div>

        );
    }
}

ReactDOM.render(
    <App38 />,
    document.getElementById('test38')
);

class OuterClickExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isOpen: false };
        this.toggleContainer = React.createRef();

        this.onClickHandler = this.onClickHandler.bind(this);
        this.onClickOutsideHandler = this.onClickOutsideHandler.bind(this);
    }
    componentDidMount() {
        window.addEventListener('click', this.onClickOutsideHandler);
    }
    componentWillUnmount() {
        window.removeEventListener('click', this.onClickOutsideHandler);
    }
    onClickHandler() {
        this.setState(currentState => ({
            isOpen: !currentState.isOpen
        }));
    }
    onClickOutsideHandler(event) {
        if (this.state.isOpen && !this.toggleContainer.current.contains(event.target)) { //если этот обект содержит евент таргет то вернет тру если евента нету то тогда фолс ,проверка на чи нажата блопка и она находиться в его блоке
            this.setState({ isOpen: false });
            debugger;
        }
    }
    render() {
        return (
            <div>
            <div ref={this.toggleContainer}>
                <button onClick={this.onClickHandler}>Select an option</button>
                {this.state.isOpen ? (
                    <ul>
                        <li>Option 1</li>
                        <li>Option 2</li>
                        <li>Option 3</li>
                    </ul>
                ) : null}
                </div>
                <button onClick={this.onClickHandler}>Select an option</button>
            </div>
        );
    }
}
ReactDOM.render(
    <OuterClickExample />,
    document.getElementById('test36')
);

moment.locale('ru');

function Text_Test35({value}) {
    return value;
    }

 function DataTime35({value,format}) {
    return moment(value).format(format);
        //Moment.   js бибилиотека
    };
class Test35 extends React.Component{
    render(){
        return[
            <header key="header">Возращает сразу несколько html нетгов не один а несколько   return[]</header>,
            <div key="div1">Только заместо return()ставим  return[] и после каждого тега ставиться , </div>,
            <div key="div2">Только у каждого елемента масива должен быть key </div>,
            <div>можно возразать и строки <Text_Test35 value="возращение строки из функции и не надо обарачивать тегом"/></div>,
            <div>іфвфів <DataTime35 value={new Date()}  format="DD MMMM YYYY"/></div>
        ]
    }
}
ReactDOM.render(
    <Test35 />,
    document.getElementById('test35')
);



class Modal_33 extends React.Component{
    render(){
        return(
            <div className="modal_33">
                {this.props.children}
                <button onClick={this.props.onClosee} className="modal_33_close-button">Закрыть</button>
            </div>
        )
    }
}
class Modal_34_3 extends React.Component{
    render(){
        return ReactDOM.createPortal(
            <div className="modal_33">
                {this.props.children}
                <button onClick={this.props.onClosee} className="modal_33_close-button">Закрыть</button>
             </div>,
            document.getElementById('test33_porta3')
        )
    }
}

class Modal_35_4 extends React.Component{
    componentWillMount(){ //выполняеться перед рендингом
        this.root = document.createElement('div');
        document.body.appendChild(this.root);
    }
    componentWillUnmount(){
        document.body.removeChild(this.root);
    }

        render(){
        return ReactDOM.createPortal(
            <div className="modal_33">
                {this.props.children}
                <button onClick={this.props.onClosee} className="modal_33_close-button">Закрыть</button>
            </div>,
                this.root
        );
    }
}

class App32 extends React.Component{
    state = {
        isModalOPen:false
    };
    toggalModal = () =>{
        this.setState(state =>({isModalOPen:!state.isModalOPen}));
    }

    render(){
        return(
            <div className="appp31">
                <header>
                    <img alt="React logo"/>
                    <h1>React 16</h1>
                </header>
                <main>
                    {ReactDOM.createPortal(
                        <h1>Portal</h1>,
                        document.getElementById('test31_portal')
                    )}
                </main>
                <button onClick={this.toggalModal}>Открыть портал</button>
                {this.state.isModalOPen &&
                <Modal_33 onClosee={this.toggalModal}>
                    <h1>Типо модал</h1>
                </Modal_33>}

                {this.state.isModalOPen && ReactDOM.createPortal(
                    <Modal_34_3 onClosee={this.toggalModal}>
                        <h1>Типо модал "ReactDOM.createPortal"</h1>
                    </Modal_34_3>,
                    document.getElementById('test33_porta3')
                )}
                {this.state.isModalOPen && <Modal_34_3 onClosee={this.toggalModal}>
                        <h1>Modal_34_3 createPortal</h1>
                    </Modal_34_3>
                    }
                {this.state.isModalOPen && <Modal_35_4 onClosee={this.toggalModal}>
                    <h1>Modal_34_4 createPortal может не будет div "test35_porta4"  сам создаст и сам удалит div </h1>
                </Modal_35_4>
                }
            </div>
        )
    }
}
ReactDOM.render(
    <App32 />,
    document.getElementById('test32')
);


class MyComponent30 extends React.Component {
    constructor(props) {
        super(props);

        this.inputRef = React.createRef();
    }

    render() {
        return <input type="text" ref={this.inputRef} />;
    }
        componentDidMount() {
        this.inputRef.current.focus();
    }

}

ReactDOM.render(
    <MyComponent30 />,
    document.getElementById('test30')
);



class CustomTextInput extends React.Component {
    constructor(props) {
        super(props);
        // create a ref to store the textInput DOM element
        this.textInput = React.createRef();

        this.focusTextInput = this.focusTextInput.bind(this);
    }

    focusTextInput() {
        // Explicitly focus the text input using the raw DOM API
        // Note: we're accessing "current" to get the DOM node
        this.textInput.current.focus();


    }
    render() {
        // tell React that we want to associate the <input> ref
        // with the `textInput` that we created in the constructor


        return (
            <div>
                <input
                    type="text"
                    ref={this.textInput} />

                <input
                    type="button"
                    value="Focus the text input"
                    onClick={this.focusTextInput}
                />
            </div>
        );
    }
}

ReactDOM.render(
    <CustomTextInput />,
    document.getElementById('test29')
);




function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    );
}

function Dialog(props) {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                {props.title}
            </h1>
            <p className="Dialog-message">
                {props.message}
            </p>
            {props.children}
        </FancyBorder>
    );
}

class SignUpDialog extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.state = {login: ''};
    }
    handleChange(e) {
        this.setState({login: e.target.value});
    }
    handleSignUp() {
        alert(`Welcome aboard, ${this.state.login}!`);
    }
    render() {
        return (
            <Dialog title="Mars Exploration Program"
                    message="How should we refer to you?">
                <input value={this.state.login}
                       onChange={this.handleChange}/>
                <button onClick={this.handleSignUp}>
                    Sign Me Up!
                </button>
            </Dialog>
        );
    }
}

ReactDOM.render(
    <SignUpDialog />,
    document.getElementById('test28')
);





function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    );
}

function WelcomeDialog() {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                Welcome
            </h1>
            <p className="Dialog-message">
                Thank you for visiting our spacecraft!
            </p>
        </FancyBorder>
    );
}

ReactDOM.render(
    <WelcomeDialog />,
    document.getElementById('test27')
);






ReactDOM.render(
    <CalculatorTemperature />,
    document.getElementById('test26')
);


class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value // numberOfGuests: value = [name]: value ; [name] = <input name="numberOfGuests" name
            //     подставляеться name атрибута  [name]// numberOfGuests: value
            // var partialState = {};
            // partialState[name] = value;
            // this.setState(partialState);

        });
    }

    render() {
        return (
            <form>
                <label>
                    Is going:
                    <input
                        name="isGoing"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Number of guests:
                    <input
                        name="numberOfGuests"
                        type="number"
                        value={this.state.numberOfGuests}
                        onChange={this.handleInputChange} />
                </label>
            </form>
        );
    }
}

ReactDOM.render(
    <Reservation />,
    document.getElementById('test25')
);




class FlavorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'coconut'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Pick your favorite flavor:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
ReactDOM.render(
    <FlavorForm />,
    document.getElementById('test24')
);




function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        <li key={number.toString()}>
            {number}
        </li>
    );
    return (
        <ul>{listItems}</ul>
    );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
    <NumberList numbers={numbers} />,
    document.getElementById('test23')
);
//
// handleToggleClick() {
//     this.setState(prevState => ({
//         showWarning: !prevState.showWarning
//     }));
// }

// // Correct
// this.setState((prevState, props) => ({
//     counter: prevState.counter + props.increment
// }));
// Мы использовали функцию стрелки выше, но она также работает с регулярными функциями:
//
// // Correct
//     this.setState(function(prevState, props) {
//         return {
//             counter: prevState.counter + props.increment
//         };
//     });



class Wrapper_ToDoListV8 extends React.Component {
    render() {
        return (
            <div>
                <ToDoListV8/>

            </div>
        );
    }
}

ReactDOM.render(
    <Wrapper_ToDoListV8 />,
    document.getElementById('test22')
);

class Wrapper_ToDoListV7 extends React.Component {
    render() {
        return (
            <div>
                <ToDoListV7/>

            </div>
        );
    }
}

ReactDOM.render(
    <Wrapper_ToDoListV7 />,
    document.getElementById('test21')
);

class Wrapper_ToDoListV6 extends React.Component {
    render() {
        return (
            <div>
                <ToDoListV6/>

            </div>
        );
    }
}

ReactDOM.render(
    <Wrapper_ToDoListV6 />,
    document.getElementById('test20')
);


class Wrapper_ToDoListV5 extends React.Component {
    render() {
        return (
            <div>
                <ToDoListV5/>

            </div>
        );
    }
}

ReactDOM.render(
    <Wrapper_ToDoListV5 />,
    document.getElementById('test19')
);



class Wrapper_ToDoList4 extends React.Component {
    render() {
        return (
            <div>
                <ToDoListV4/>

            </div>
        );
    }
}

ReactDOM.render(
    <Wrapper_ToDoList4 />,
    document.getElementById('test18')
);


class Wrapper_ToDoList3 extends React.Component {
    render() {
        return (
            <div>
                <ToDoListV3/>

            </div>
        );
    }
}

ReactDOM.render(
    <Wrapper_ToDoList3 />,
    document.getElementById('test17')
);



var imagess1 = ['http://bipbap.ru/wp-content/uploads/2017/09/1164905.jpg',
    'http://multoigri.ru/images/desc/igri-mashinki-01.jpg',
    'http://lifeglobe.net/x/entry/0/1a-13.jpg',
    'http://vodi.su/wp-content/uploads/2014/07/McLaren-P1.jpg',
];


var imagess2 = ['https://wallpapersite.com/images/wallpapers/beautiful-girl-3840x2160-fog-4k-3841.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdRSbFX1XoU9uFeWQW--RS-u-Z7WfsrGiJIDNyZ823c-nXHi50ow',
    'https://i.ytimg.com/vi/t1mwQ2rTW_A/maxresdefault.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHv7anxxl0NyfGEscyjIsLo_KesP1Iw9sLwfLcL-ntDcYgIadYwA',
]

class Wrapper_ToDoList2 extends React.Component {
    render() {
        return (
            <div>
                <ToDoList2/>

            </div>
        );
    }
}

ReactDOM.render(
    <Wrapper_ToDoList2 />,
    document.getElementById('test16')
);

class Wrapper_ToDoList extends React.Component {
    render() {
        return (
            <div>
                <ToDoList1/>

            </div>
        );
    }
}

ReactDOM.render(
    <Wrapper_ToDoList />,
    document.getElementById('test15')
);

class Wrapper_SliderV1 extends React.Component {
    render() {
        return (
            <div>
                <SliderV1 images={imagess1} index={0}/>
                <SliderV1 images={imagess2} index={1}/>
                <SliderV1 images={imagess2} index={3}/>
            </div>
        );
    }
}

ReactDOM.render(
    <Wrapper_SliderV1 />,
    document.getElementById('test14')
);


class Wrapper_Calculator2 extends React.Component {
    render() {
        return (
            <div>
              <Calculator2 />
            </div>
        );
    }
}

ReactDOM.render(
    <Wrapper_Calculator2 />,
    document.getElementById('test13')
);




class Game extends Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}
class Board extends React.Component {
    renderSquare(i) {
        return <Square value={i} />;
    }
    render() {
        const status = 'Next player: X';
        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}


class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }
    render() {
        return (
            <button className="square" onClick={() => this.setState({value: 'X'})}>
                {this.state.value}
                {this.props.value}
            </button>
        );
    }
}
ReactDOM.render(
    <Game />,
    document.getElementById('root')
);


class Circle extends React.Component{
    constructor(props) {
        super();
        this.state = {
            value: props.value,
        };
        }
    render(){
        return(
              <div className="circle" >
                <textarea id="circle_textarea" value={this.props.value}></textarea>
             </div>
        )
    }
}


class Modal extends React.Component{
    constructor (props) {
        super(props)
        this.state = {
            day:props.day,
            modal:props.modal,
            value: props.value,
        };
        this.parentDeleteCalback2 =  props.deleteCallback2;
        this.parentDeleteCalback3 =  props.deleteCallback3;
        }
    deleteModal_2 (days)  {
        this.parentDeleteCalback2();
    }
    deleteModal_3 (days)  {
        this.parentDeleteCalback3(this.state.value);
    }
    handleChange = (e) => {
        this.setState({value: e.currentTarget.value})
    }
    render(){
        return(
            <div className="modal" >
                <div className="close" onClick={this.deleteModal_2.bind(this)}>X</div>
                <h2>План тренировки</h2>
                <textarea autoFocus id="textarea_id" value={this.state.value} onChange={this.handleChange}>
                </textarea>
                <button type="button" onClick={this.deleteModal_3.bind(this,this.state.value)}>Сохранить</button>
            </div>
        )
    }
}

class Wrapper_week2 extends React.Component{
    constructor (props){
        super(props)
        this.state = {
            days: [
                {   number: 23,
                    modal:false,
                    value:null,
                    circle: false,
                },
                {   number:24,
                    modal:false,
                    value:null,
                    circle: false,
                },
                {   number: 25,
                    modal:false,
                    value:null,
                    circle: false,
                },
                {   number:26,
                    modal:false,
                    value:null,
                    circle: false,
                },
                {   number:27,
                    modal:false,
                    value:null,
                    circle: false,
                },
                {   number:28,
                    modal:false,
                    value:null,
                    circle: false,
                },
                {   number:1,
                    modal:false,
                    value:null,
                    circle: false,
                }
            ]
        };
    }
    deleteModal(day){
        if (day.modal === false) {
            day.modal = <Modal deleteCallback2={this.deleteModal_2.bind(this,day)}
                               deleteCallback3={this.deleteModal_3.bind(this,day)}
                               value={day.value}/>
        //     console.log(day.modal)
        //     console.log(...this.state.days)
     }
        else {
            day.modal = false;
    }
    this.forceUpdate();
        }
    deleteModal_2(day){
        day.modal = false;
        this.forceUpdate();
        }
    deleteModal_3(day,value){
        day.value = value;
        day.modal = false;
        day.circle = <Circle value={day.value}/>
        this.forceUpdate();
    }
    render(){
        return(
                <div className="wrapper_week2">
                    <h1>Первая неделя</h1>
                    <div className="table_week">
                        <div className="days_week">
                            <div className="days">Sun</div>
                            <div className="days">Mon</div>
                            <div className="days">Tue</div>
                            <div className="days">Wed</div>
                            <div className="days">Thu</div>
                            <div className="days">Fri</div>
                            <div className="days">Sat</div>
                        </div>
                        <div className="number_week">
                            {this.state.days.map((day,index) => {
                                return <div className="number" key={index}>
                                <div className="number1" onClick={this.deleteModal.bind(this,day)}>
                                    <span>{day.number}</span>
                                    {day.circle}
                                </div>
                                    {day.modal}
                                    </div>
                            })
                            }
                            </div>
                    </div>
                </div>
        )
    }
}
ReactDOM.render(
    <Wrapper_week2 />,
    document.getElementById('rood2')
);




// class Week_1 extends React.Component {
//     renderSquare(i) {
//         return <Square />;
//     }
//     constructor (props){
//         super(props)
//         this.state = {
//             isOpen: false,
//         }
//     }
//     render() {
//         const disi_body = this.state.isOpen && <Modal />
//         return(
//             <div className="container2">
//                 <h1>Первая неделя </h1>
//                 <div className="table_week">
//                     <div className="days_week">
//                         <div className="days">Sun</div>
//                         <div className="days">Mon</div>
//                         <div className="days">Tue</div>
//                         <div className="days">Wed</div>
//                         <div className="days">Thu</div>
//                         <div className="days">Fri</div>
//                         <div className="days">Sat</div>
//                     </div>
//                     <div className="number_week">
//                         <div className="number" onClick={this.handleClick}><span>23</span></div>
//                         <div className="number"><span> <div className="circle"></div>24</span></div>
//                         <div className="number"><span>25{this.renderSquare(1)}</span></div>
//                         <div className="number"><span>26{this.renderSquare(2)}</span></div>
//                         <div className="number"><span>27{this.renderSquare(3)}</span></div>
//                         <div className="number"><span>28{this.renderSquare(4)}</span></div>
//                         <div className="number"><span>21{this.renderSquare(5)}</span></div>
//                         {disi_body}
//                     </div>
//                 </div>
//             </div>
//         )
//         // function disoon(){
//         //     this.setState({
//         //         isOpen: true
//         //     })
//         // }
//     }
//
//     handleClick =() => {
//         this.setState({
//             isOpen: true
//         })
//         alert(this);
//         console.log(this)
//     }
//
// }
//
// ReactDOM.render(
//     <Week_1 />,
//     document.getElementById('test_week')
// );
//
//
//
// class Modal extends React.Component{
//     constructor (props){
//         super(props)
//         this.state = {
//             isOpen: props,
//
//         }
//     }
//     render(){
//         return(
//             <div className="modal">
//                 <div className="close" onClick={this.handleClick2}>X</div>
//                 <h2>План тренировки </h2>
//                 <textarea autoFocus id="textarea_id">
//                 </textarea>
//                 <button type="button" >Сохранить</button>
//             </div>
//         )
//     }
//     handleClick2 =() => {
//         this.setState({
//             isOpen: false
//         })
//         alert(this);
//         console.log(this)
//     }
// }





//Деструктивное присваивание массивов

// let langues = ['JavaSript','PHP','Python','Ruby'];
// // let js = langues[0];
// // let php = langues[1];
// // let py = langues[2];
// // let rb = langues[3];
//
// let js,php,py,rb;
// [js,php,py,rb] = langues;
// console.log(js,php,py,rb)

// let scores = [3,4]
// let [low,mid,high = 5] = scores;
// console.log(low,mid,high)
//
// let scores2 = [2,4,4,1]
// let [low2,...rest2] = scores2;
// console.log(low2,rest2)

// let scores3 = [3,4,[23,2]]
// let [low3,mid3,high3] = scores3;
// console.log(low3,mid3,high3)
//
// let scores4 = [3,4,[23,2]]
// let [low4,mid4,[high4,disi4]] = scores4;
// console.log(low4,mid4,high4,disi4)
//
// function computeScore([low5,mid5]) { //[low5,mid5] - один елемент просто разбил его на масив
//     console.log(low5,mid5)
// }
// computeScore([5,6])//[5,6] - это один елемент

// function getScores6() {
//     return[3,4,5]
// }
// let scores6 = getScores6();
// console.log(scores6)
// let [low6,mid6,high6] = scores6;//getScores6();
// console.log(low6,mid6,high6)

// let yes = 'Yes';
// let no = 'No';
//
// [yes,no] = [no,yes];
// console.log('Yes is',yes);
// console.log('No is',no);
//Деструктивное присваивание объектов


// 'use strict';
//
// let options = {
//     title: "Меню",
//     width: 100,
//     height: 200
// };
// let {width: w, height: h, title} = options;
//
// alert(title);  // Меню
// alert(w);      // 100
// alert(h);      // 200

// let person = {
//     firstname:'John',
//     lastname:'Doe'
// }
// let firstname =  person.firstname;
// let lastname= person.lastname
// let {firstname,lastname} = person// этому свойсту дают перменную название свойства


//let {firstname:first,lastname:last} = person;// этому свойсту дают перменную,переменная равна свойству
// let {['first' + 'name']:first,lastname:last,age = 25} = { firstname:'John', lastname:'Doe'} //тоже самое что и выше
//  console.log(first,last,age)

// let user = {
//     firstname:'John',
//     lastname:'Doe',
//     social:{
//         facebook:{
//           monako: ' obbo'
//         },
//         twitter:'jdoe',
//         vk:'vk'}}
// let {['first' + 'name']:first,lastname:last,social:{twitter},social:{vk:tipoVK},social:{facebook:{monako}},age = 25} = user //тоже самое что и выше
// console.log(first,last,twitter,tipoVK,monako,age)

// function post(url,{data:{firstname,lastname},cache}) {
//     console.log(firstname,lastname,cache);
// }
// let user = {
//     firstname:'John',
//     lastname:'Doe',
//     social:{
//         facebook:{
//           monako: ' obbo'
//         },
//         twitter:'jdoe',
//         vk:'vk'}}
// let result = post('api/users',{data: user,cache:false})
// function getUserInfo() {
//     return{
//         firstname:'John',
//         lastname:'Doe',
//         social:{
//             facebook:{
//                 monako: ' obbo'
//             },
//             twitter:'jdoe',
//             vk:'vk'}
//         }
//     }
// let {firstname,lastname,social:{twitter}} =getUserInfo();
// console.log(firstname,lastname,twitter)

//Promise обещания
// function applyForVisa(documents,resolve){
//     console.log('Обработка заявления...');
//     setInterval(function () {
//         let visa = {};
//         resolve(visa);
//     }, 2000)
// }
// applyForVisa({},function (visa) {
//         console.info('Виза получена')
// },)

// function applyForVisa(documents,resolve,reject){
//     console.log('Обработка заявления...');
//     setInterval(function () {
//         Math.random() > .5 ? resolve({}) : reject('В визе откзано:нехватка документов');
//         }, 2000)
// }
// applyForVisa({},function (visa) {
//         console.log(visa);
//     console.info('Виза получена')
// },
// function (reason) {
//     console.error(reason);
// })

// function applyForVisa(documents){
//     console.log('Обработка заявления...');
//     let promise = new Promise(function (resolve,reject) {
//     setTimeout(function () {
//         Math.random() > .5 ? resolve({}) : reject('В визе откзано:нехватка документов');
//         }, 2000);
//     });
//     return promise;
// }
// applyForVisa({})
//     .then(
//         function(visa){
//             console.info('Виза получена');
//         },
//         function (reason) {
//             console.error(reason);
//         });

// function getVisa(visa) {
//    console.info('Виза получена');
//    //return visa;
//    // return new Promise(function (resolve, reject) { // === return visa  // === return Promise.resolve(visa)
//    //     resolve(visa);
//    // })
//    // return Promise.resolve(visa) //  === return new Promise(function (resolve, reject) { // === return visa  // === return Promise.resolve(visa)resolve(visa);})
//     return new Promise(function (resolve, reject) { // === return visa  // === return Promise.resolve(visa)
//         setTimeout(()=> resolve(visa),2000)
//     })
// }
//
// function bookHotel(visa) {
//     console.log(visa);
//     console.log('Бронируем отель');
//     //return {};// вернет по сути тоже самое как была раньше visa пустым обектом
//     // return new Promise(function (resolve, reject) { // === return Promise.reject('')
//     //     reject('Нет мест') //прерывает выполение следуюшего .then будет уже не выполнили обещания
//     // })
//     return Promise.reject('')
//
// }
// function buyTickkets(booking) {
//     console.log('Покупаем билет');
//     console.log('Бронь' + booking)
//
// }
//
// function applyForVisa(documents){
//     console.log('Обработка заявления...');
//     let promise = new Promise(function (resolve,reject) {
//         setTimeout(function () {
//             let disi45 =  Math.random()
//             disi45 > .5 ? resolve({}) : reject('В визе откзано:нехватка документов'); //одно обещание
//             console.log(disi45)
//         }, 2000);
//     });
//     return promise;
// }
// applyForVisa({})
//
//     .then(visa =>{console.info('Виза получена')
//             console.log(visa)
//             return visa;//передаю - vasa в следующий .then только для следующего
//             },
//         // reason => {
//         //     console.error(reason + '11');
//         // }
//         )
//     .then(getVisa)
//     .then(bookHotel)
//     .then(buyTickkets)
//     .catch(error => console.error(error + ' 22'))
//     .then(()=> console.log('Я еще тут'))



//Стрелочные функции
// let person = {
//     name: 'Bob',
//     greet: function () { //this будет person
//         console.log('Hello, my name is ' + this.name);
//         console.log(this)
//     }
// };
// person.greet();
//
// let person3 = {
//     name: 'Bob',
//     greet: function () {
//         setTimeout(function () {  //будет this window иза setTimeout бо window.setTimeout
//             console.log('Hello, my name is ' + this.name);  //будет this window
//             console.log(this)
//         },2000);
//     }
// };
// person3.greet();
//
// let person4 = {
//     name: 'Bob',
//     greet: function () {
//         var that = this; //this = that будет person
//         setTimeout(function () {//this = that будет person не меняет значение  window.setTimeout не влияет на this бо уже ему призвоенно значение that
//             console.log('Hello, my name is ' + that.name);
//             console.log('"that" is',that)
//             console.log('"this" is',this)
//         },2000);
//     }
// };
// person4.greet();
//
// let person5 = {
//     name: 'Bob',
//     greet: function () {
//         window.setTimeout(() => { //this всегда будет   person
//             console.log('Hello, my name is ' + this.name);
//             console.log(' person5"this" is',this)
//         },2000);
//     }
// };
// person5.greet();
//
//
// let person2 = {
//     name: 'Bob',
//     greet2:  () => { //this undefined
//         console.log('Hello, my name is ' + this.name);
//         console.log(this)
//     }
// };
// person2.greet2();

// let Tassk =() => console.log('Creating a task');
//
// let task = new Tassk(); //работает но наче не должно работать    с трелочной функции

// Tassk.bind(); наче как не работает с трелочной функции
// Tassk.call();
// Tassk.apply();

//
//
// let numbers = [1,2,3,4,5,6,7,8,9,10,11]
// let sum = 0;
// // numbers.forEach(function (num) {
// //     sum += num;
// // });
// numbers.forEach(num2 => sum += num2);
//
// let squared = numbers.map(n => n * n)
//
// console.log(sum);
// console.log(squared);





// function add(x,y) {
//     return x + y;
// }
// console.log(add(5,2))

// let add = (x,y) => x + y;
//
// let square = function(x){
//     return x*x;
// }
// let square2 = (x) => x * x;
// let square3 = x => x * x * x; //если один парамент то круліе скобки можно убрать
// let giveMeAnswer = function(){
//     return 42;
// }
// let giveMeAnswer2 = () => 43;
//
// let log = function (){
//     console.log('Logging');
// }
// let log2 = () => console.log('Logging');
//
// let multiply = function(x,y){
//     let result = x * y;
//     return result;
// }
// let multiply2 = (x,y) => { //если в теле стрелочной функции несколько строк то должні использовать фигурные скобки
//     let result = x * y;
//     return result;
// }
// let getPerson = function(){
//     return { name:'John'};
// }
// let getPerson2 = () =>  ({ name:'John2'}); //нужно обернуть в круглые скопки
//
// (function () {
//     console.log('IIFe');
// })(); //сразу сама себя вызывает
// (() => console.log('IIFe2'))(); //сразу сама себя вызывает
//
//
// console.log(typeof add)
// console.log(add(2,5))
// console.log(square(3))
// console.log(square2(3))
// console.log(square3(3))
// console.log(giveMeAnswer())
// console.log(giveMeAnswer2())
// log();
// log2();
// console.log(multiply(3,4));
// console.log(multiply2(3,4));
// console.log(getPerson());
// console.log(getPerson2());

//Наследование
// class Taskk {
//     constructor(title){
//         this.title2 = title;
//         this.done = false;
//         Taskk.count += 1;
//         console.log('Создание задачи');
//     }
//     get title(){
//         return this.title2;
//     }
//     set title(value){
//         this.title2 = value;
//     }
//     static getDefaultTitle(){
//         return 'Задача';
//     }
//     complete(){
//         this.done = true;
//         console.log(`Задача "${this.title}" выполнена`);
//     }
//
// }
// class SubTask extends Taskk{
//     constructor(title,parent){
//         super(title);
//         this.parent = parent;
//         console.log('Создание подзадачи')
//     }
//     complete(){
//         super.complete();//
//         console.log(`Подзадача "${this.title}" выполнена`);
//     }
// }
// Taskk.count = 0;
//
// let taskk = new Taskk('Изучить JavaSript');
// let subtask = new SubTask('Изучить ES6',taskk);
//
//
// taskk.complete();
// subtask.complete();
//
// console.log(taskk);
// console.log(subtask);
//
// console.log(subtask instanceof SubTask );
// console.log(subtask instanceof Taskk );
//
// console.log(SubTask.getDefaultTitle());
// console.log(SubTask.count);

//Классы
// class Task { //как функция может быть только один конструктор,если будет больше будет ошибка
//     constructor(title2 = Task.getDefaultTitle()){
//         this.title2 = title2;
//         this.done2 = false;
//         Task.count += 1;
//         console.log('Создание задачи');
//         //свойство обекта this всегда пишеться в конструкторе и this єто свойсто єтой функции(обекта)
//         this.title = 'Убрать комнату';
//         }
//         get done(){ ///get set не должы совпадать с свойсвом обектом
//             return this.done2 === true ? 'Выполнена' : 'Не выполнена';
//         }
//         set done(value){
//             if(value !== undefined && typeof value === 'boolean'){
//                 this.done2 = value;
//             }else {
//                 console.error('Ошибка! Укажите значение true или false')
//             }
//         }
//         complete(){
//         this.done = true;
//         console.log(`Задача "${this.title}" выполнина`)
//         }
//         static getDefaultTitle(){
//             return 'Задача'
//         }
//
// }
// Task.count = 0 //создание переменной
//
// let task1 = new Task('Диси диси');
// let task2 = new Task('Купить продукты')
// let task3 = new Task();
// let task4  = new Task('Убрать комнату');
//
// console.log(task1.title2) // выполняеться хотя constructor(title2 = ''){ что бы работало надо поставить поменяли прост
// console.log(task1.title) // выводит title которое задано в конструкторе
// console.log(task2.title2) // выполняеться хотя  constructor(title2 = ''){ что бы работало надо поставить поменяли прост
// task2.complete()
// console.log(Task.count)
// console.log(task3.title2) //если не поставлена значение title2 то будет работать функция если не будет поставленно значение
// console.log(task4.done, task4.done2);
// console.log(task4.done, task4.done2);

//console.log(typeof Task); // функция
//console.log(typeof task1); // обект
//console.log(task1 instanceof Task) //проврека предстоителя класса





// let [title1 , title,toto] = "Юлий Цезарь Император Рима".split(" ");
//
// alert(toto); // Император


//Деструктуризация
// let firstName = 'Bill',
//     lastName = 'Gates',
//     email = 'billgates@gmail.com';
// let person = { //firstName,lastName,email передало их зачение как в переменных
//     firstName_p:firstName,
//     lastName_p:lastName,
//     email_p:email,}
// let person2 = { //firstName,lastName,email передало их зачение как в переменных
//     firstName,
//     lastName,
//     email,
//     sayHello: function () {
//         console.log(`Hi my name is ${this.firstName} ${this.lastName}`)
//     },
//     sayHello2() { // тоже самое что и первое как функиця,называеться методом
//         console.log(`Hi my name is 2 ${this.firstName} ${this.lastName}`)
//     }
// }
// console.log(person2);
// person2.sayHello2();
//
// console.log(person2.firstName); //вызов свойсва то самое что и крадратные скобки
// console.log(person2['firstName']);//вызов свойсва то самое что и точка
//
// let propati = 'lastName'; //
// console.log(person2[propati]); //person2['lastName']
//
// function createCar(property,value) {
//     var car = {};
//     car[property] = value;
//     return car;
// }
// console.log(createCar('vin',1)); // car походу без название переменной,тоже самое что и var car{ vin = 1,}
// function createCar2(property,value) {
//     return{
//         [property]: value,
//         ['_' + property]: value,
//         [property.toUpperCase()]: value,
//         ['get' + property](){
//             return this[property];
//         }
//     };
// }
// console.log(createCar2('vin',1)); //добавляет к елементу другие свойства и значение что в функции

// let person3 = { //firstName,lastName,email передало их зачение как в переменных
//     firstName,
//     lastName,
//     email,
//
// };
// Object.defineProperty(person3,'fullName',{
//    get: function () {
//        return this.firstName + ' ' + this.lastName;
//    },
//    set: function (value) {
//        this.firstName = value
//    }
//
// });
// console.log(person3);





// let browsers = ['Chrome','Firefox','Edge','Safari','Opera'];
// for(let browser in browsers){
//     console.log(browser); // выводит 0 1 2 3 4 сколько елементов есть в масиве только цифры с новой строки
// }
// for(let index in browsers){
//     console.log(browsers[index]); //  выводит содержание масива с новой строки
//
// }
// for(let index2 of browsers){
//     console.log(index2); // выводит 0 1 2 3 4 сколько елементов есть в масиве только цифры с новой строки
// }
// console.log(browsers)



// let name22 = 'Bill'
// let name223 = 'Nick'
// console.log(uperrName `Hello ${name22}`);
// function uperrName(literals, values)     {
//     return literals[0] + values.toUpperCase(); //пременяет значение для второй перменной удет с большой буквы и для других через ...
// }
//
//
//
// function add2(x,y) {
//     //console.log(`${x} + ${y} = ${parseInt(x) + parseInt(y) }`) //parseInt(x) - изменяет с трокового типа данный на числовой
// }
// add2(5,7)
// add2('5','7');
//
// function greet(name) {
//     //console.log(`Hello ${name}`.toUpperCase());
// }
// greet('Bill');
//
// function createEmail(to,from,subject,message) { //выводит с новой строки весь текст и перменными
//     // console.log(`
//     // To: ${to}
//     // From: ${from}
//     // Subject: ${subject}
//     // Message: ${message}
//     // `);
// }
// createEmail('disi@gmail.com','disssccon@gmail.com','Hello','How are you doing?');
//
//
//
// let staticLangues = ['C','C++','Java'];
// let dynamicLangues = ['JavaSript','PHP','Ruby'];
// let langues = [...staticLangues,'C#',...dynamicLangues,'Phython'];//... длина масива стала 8 как все елементов а была 4
// //console.log(langues);
// //alert(langues);
// function add(x,y,z) {
//     //console.log(x+y+z);
// }
// let numberss = [1,2,3];
// add(...numberss)




//this.state.comment = 'Hello';
//Вместо этого используйте setState():

// Correct
//this.setState({comment: 'Hello'});

// var materials = [
//     'Hydrogen',
//     'Helium',
//     'Lithium',
//     'Beryllium'
// ];
//
// console.log(materials.map(material => material.length));
// // expected output: Array [8, 6, 7, 9]



class Clock11 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date()};
        this.state.comment = 'Hello';
        }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    tick() {
        this.setState({
            date: new Date()
        });
    }
    render() {
        return (
            <div>
                <h1>Hello, world!{this.state.comment}</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}
ReactDOM.render(
    <Clock11 />,
    document.getElementById('test11')
);
//Когда <Clock />передано значение ReactDOM.render(), React вызывает конструктор Clockк мпонента. Поскольку Clock для отображения текущего времени он инициализирует this.stateобъект, включая текущее время. Позднее мы обновим это состояние.
//Затем React вызывает метод Clockк мпонента render(). Вот как React узнает, что должно отображаться на экране. Затем React обновляет DOM в соответствии Clockс результатами рендеринга.
//Когда Clockвыход вставляется в DOM, React вызывает componentDidMount()крючок жизненного цикла. Внутри этого Clockкомпонента пользователь просит браузер настроить таймер для вызова tick()метода компонента один раз в секунду.
//Каждую секунду браузер вызывает этот tick()метод. Внутри Clockкомпонента компонент планирует обновление пользовательского интерфейса путем вызова setState()с объектом, содержащим текущее время. Благодаря setState()вызову React знает, что состояние изменилось, и render()снова вызывает метод, чтобы узнать, что должно быть на экране. На этот раз this.state.dateв render()методе будет отличаться, и поэтому вывод рендеринга будет включать в себя обновленное время. React обновляет DOM соответственно.
//Если Clockкомпонент удаляется из DOM, React вызывает привязку componentWillUnmount()жизненного цикла, чтобы таймер был остановлен.


class Clock10 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }
    render() {
        return (
            <div>
                <h1>Hello111, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

ReactDOM.render(
    <Clock10 />,
    document.getElementById('test10')
);

function Clock8(props) {
    return (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {props.date.toLocaleTimeString()}.</h2>
        </div>
    );
}

function tick8() {
    ReactDOM.render(
        <Clock8 date={new Date()} />,
        document.getElementById('test9')
    );
}

setInterval(tick8, 1000);

function tick4() {
    const element4 = (
        <div>
            <h1>Hello, world!444</h1>
            <h2>It is44 {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(element4, document.getElementById('test4'));
}
setInterval(tick4, 1000 );

class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}
ReactDOM.render(
    <Welcome />,
    document.getElementById('test8')
);

// class Modal extends React.Component{
//     render(){
//         return(
//             <div className="modal">
//                 <div className="close" onClick={this.handleClick}>X</div>
//                 <h2>План тренировки </h2>
//                 <textarea autoFocus id="textarea_id" >
//
//                  </textarea>
//                 <button type="button" >Сохранить</button>
//             </div>
//         )
//     }
//
// }


function formatDate(date) {
    return date.toLocaleDateString();
}

function Comment(props) {
    return (
        <div className="Comment">
            <div className="UserInfo">
                <img
                    className="Avatar"
                    src={props.authorr.avatarUrl}
                    alt={props.authorr.name}
                />
                <div className="UserInfo-name">
                    {props.authorr.name}
                </div>
            </div>
            <div className="Comment-text">{props.text}</div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}

const comment = {
    date22: new Date(),
    text: 'I hope you enjoy learning React!',
    authorrr: {
        name: 'Hello Kitty',
        avatarUrl: 'http://placekitten.com/g/64/64',
    },
};
ReactDOM.render(
    <Comment
        date={comment.date22}
        text={comment.text}
        authorr={comment.authorrr}
    />,
    document.getElementById('test7')
);
//props - переменная  date = props.date  date={comment.date22}





function Welcome2(props) {
    return <h1>Hello, {props.name}</h1>;
}

function App2() {
    return (
        <div>
            <Welcome2 name="Sara" />
            <Welcome2 name="Cahal" />
            <Welcome2 name="Edite" />
        </div>
    );
}
ReactDOM.render(
    <App2 />,
    document.getElementById('test6')
);


function Welcome4(props) {
    return <h1>Hello, {props.name}</h1>;
}

const element5 = <Welcome4 name="Sara" />;
ReactDOM.render(
    element5,
    document.getElementById('test5')
);


class HelloMessage extends React.Component {
    render() {
        return (
            <div>
                Hello {this.props.name}
            </div>
        );
    }
}

ReactDOM.render(
    <HelloMessage name="Taylor" />,document.getElementById('props_name')
);








const name2 = 'Josh Perez22';
const element2 = <h1>Hello, {name2}</h1>;

ReactDOM.render(
    element2, document.getElementById('test2')
);



function formatName(user3) {
    return user3.firstName + ' ' + user3.lastName;
}

const user3 = {
    firstName: 'Harper',
    lastName: 'Perez'
};

const element3 = (
    <h1>
        Hello, {formatName(user3)}!
    </h1>
);

ReactDOM.render(
    element3,
    document.getElementById('test3')
);




// const element = (
//     <h1 className="greeting">
//         Hello, world!
//     </h1>
// );
//
// const element = React.createElement(
//     'h1',
//     {className: 'greeting'},
//     'Hello, world!'
// );
//
// // Note: this structure is simplified
// const element = {
//     type: 'h1',
//     props: {
//         className: 'greeting',
//         children: 'Hello, world!'
//     }
// };






//
// class Circle extends React.Component{
//     constructor(props) {
//         super();
//         this.state = {
//             value: props.value,
//         };
//         this.parentDeleteCalback =  props.deleteCallback;
//     }
//     deleteTask3(){
//         this.parentDeleteCalback(this.props.value);
//     }
//     render(){
//         return(
//             <div className="circle" onClick={this.deleteTask3.bind(this)}>
//                 <textarea id="circle_textarea" value={this.props.value}></textarea>
//             </div>
//         )
//     }
// }
//
// // ========================================
//
// ReactDOM.render(
//     <Game />,
//     document.getElementById('root')
// );
//
// class Modal extends React.Component{
//     constructor (props) {
//         super(props)
//         this.state = {
//             value: props.value,
//             isOpen:props.isOpen,
//             number1:10,
//         };
//         this.parentDeleteCalback =  props.deleteCallback;
//         this.handleChange = this.handleChange.bind(this);
//     }
//     deleteTask2 ()  {
//         this.parentDeleteCalback(this.state.value);
//     }
//
//     handleChange(e){
//         this.setState({value: e.currentTarget.value})
//     }
//     render(){
//         return(
//             <div className="modal" >
//                 <div className="close" >X</div>
//                 <h2>План тренировки {this.state.isOpen}</h2>
//                 <textarea autoFocus id="textarea_id" value={this.state.value} onChange={this.handleChange}>
//                 </textarea>
//                 <button type="button" onClick={this.deleteTask2.bind(this)}>Сохранить</button>
//             </div>
//         )
//     }
//     handleClick2 =(props) => {
//         //this.props = {isOpen : false,}
//         // this.setState({
//         //     this.props.isOpen:  false,
//         // })
//         this.props = {isOpen : false,}
//         //this.forceUpdate();
//         this.setState({
//             isOpen: !this.state.isOpen
//         })
//         alert(this.props);
//         console.log(this.props)
//         console.log(this)
//     }
// }
//
// class Wrapper_week2 extends React.Component{
//     constructor (props){
//         super(props)
//         this.state = {
//             isOpen: false,
//             circle: false,
//             modalIsOpen:false,
//             day: [
//                 {   number: 23,
//                     modal:false,
//                     isOpen:false,
//                 },
//                 {   number:24,
//                     modal:false,
//                     isOpen:false,
//                 },
//                 {   number: 25,
//                     modal:false,
//                     isOpen:false,
//                 },
//                 {   number:26,
//                     modal:false,
//                     isOpen:false,
//                 },
//                 {   number:27,
//                     modal:false,
//                     isOpen:false,
//                 },
//                 {   number:28,
//                     modal:false,
//                     isOpen:false,
//                 },
//                 {   number:1,
//                     modal:false,
//                     isOpen:false,
//                 }
//             ]
//         };
//
//     }
//     deleteModal(days){
//         //  if (this.state.modal === false) {
//         //      this.setState({
//         //          modal:<Modal deleteCallback={this.deleteTask.bind(this)}/>,
//         //          modalIsOpen: 1,
//         //      })
//         //  }
//         // if (this.state.modalIsOpen === 1) {
//         //      this.setState({
//         //          modalIsOpen: 2,
//         //          modal: false,
//         //          circle: <Circle value={value}/>
//         //      })
//         //  }
//         //  if (this.state.modalIsOpen === 2) {
//         //      this.setState({
//         //          modal: <Modal deleteCallback={this.deleteTask.bind(this)} value={value}/>,
//         //      })
//         //  }
//
//         if (days.modal === false) {
//             days.modal = <Modal deleteCallback={this.deleteModal.bind(this)}/>,
//                 days.number2 = 1
//         }
//         else {
//             days.modal = false;
//         }
//         this.forceUpdate();
//     }
//     render(){
//         return(
//             <div className="wrapper_week2">
//                 <h1>Первая неделя</h1>
//                 <div className="table_week">
//                     <div className="days_week">
//                         <div className="days">Sun</div>
//                         <div className="days">Mon</div>
//                         <div className="days">Tue</div>
//                         <div className="days">Wed</div>
//                         <div className="days">Thu</div>
//                         <div className="days">Fri</div>
//                         <div className="days">Sat</div>
//                     </div>
//                     <div className="number_week">
//                         {this.state.day.map((days) => {
//                             return <div className="number" onClick={this.deleteModal.bind(this,days)}>
//                                 <span>{days.number}</span>
//                                 {days.modal}
//                             </div>
//
//                         })
//                         }
//                         {/*<div className="number" onClick={this.deleteTask.bind(this)}>*/}
//                         {/*<span >23</span>*/}
//                         {/*{this.state.circle}*/}
//                         {/*</div>*/}
//                         {/*{this.state.modal}*/}
//                     </div>
//                 </div>
//
//             </div>
//         )
//     }
// }
// ReactDOM.render(
//     <Wrapper_week2 />,
//     document.getElementById('rood2')
// );

//window.open открыть новое або всплывающее окно;;var newWin = window.open("about:blank", "hello", "width=200,height=200");  newWin.document.write("Привет, мир!");
//window.closed Свойство window.closed равно true, если окно закрыто. Может быть использовано, чтобы проверить, закрыл ли посетитель попап.




// Simulate Имитировать отправку событий на узле DOM с дополнительными eventDataданными о событиях.
// renderIntoDocument() Отобразить элемент React в отдельный узел DOM в документе. Для этой функции требуется DOM.
// mockComponent()
// isElement(element) Возвращает, trueесли elementесть какой-либо элемент React.
// isElementOfType( element,componentClass) Возвращает, trueесли elementявляется элементом React, тип которого имеет значение React componentClass.
// isDOMComponent(instance  ) Возвращает, trueесли instanceявляется компонентом DOM (например, a <div>или <span>).
// isCompositeComponent(instance) Возвращает, trueесли instanceявляется определяемым пользователем компонентом, таким как класс или функция.
// isCompositeComponentWithType( instance,componentClass) Возвращает, trueесли instanceэто компонент, тип которого имеет значение React componentClass.
// findAllInRenderedTree( tree,test) Пройдите все компоненты treeи скопируйте все компоненты, где test(component)есть true. Это не так полезно само по себе, но оно используется как примитив для других тестовых приложений.
// scryRenderedDOMComponentsWithClass( tree,className) Например, scryRenderedDOMComponentsWithClass()но ожидает, что будет один результат, и вернет тот один результат, или выдает исключение, если есть другое количество совпадений, кроме одного.
// findRenderedDOMComponentWithClass(tree,className) Находит все элементы DOM компонентов в визуализированном дереве, которые являются компонентами DOM с совпадением имени тега tagName.
// scryRenderedDOMComponentsWithTag(tree,componentClass) Например, scryRenderedDOMComponentsWithTag(tree,tagName)но ожидает, что будет один результат, и вернет тот один результат, или выдает исключение, если есть другое количество совпадений, кроме одного.
// findRenderedDOMComponentWithTag(tree,componentClass) Находит все экземпляры компонентов с типом, равным componentClass.
// scryRenderedComponentsWithType()
// findRenderedComponentWithType()Находит все экземпляры компонентов с типом, равным componentClass.








//не рекомендуеться
//componentWillReceiveProps(nextProps), которая вызывается при обновлении объекта props. Новые значения этого объекта передаются в функции в качестве параметра. Как правило, в этой функции устанавливаются те свойства компонента, в том числе из this.state, которые зависят от значений из props.
//Обратите внимание, что React может вызывать этот метод, даже если свойства не изменились, поэтому обязательно сравните текущие и следующие значения, если вы хотите обрабатывать изменения. Это может произойти, когда родительский компонент заставляет ваш компонент переотрисовываться.

//shouldComponentUpdate(nextProps, nextState): вызывается каждый раз при обновлении объекта props или state. В качестве параметра передаются новый объект props и state. Эта функция должна возвращать true (надо делать обновление) или false (игнорировать обновление). По умолчанию возвращается true. Но если функция будет возвращать false, то тем самым мы отключим обновление компонента, а последующие функции не будут срабатывать.
//shouldComponentUpdate(nextProps, nextState) проверка если состояния совподают перерендоринг, forceUpdate() будет то forceUpdate() уже перендорит все
//shouldComponentUpdate(nextProps, nextState) Этот метод существует только как оптимизация производительности
//shouldComponentUpdate(){} даное собития позволяет оптимизировать рендер компонента в зависимисти от того когда его надо обновлять а когда нет;
//возвращает false, то методы componentWillUpdate(), render() и componentDidUpdate() не будут вызываться. //если в нем поставить return false то обновляться компонент не будет,по умолчанию стоит return tru

//return true надо возращать если не возращать перерисовки не произайдет

//componentWillUpdate(nextProps, nextState): вызывается перед обновлением компонента (если shouldComponentUpdate возвращает true)
//componentWillUpdate(){} которое происходить сразуже перед обновлением нашего елемента;сколько раз будет выплняться бновление елемента столько раз и будет выполняться эта функция


//render

//componentDidUpdate(prevProps, prevState, snapshot) Вызывается сразу после обновления. Этот метод не вызывается для первоначального рендеринга.
//componentDidUpdate(prevProps, prevState): вызывается сразу после обновления компонента (если shouldComponentUpdate возвращает true). В качестве параметров передаются старые значения объектов props и state.



//не рекомендуеться
//componentWillMount(){ //вызывается непосредственно перед рендерингом компонента this.root = document.createElement('div');document.body.appendChild(this.root);}
//componentWillMount() componentWillMount() вызывается непосредственно перед монтированием. Он вызывается перед render(), поэтому синхронная установка состояния в этом методе не приведет к повторному рендерингу. Обычно вместо этого метода мы рекомендуем использовать constructor().
//Обычно вместо этого метода мы рекомендуем использовать constructor()

//componentDidMount(): вызывается после рендеринга компонента. Здесь можно выполнять запросы к удаленным ресурсам
//componentDidMount()будет вызываться еще раз если компонет будет создан еще раз

//componentWillUnmount(){ //вызывается после удалением компонента из DOM(пример при добаления класса при нажатии но клас уже добавлен делаешь проверку и оно не перерендариваеться )}return this.state.title !== this.state.title выполняеться после удаления своего класса document.body.removeChild(this.root);}





//static getDerivedStateFromProps(props, state) вызывается непосредственно перед вызовом метода рендеринга, как на начальном монтировании, так и на последующих обновлениях. Он должен вернуть объект для обновления состояния или null, чтобы ничего не обновлять.
//componentDidCatch(error, info) Границы ошибок - это компоненты React, которые улавливают ошибки JavaScript в любом месте их дочернего дерева компонентов, регистрируют эти ошибки и отображают резервный интерфейс вместо разбитого дерева компонентов. Границы ошибок ломают ошибки при рендеринге, в методах жизненного цикла и в конструкторах всего дерева под ними.
//componentDidCatch() Этот метод вызывается при возникновении ошибки во время рендеринга, в методе жизненного цикла или в конструкторе любого дочернего компонента.



// static getDerivedStateFromProps()
// getSnapshotBeforeUpdate()


//this.forceUpdate(); перерендориг стостояния По умолчанию, когда состояние вашего компонента или реквизита изменяется, ваш компонент будет повторно отображать.

//defaultProps может быть определено как свойство самого класса компонента,
//CustomButton.defaultProps = {   color: 'blue'} == <CustomButton color={blue}/> но может быть перезаписано
//displayName

//createContext(). равен value
//defaultValue нет createContext().// createContext(). не передался


// hydrate()
// unmountComponentAtNode()
// findDOMNode()
// createPortal()


// События
// onresize – событие изменения размера окна.
// onscroll – событие при прокрутке окна.
// onload – полностью загрузилась страница со всеми ресурсами.
// onfocus/onblur – получение/потеря фокуса.

//dangerouslySetInnerHTML равно === innerHTML
//htmlFor равно ===  for

{/*<div style={{ height: 10 }}>*/} //автоматически подставляет px
    {/*Hello World!*/}
{/*</div>*/}

{/*// Result style: '10%'*/}
{/*<div style={{ height: '10%' }}>*/}
{/*Hello World!*/}
{/*</div>*/}

//React.Component
//React.PureComponent  shouldComponentUpdate() не реализует




//React.Fragment также предоставляет компонент для рендеринга нескольких элементов без оболочки.
//React.Fragment Компонент позволяет возвращать несколько элементов в render()методе , не создавая дополнительный элемент DOM:
//<Fragment>*/}  ===    <>
//   <td>Hello</td>*/}       <td>Hello</td>
//   <td>World</td>*/}       <td>World</td>
//</Fragment>*/}  ===    </>
//<React.Fragment> = <>   //
//<React.Fragment key={item.id}> keyэто единственный атрибут, который можно передать Fragment.
// <>  тоже самое что и Fragment только не принимает key

// React.createRef React.createRef создает ссылку ref, которая может быть присоединена к элементам React через атрибут ref.
// React.forwardRef создает компонент React, передающий атрибут ref, который он сам же получает, другому компоненту, расположенному ниже в дереве. Несмотря на то, что этот подход не очень распространен, он особенно полезен в двух сценариях:

// cloneElement() создать клон елемента
// isValidElement() Проверяет, является ли объект элементом React. Возвращает true или false.

//PrevState предедущий стейт
//Props текущие пропсы
//NextProps новые пропсы
//NextState следующий стейт
//&nbsp пробел

//React.Children.map(children, function[(thisArg)]) Вызывает функцию для каждого дочернего элемента, содержащегося в children, с this установленным в thisArg. Если children представляют собой фрагмент или массив с ключами, он будет пройден. Если children имеет значение null или undefined, возвращается значение null или undefined, а не массив.
//React.Children.forEach(children, function[(thisArg)]) То же, что и React.Children.map(), но не возвращает массив.
//React.Children.count(children) Возвращает общее количество компонентов в children, равное количеству раз, когда обратный вызов был передан mapили forEachбудет вызван.
//React.Children.only(children) Проверяет, что children имеет только один дочерний элемент (элемент React) и возвращает его. В противном случае этот метод выдает ошибку.
//React.Children.toArray(children) Возвращает непрозрачную структуру данных children как плоский массив с ключами, назначенными каждому потомку. Это полезно, если вы хотите манипулировать коллекциями потомков в ваших методах отрисовки, особенно если вы хотите изменить порядок или обрезать this.props.children, прежде чем передавать его.

//static getDerivedStateFromProps()

//this.setState((prevState, props) => {
//prevState - ссылка на предыдущее состояние. Оно не должно быть непосредственно изменено. Вместо этого, изменения должны быть представлены путем создания нового объекта на основе prevState и props. Например, предположим, что мы захотели изменить значение в состоянии с помощью

//createElement()
//React.isValidElement(object) Проверяет объект как элемент React. Возвращает true или false.

//в стрелочной функции можно писать если свойсто и значение совпадают то писать только один раз

// createFactory() Возвращает функцию, которая создает элементы React данного типа. Этот помощник считается устаревшим, и мы рекомендуем вам либо использовать JSX, либо использовать его React.createElement()напрямую.

//Object.assign объединение двух объектов let team = {};let part111 = {fonto:123};let part2222 ={mamas:2};console.log(Object.assign(team,part111,part2222))

//{this.state.isDangerAlertShowed ? <DangerAlert /> : null}

// let button = null;
// if(isBurning){
//     button = <SnuffOutButton onClick={this.onSnuffOut} />
// } else {
//     button = <SetFireButton onClick={this.onSetFire} />;
// }
// return (
//     <div>
//         <Indicator isBurning={isBurning} />
//         {button}


//ReactDOM.unmountComponentAtNode(container) Удалите установленный компонент React из DOM и очистите его обработчики событий и состояние. Если компонент не был установлен в контейнере, вызов этой функции ничего не делает. Возвращает, trueесли компонент был размонтирован, и falseесли компонент не был отключен.
//ReactDOM.findDOMNode(component) Если этот компонент был установлен в DOM, он возвращает соответствующий собственный элемент DOM браузера. Этот метод полезен для считывания значений из DOM, таких как значения полей формы и выполнения измерений DOM. В большинстве случаев вы можете прикрепить ссылку на узел DOM и findDOMNodeвообще не использовать .





// this.setState((  prevState ) => {
//     return{
//         chichi: prevState.chichi + 3
//     }
// })
// this.setState(( prevState ) => {
//     return{
//         chichi: prevState.chichi * 2
//     }
// })

// this.setState(({ chichi }) => {
//     return{
//         chichi: chichi * 2
//     }
// })

// this.setState(({  chichi,chichi2,chichi3  }) => {
//     return{
//         chichi:chichi + 10,
//         chichi2:chichi2 + 20,
//         chichi3:chichi3 + 30
//     }
// })
// this.setState(({ chichi,chichi2,chichi3 }) => {
//     return{
//         chichi:chichi * 2 ,
//         chichi2:chichi2 * 2,
//         chichi3:chichi3 * 2
//     }
//}) //setState не будет перерисоваться 5 раз все смержит обьэденит в один setState

//ref всегда должен быть в классе,в функүии в переменной  работаь не будет

//changeState222 = () => this.setState(state => this.state.time ===  12 ? null : ({time: 12}));


//changeState222 = () => this.setState((state => this.state.time ===  12 ? null : ({time: 12})));
//changeState222 = props => this.setState(prevState => this.state.time ===  this.props.lab ? 2 : ({time: prevState.time +  props.lab + 10}));


//Promise обещания,пока она выполняеться находиться в состоянии pending;потом она может быть выполненно состояния resolved не выполненно Rejected
//функция обратного вызова var button = docume.getid(disi) ; disi.onclick - функция обратного вызова

// offsetWidth/offsetHeight //какой размер сейчас у елемента и сколько места занимает на странице
// clientWidth/clientHeight //не учитывает падинги

// Element.getBoundingClientRect() возвращает размер элемента и его позицию относительно окна.
// getBoundingClientRect() возрашает top lef rigt и botton только botton это сколько пикселей до верхней границы экрана rigt тоже самое и его справого края до экрана с лева
//clientX,clientY показывает кординаты елемента мишки

//В проперти прокидывать атрибуты которые будит изменять поведения компанета
//а компоненты теги прокидывать в children


// async componentDidMount (){ //async - будет выполнять антисизронно с кодом html
//     const user = await fetch('http://jsonplaceholder.typicode.com/users') //await Оператор await заставляет функцию, объявленную с использованием оператора async, ждать
// выполнения Promise
// }

//window.navigator.userAgent.toLowerCase(); вывести даные о браузере или телефоне пример в папке demo-hoc-into

//React.Component -просто компонент // Component - если будет стоять в функии в hoc и у хост будет аргумент Component и и заместо React.Component поставить Component ,то тот клас где стоит Component будет примать своства компонента переданого в хост
