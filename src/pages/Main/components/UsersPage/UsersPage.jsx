import Table from "components/Table";
import { Pagination } from 'antd';
import { getAll as getAllUsers } from 'api/Users';
import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
const columns = [{ title: "Name", key: "first_name" }, { title: "Surname", key: "last_name" }, { title: "Username", key: "username" }, { title: "Online", key: "is_active", render: (data) => <Link to="/">{data.is_active ? "online" : "offline"}</Link> }]

const pageSize = 10;
const UserPage = () => {
    const [users, setUsers] = useState({loading: false})
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();
    useEffect(() => {
        setUsers(old => ({...old, loading: true}));
        getAllUsers({ page: currentPage, count: pageSize })
            .then(res => setUsers( old => ({...old, ...(res?.data || {}), loading: false})))
            .catch(err =>{  console.log(err); setUsers(old => ({...old, loading: false})) } )

    }, [currentPage])
    return (
        <div className="users-page">
            <Table columns={columns} data={users.users} loading = {users.loading} onClick = {(userData) => navigate(`/user/${userData.id}`)} />
            <Pagination current={currentPage} onChange = {(page) => {
                setCurrentPage(page)
            }} total={users.total} defaultPageSize = {pageSize} showSizeChanger={false} />
        </div>
    )
}

export default UserPage;