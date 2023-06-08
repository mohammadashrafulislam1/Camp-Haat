import { useQueries } from "@tanstack/react-query";

const AllUsers = () => {
    const { data: users = [], refetch } = useQueries('users', async () => {
        const res = await fetch('http://localhost:5000/users');
        return res.json();
    });
    console.log(users)
    return (
        <div>
            <h1>Total Users: {users?.length}</h1>
        </div>
    );
};

export default AllUsers;
