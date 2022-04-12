import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from "../api_integration/userActions";
import SearchBar from './SearchBar';
import FilterBar from './FilterBar';
import UserList from './UserList';
import UserCard from './UserCard';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Pagination from 'react-bootstrap/Pagination';

const DashboardComponent = ({ users, userActions }) => {

    const [userList, setUserList] = useState([]);
    const [searchKeyword, setSearchKeyword] = useState('');
    const [gender, setGender] = useState('');
    const [view, setView] = useState('');

    useEffect(() => {
        userActions.getUsers();
    }, []);

    useEffect(() => {
        if (users && users.length !== 0) {
            setUserList(users.filter((element, index) => (index < 10)));
        }
    }, [users]);

    const handleChangeSearchKeyword = (value) => {
        setSearchKeyword(value);
    }

    const handleChangeGender = (value) => {
        setGender(value);
    }

    useEffect(() => {
        if (searchKeyword && users && users.length !== 0) {
            setUserList(users.filter(
                (element) => 
                element?.name?.first?.includes(searchKeyword) ||
                element?.name?.last?.includes(searchKeyword) ||
                element?.email?.includes(searchKeyword) ||
                element?.login?.username?.includes(searchKeyword)
            ).filter((element, index) => (index < 10)));
        }
    }, [searchKeyword, users]);

    useEffect(() => {
        if (gender && users && users.length !== 0) {
            gender === "All" ? setUserList(users.filter((element, index) => (index < 10)))
            :
            setUserList(users.filter(
                (element) => 
                element?.gender === gender.toLowerCase()
            ).filter((element, index) => (index < 10)));
        }
    }, [gender, users]);

    const onChangeView = (event) => {
        if (event.target.checked) {
            setView('Tile');
        } else {
            setView('');
        }
    }

    const pageLoader = (event) => {
        setUserList(users.filter(
            (element, index) => 
            (index > ((10 * event.target.id) - 10)) && 
            (index < (10 * event.target.id))
        ));
    }

    function createPagination() {
        if (users && users.length !== 0 && users.length > 10) {
            var pageItems = [];
            for(var c = 1; c < Math.ceil(users.length / 10) + 1; c++) {
                pageItems.push(<Pagination.Item id={c} key={c} onClick={pageLoader}>{c}</Pagination.Item>);
            }
            var pagination =    <div className="row mt-4 d-flex justify-content-end align-items-center">
                                  <div className="col-sm-12 col-md-4 d-flex justify-content-center align-items-center">
                                      <Pagination>
                                          {pageItems}
                                      </Pagination>
                                  </div>
                                </div>;
            return pagination;
        } else {
            return null;
        }
    }

    return (
        <div className='row'>
            <Navbar bg="dark">
                <Container>
                    <div className='text-white mx-auto'>User List</div>
                </Container>
            </Navbar>
            <div className='col-12 px-5'>
                <h3 className='d-inline-block mt-4 mb-4'>User List</h3>
                <div className='row'>
                    <div className='col-sm-12 col-md-3'>
                        <SearchBar onChangeSearchKeyword={handleChangeSearchKeyword} />
                    </div>
                    <div className='col-sm-12 col-md-6 d-flex justify-content-center'>
                        <FilterBar onChangeFilter={handleChangeGender} />
                    </div>
                    <div className='col-sm-12 col-md-3'>
                        <Form className='d-inline-block float-end' style={{ 'marginLeft': '1em' }}>
                            <Form.Check
                                type="switch"
                                id="custom-switch"
                                value={view}
                                onChange={onChangeView}
                            />
                        </Form>
                        <div className='d-inline-block text-dark float-end'>
                            Tile view
                        </div>
                    </div>
                </div>
                {view && view === 'Tile' ?
                    <UserCard userList={userList} />
                    :
                    <UserList userList={userList} />
                }
            </div>
            {createPagination()}
        </div>
    );
}

const mapStateToProps = (state) => ({
    users: state.userReducer.users,
});
  
const mapDispatchToProps = (dispatch) => ({
    userActions: bindActionCreators(userActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardComponent);