import React from 'react';

const requirePermission = requiredLevel => Component =>{
    const user = JSON.parse(localStorage.user);
    if(user.level !== 'admin' && requiredLevel === 'admin'){
        //...
    }else {
        //...Component
    }

    return class extends React.Component {

        render(){
            console.log(this.props)
            if(user.level !== 'admin' && requiredLevel === 'admin'){
                return null;
            } else {
                return <Component {...this.props} user={user}/>
            }
        }
    };
    //localStorage.user = JSON.stringify({ level:'user',name:'Vasya'})
    // user={user} {...this.props}
    // return () =>
    //     (user.level !== 'admin' && requiredLevel === 'admin') ? null : <Component/>;
}

export default requirePermission;



// export default function requirePermission(Component, requiredLevel){
//     const user = JSON.parse(localStorage.user);
//     console.log(Component)
//     console.log(requiredLevel)
//     console.log(user)
//     if(user.level !== 'admin' && requiredLevel === 'admin'){
//         //...
//     }else {
//         //...Component
//     }
//
//     return class extends React.Component {
//         render(){
//             if(user.level !== 'admin' && requiredLevel === 'admin'){
//                return null;
//             } else {
//                 return <Component />
//             }
//         }
//     };
//     //localStorage.user = JSON.stringify({ level:'user',name:'Vasya'})
//     // user={user} {...this.props}
//     // return () =>
//     //     (user.level !== 'admin' && requiredLevel === 'admin') ? null : <Component/>;
// }