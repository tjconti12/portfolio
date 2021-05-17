import React, { useState, ComponentProps } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import * as chartStyles from './Chart.module.css';

const Chart = ({ languages }) => {




  let colors = ['yellow', 'green', 'pink', 'orange', 'red']
  const labelStyle = {
    fontSize: '4px',
  }

  if(!languages) return <h1>Loading</h1>

  return (
    
    <div className={chartStyles.chartContainer}>
      <PieChart
        data={languages.map((obj, index) => {
            return {title: obj[0], value: obj[1], color: colors[index] ? colors[index] : colors[Math.floor(Math.random() * colors.length)]}
        })}
        label={({ dataEntry }) => `${Math.round(dataEntry.percentage)}%`}
        labelPosition={75}
        labelStyle={{
            ...labelStyle
        }}
        lineWidth={50}
        paddingAngle={5}
        animate={true}
        animationDuration={500}
        radius={20}
    />
    <div className={chartStyles.labelItemsContainer}>
        {languages.map((obj, index) => {
            return (
                <div className={chartStyles.labelItem}>
                    <h4 className={chartStyles.labelName}>{obj[0]}</h4>
                    <div className={chartStyles.colorBox} style={{"backgroundColor" : colors[index]}}></div>
                </div>
            )
        })}
    </div>
    </div>
  )
}

export default Chart
