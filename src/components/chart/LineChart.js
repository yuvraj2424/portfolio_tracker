import { ResponsiveLine } from '@nivo/line'
import { Card } from 'antd'
import moment from 'moment';
import React from 'react';
import DateSliderPicker from '../../pages/Home/components/DatePicker';

const getRequiredDateFormat = (timeStamp, format = "MM-DD-YYYY") => {
    return moment(timeStamp).format(format);
};

const LineChart = ({ data ,onPicker,annotation}) => (
    <Card>
        <div className='chart-container chart-align-center'>
            <DateSliderPicker onPicker={onPicker}/>
            <ResponsiveLine
                data={data}
                margin={{ top: 50, right: 10, bottom: 85, left: 50 }}
                xScale={{
                    type: "time",
                    format: "%Y-%m-%d",
                    precision: "day"
                }}
                yScale={{
                    type: 'linear',
                    min: 'auto',
                    max: 'auto',
                    stacked: true,
                    reverse: false,
                    // min: 50, 
                    // max: 500
                }}
                xFormat="time:%Y-%m-%d"
                yFormat=" >-.2f"
                axisTop={null}
                axisRight={null}
                theme={{
                    textColor:"#fff",
                   
                }}
                 enableGridY={false}
                enableGridX={false}
                markers={[
                    {
                        axis: 'y',
                        value: annotation,
                        legend: '',
                        
                        lineStyle: {
                            stroke: 'red',
                            opacity:annotation
                        },
                        textStyle: {
                            fill: 'red',
                        },
                    },
                ]}
                gridYValues={1}
                curve="monotoneX"
                enableSlices="x"
                sliceTooltip={({ slice }) => {
                    const date = slice.points[0].data.xFormatted;
                    return (
                        <div>
                            <strong style={{ color: "#fff" }}>
                                {`Date: ${getRequiredDateFormat(date, "MMMM-DD")}`}
                            </strong>
                            {slice.points.map(point => (
                                <div key={point.id}>
                                    <strong style={{ color: "#fff" }}>
                                        {`${point.serieId} ${point.data.yFormatted}`}
                                    </strong>
                                </div>
                            ))}
                        </div>
                    );
                }}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: -90,
                    // tickValues: "every month",
                    legend: 'Date',
                    //  format: "%m-%d-%y",
                    format: '%b %d',
                    legendOffset: 50,
                    legendPosition: 'middle'
                }}
                axisLeft={{
                    tickSize: 5,
                    ticksPosition: 0,
                    tickPadding: 5,
                    tickRotation: 0,
                    tickValues: 5,
                    legend: 'Price',
                    legendOffset: -40,
                    legendPosition: 'middle'
                }}
                enablePoints={false}
                pointSize={10}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                pointLabelYOffset={-12}
                useMesh={true}
                
                layers={[
                    'grid',
                    'markers',
                    'axes',
                    'areas',
                    'crosshair',
                    'lines',
                    'points',
                    'slices',
                    'mesh',
                    'legends',
                ]}
                legends={[
                    {
                        anchor: 'top',
                        direction: 'row',
                        justify: false,
                        translateX: 0,
                        translateY: -24,
                        itemsSpacing: 0,
                        itemDirection: 'left-to-right',
                        itemWidth: 80,
                        itemHeight: 20,
                        itemOpacity: 0.75,
                        symbolSize: 12,
                        symbolShape: 'circle',
                        symbolBorderColor: 'rgba(0, 0, 0, .5)',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemBackground: 'rgba(0, 0, 0, .03)',
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
            />
        </div>
    </Card>
)

export default LineChart