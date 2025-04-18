import TableComponent from "../../../Components/Table/TableComponent";

function ViewSession() {
    return (
        <div className="table-container">
            <TableComponent endpoint={""} title={"session"} />
        </div>
    )
}

export default ViewSession;