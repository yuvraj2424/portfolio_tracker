import { Card, Flex } from "antd";
import React from "react";

const Profile = ({data}) => {
    const value = Object.keys(data).length > 0;
    return (
        <Card className="profile-container">
            {/* <h2>Profile:</h2> */}
            <Flex vertical className="profile-detail-container">
                <div className="profile-detail">
                    <span>Industry: </span>
                    <span>{value ? data.industry:"NA"}</span>
                </div>
                &nbsp;
                <div className="profile-detail">
                    <span>Sector: </span>
                    <span>{value ? data.sector:"NA"}</span>
                </div>
                &nbsp;
                <div className="profile-detail">
                    <span>Employees: </span>
                    <span>{value ? data.employees:"NA"}</span>
                </div>
                &nbsp;
                <div className="profile-detail">
                    <span>Equity: </span>
                    <span>{value ? data.equity:"NA"}</span>
                </div>
            </Flex>
        </Card>
    )
}

export default React.memo(Profile)