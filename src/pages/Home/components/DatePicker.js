import { Card, Row, Col, DatePicker, Flex } from "antd";
import React from "react";
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

const dateFormat = "YYYY/MM/DD";
const { RangePicker } = DatePicker;
const DateSliderPicker = ({onPicker}) => {
    return (
            <Row justify="end">
                <Col >
                    <RangePicker onChange={onPicker}/>
                </Col>
            </Row>
    )
}

export default DateSliderPicker;