import { Card } from "antd";
import Item from "antd/es/list/Item";
import React from "react";

const News = ({ data }) => {
    return (
        <Card>
            <div className="news-container">
                {/* <h2 className="title">News</h2> */}
                {
                    data && data.length > 0 && data.map((item, index) => (
                        <div key={index} className="news-item">
                            <h2>{item.title}</h2>
                            <span>{item.by} <span className="single-dot">.</span> {item.time}</span><br/>
                            <span>{item.description}</span>
                            <hr/>
                        </div>
                    ))
                }
            </div>
        </Card>
    )
}

export default React.memo(News);