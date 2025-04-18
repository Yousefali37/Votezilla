import TableComponent from "../../../Components/Table/TableComponent";

function ViewCandidates() {
    return (
        <div className="table-container">
            <TableComponent endpoint={""} title={"candidate"} />
        </div>
    )
}

export default ViewCandidates;