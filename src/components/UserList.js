import React from 'react';
import moment from 'moment';

const UserList = ({ userList }) => {

    return (
        <div className='row'>
            <div className='col-12 px-4 mb-5'>
                <div className='row bg-light border rounded py-4 mt-4'>
                    <div className='col-4'>NAME</div>
                    <div className='col-4'>Registration Date</div>
                    <div className='col-4'>Username</div>
                </div>
                {userList && userList.length !== 0 &&
                    userList.map((element, index) => {
                        return  <div key={index} className='row border rounded py-4'>
                                    <div className='col-4'>
                                        <div className='row'>
                                            <div className='col-2'>
                                                <img src={element?.picture?.medium} className="img-fluid rounded-circle" alt="" />
                                            </div>
                                            <div className='col-10'>
                                                <h4 className='text-dark'>{ element?.name?.last.concat(', ', element?.name?.first) }</h4>
                                                <span className='d-inline-block text-secondary'>{ element?.email }</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-4'>
                                        <h5 className='d-inline-block text-dark'>
                                            {moment(element?.registered?.date).format('DD-MM-YYYY')}
                                        </h5>
                                    </div>
                                    <div className='col-4'>
                                        <span className='d-inline-block text-secondary'>
                                            {element?.login?.username}
                                        </span>
                                    </div>
                                </div>
                    })
                }
            </div>
        </div>
    );
}

export default UserList;