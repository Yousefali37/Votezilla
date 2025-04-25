import TableComponent from "../../../Components/Table/TableComponent";

function ViewUser() {
    return (
        <div className="table-container">
            <TableComponent 
                endpoint={"http://127.0.0.1:8000/api/users"}
                headers={["user_id", "name", "role", "login_id", "fingerprint"]}
                dataFields={["user_id", "name", "role", "login_id", "fingerprint"]}
                searchField={"name"}
                title={"user"} 
            />
        </div>
    )
}

export default ViewUser;