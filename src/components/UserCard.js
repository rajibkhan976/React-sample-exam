import React from 'react';
import moment from 'moment';
import Card from 'react-bootstrap/Card';

const UserList = ({ userList }) => {

    return (
        <div className='row mt-4'>
            {userList && userList.length !== 0 &&
                    userList.map((element, index) => {
                        return  <div key={index} className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4'>
                                    <Card style={{ width: '18rem', height: '12em' }}>
                                        <Card.Body>
                                            <Card.Title>
                                                <div className='row'>
                                                    <div className='col-2'>
                                                        <img src={element?.picture?.large} className="img-fluid rounded-circle" alt="" />
                                                    </div>
                                                    <div className='col-10'>
                                                        <h4 className='text-dark'>{ element?.name?.last.concat(', ', element?.name?.first) }</h4>
                                                        <span className='fs-6 text-secondary'>{ element?.email }</span>
                                                    </div>
                                                </div>
                                            </Card.Title>
                                            <div className='row'>
                                                <div className='col-2'>
                                                </div>
                                                <div className='col-10'>
                                                    <span className='d-inline-block fw-bold fs-5 text-dark'>
                                                        {moment(element?.registered?.date).format('DD-MM-YYYY')}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='col-2'>
                                                </div>
                                                <div className='col-10'>
                                                    <span className='d-inline-block text-secondary'>
                                                        {element?.login?.username}
                                                    </span>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                    })
                }
        </div>
    );
}

export default UserList;