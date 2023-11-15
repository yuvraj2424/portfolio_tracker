import { Card, Flex, Select } from "antd";
import React, { useCallback, useState } from "react";
import { CompanyData } from "../../../dummyData/companyData";


const Companies = ({ handleChange, value }) => {

    return (
        <Card>
            <div className="companies-container">
                {
                    CompanyData.map((item) => (
                        <Flex key={item.id} className={value == item.value ? "company-item selected" : 'company-item'} onClick={() => handleChange(item)}>
                            <div>
                                <span>{item.label}</span>
                                <br />
                                <span className="cmp-name">{item.name}</span>
                            </div>
                            <span className="price">{item.price}</span>
                        </Flex>
                    ))
                }
            </div>
        </Card>
    )
}

export default React.memo(Companies);