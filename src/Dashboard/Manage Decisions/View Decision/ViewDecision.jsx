import TableComponent from './../../../Components/Table/TableComponent';

function ViewDecision() {
    return (
        <div className="table-container">
            <TableComponent
                endpoint={"http://127.0.0.1:8000/api/decisions"}
                headers={["DECISION_ID", "DECISION_DATE", "DESCRIPTION", "SESSION_ID", "VOTER_ID", "DECISION", "MANAGER_ID"]}
                dataFields={["DECISION_ID", "DECISION_DATE", "DESCRIPTION", "SESSION_ID", "VOTER_ID", "DECISION", "MANAGER_ID"]}
                searchField={"name"} 
                title={"decision"}
            />
        </div>
    )
}

export default ViewDecision;