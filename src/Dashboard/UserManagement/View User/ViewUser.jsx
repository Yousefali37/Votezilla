import TableComponent from "../../../Components/Table/TableComponent";

function ViewUser() {
    return (
        <div className="table-container">
            <TableComponent endpoint={""} title={"user"} />
        </div>
    )
}

export default ViewUser;