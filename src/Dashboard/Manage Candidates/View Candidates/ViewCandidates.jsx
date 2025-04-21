import TableComponent from "../../../Components/Table/TableComponent";

function ViewCandidates() {
    return (
        <div className="table-container">
            <TableComponent
                endpoint="http://127.0.0.1:8000/api/candidates"
                title="candidate"
                headers={["ID", "Name", "Position", "Session ID", "Manager ID"]}
                dataFields={["CANDIDATE_ID", "NAME", "POSITION", "SESSION_ID", "MANAGER_ID"]}
                searchField="name"
            />
        </div>
    )
}

export default ViewCandidates;