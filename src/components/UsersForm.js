import React, { useEffect, useState } from 'react';

const UsersForm = ({addUser, updateUser, userSelected, cleanUserSelected}) => {
    
    const [first_name, setFirst_name] = useState('');
    const [last_name, setLast_name] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [birthday, setBirthday] = useState('');

    useEffect(() => {   
        if (userSelected.first_name !== undefined) {
            setFirst_name(userSelected.first_name);
            setLast_name(userSelected.last_name);
            setEmail(userSelected.email);
            setPassword(userSelected.password);
            setBirthday(userSelected.birthday);
        }
    }, [userSelected])

    const submit = (e) => {
        e.preventDefault();
        
        const user = {
            first_name,
            last_name,
            email,
            password,
            birthday
        }

        if (userSelected.first_name){
            updateUser(user);
        } else {
            addUser(user);
        }
        cleanUserSelected();
        cleanForm();
    }

    const cleanForm = () => {
        setFirst_name('');
        setLast_name('');
        setEmail('');
        setPassword('');
        setBirthday('');
    }
    
    return (
        <div className='user-form-container'>
           
           <div className="user-form-title">
            <h2>NEW USER</h2>
           </div>
            
            <form onSubmit={submit} className='user-form-info'>
                <div className="input-container">
                    <i className="fas fa-user"></i>
                    <input 
                        type="text" 
                        id='user-form-name'
                        onChange={e => setFirst_name(e.target.value)}
                        value={first_name}    
                        placeholder='first name'
                    />
                </div>
                <div className="input-container">
                    <i className="fas fa-user hide"></i>
                    <input  
                        type="text" 
                        id='user-form-surname'
                        onChange={e => setLast_name(e.target.value)}
                        value={last_name} 
                        placeholder='last name'
                    />
                </div>
                <div className="input-container">
                    <i className="fas fa-envelope"></i>
                    <input 
                        type="email"
                        id='user-form-email'
                        onChange={e => setEmail(e.target.value)}
                        value={email} 
                        placeholder='email'
                    />
                </div>
                <div className="input-container">
                    <i className="fas fa-lock"></i>
                    <input 
                        type="password"  
                        id='user-form-password'
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        placeholder='password'
                    />
                </div>
                <div className="input-container">
                    <i className="fas fa-birthday-cake"></i>
                    <input 
                        type="date"
                        id='user-form-birthday'
                        onChange={e => setBirthday(e.target.value)}
                        value={birthday} 
                    />
                </div>        
                <div className='button-submit'>
                    <button className='button' >Upload</button>
                </div>
            </form>

        </div>
    );
};

export default UsersForm;