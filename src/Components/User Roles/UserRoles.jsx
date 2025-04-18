import './UserRoles.css';


function UserRoles() {
    return (
        <div className="user-roles-page container">
            <h1 className="user-roles-page__title">User Roles</h1>
            <p className="user-roles-page__subtitle">Understanding access levels and permissions</p>

            <div className="user-roles-list">
                <div className="user-role-card">
                    <h2 className="user-role-card__title">Admin</h2>
                    <p className="user-role-card__description">
                        Full access to create sessions, candidates, decisions, and manage users.
                    </p>
                </div>
                <div className="user-role-card">
                    <h2 className="user-role-card__title">Voter</h2>
                    <p className="user-role-card__description">
                        Can participate in active voting sessions and submit votes.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default UserRoles;


