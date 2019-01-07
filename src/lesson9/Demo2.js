import React from 'react';
import withPermission from './permissionRequired'

const Demo2 = ({message,user}) => <p>I am powerful {message}for everyone Demo2  {user.name}</p>;


export default withPermission('admin')(Demo2);