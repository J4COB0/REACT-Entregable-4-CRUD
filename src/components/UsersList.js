import React from 'react';

const UsersList = ({users, selectUser, deleteUser}) => {
    return (
        <section className='user-list-container'>
            {
                users?.map((user) => (
                    <div className="card-user" key={user.id}>
                        <div className="card-user-info">
                            <h2>{`${user.first_name} ${user.last_name}`}</h2>
                            <h3>{user.email}</h3>
                            <p>{user.birthday}</p>
                        </div>
                        <div className="card-user-buttons">
                            <button onClick={() => selectUser(user)}><i className="fas fa-user-edit fa-lg color-2F4858"></i></button>
                            <button onClick={() => deleteUser(user.id)}><i className="fas fa-trash-alt fa-lg red"></i></button>
                        </div>
                    </div>
                ))
            }
        </section>
    );
};

export default UsersList;