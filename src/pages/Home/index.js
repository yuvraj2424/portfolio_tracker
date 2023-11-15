import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Col, Row, Tabs } from 'antd';
import LineChart from '../../components/chart/LineChart';
import { AuthContext } from '../../context/AuthContext';
import { useAuth } from '../../hooks/useAuth';
import { LineChartData } from '../../dummyData/chartData';
import Companies from './components/companies';
import { Container } from '@nivo/core';
import DateSliderPicker from './components/DatePicker';
import dayjs from 'dayjs';
import Profile from './components/Profile';
import { CompanyData } from '../../dummyData/companyData';
import News from './components/News';
import { getHeighPrice } from '../../utils';

export default function Home() {
    const { user, setUser } = useContext(AuthContext);
    const { logout } = useAuth();
    const [selectedCmp, setSelectedCmp] = useState(0);
    const [chartData, setChartData] = useState(LineChartData);
    const [newsData, setNewsData] = useState([]);
    const [profile, setProfile] = useState({});
    const [annotation, setAnnotation] = useState(0);

    useEffect(() => {
        const data = [...CompanyData];
        const news = data.reduce((accumulator, currentValue) => [...accumulator, ...currentValue.news], []);
        setNewsData(news);
    }, [])

    const handleChangeCmp = useCallback((e) => {
        setSelectedCmp(e.value);
        if (e.value == 0) {
            setChartData(LineChartData);
            setAnnotation(0);
            const data = [...CompanyData];
            const news = data.reduce((accumulator, currentValue) => [...accumulator, ...currentValue.news], []);
            setNewsData(news)
            setProfile({})
        } else {
            //get chart data
            const data = [...LineChartData];
            const chart_data = data.filter((obj) => obj.value === e.value);
            setChartData(chart_data);
            setAnnotation(getHeighPrice(chart_data[0].data));
            //get cmp data
            const cmp_data = [...CompanyData];
            const selected_cmp = cmp_data.find((obj) => obj.value === e.value);
            setNewsData(selected_cmp?.news)
            setProfile(selected_cmp?.profile)
        }

    }, [])

    const onDatePicker = useCallback((date, dateString, id) => {
        const selectedDate = dateString;
        if (selectedDate.length > 0 && selectedDate[0] != "" && selectedDate[1] != "") {
            const fromDate = dayjs(selectedDate[0]).format("YYYY-MM-DD");
            const toDate = dayjs(selectedDate[1]).format("YYYY-MM-DD");
            const result = chartData.map((obj) => {
                return {
                    ...obj,
                    data: obj.data.filter((date_obj) => {
                        const date1 = dayjs(date_obj.x).format("YYYY-MM-DD");
                        if (new Date(date1) > new Date(fromDate) && new Date(date1) < new Date(toDate)) {
                            return date_obj;
                        };
                    })
                }

            });
            setAnnotation(getHeighPrice(result[0].data));
            setChartData(result)
        }

    }, [chartData]);

    const onChange = useCallback(()=>{

    },[]);

    const items = [
        {
          key: '1',
          label: 'Chart',
          children: <LineChart annotation={annotation} data={chartData} onPicker={onDatePicker} />,
        },
        {
          key: '2',
          label: 'Profile',
          children: <Profile data={profile} />,
        },
        {
          key: '3',
          label: 'News',
          children: <News data={newsData} />,
        },
      ];

    return (
        <Container>
            <Row gutter={[16, 10]}>
                <Col xs={24} sm={24} md={18} lg={18} xl={18}>
                    <Row gutter={[16, 10]}>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
                    </Col>
                           
                    </Row>
                </Col>
                <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                    <Companies value={selectedCmp} handleChange={handleChangeCmp} />
                </Col>
            </Row>
            {/* <Row gutter={[16, 10]}>
                <Col xs={24} sm={24} md={18} lg={18} xl={18}>
                    <Row gutter={[16, 10]}>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            <Profile data={profile} />
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            <LineChart annotation={annotation} data={chartData} onPicker={onDatePicker} />
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            <News data={newsData} />
                        </Col>
                    </Row>
                </Col>
                <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                    <Companies value={selectedCmp} handleChange={handleChangeCmp} />
                </Col>
            </Row> */}
        </Container>


    )
}
