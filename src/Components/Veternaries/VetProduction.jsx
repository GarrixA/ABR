import { Label } from '@mui/icons-material';
import {Chart as chartJS, defaults} from 'chart.js/auto';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import chartData from './CrudeVetenary/data';

defaults.maintainAspectRatio = false,
defaults.responsive = true

const VetProduction = () => {
  return (
    <>
      <div className="mt-28 text-[1.3rem] font-bold">
        <h1 className="ml-5">Production</h1>
        {/* <Bar
        data={{
          labels: charts.map((it)=> it.label),
          datasets: [
            {
              label: "Rev",
              data: charts.map((it) => it.value),
              barThickness: 60,
              backgroundColor: [
                "#c29d59"
              ]
            },
            {
              label: "RWW",
              data: charts.map((it) => it.value),
              barThickness: 60,
              backgroundColor: [
                "#c29d"
              ]
            },
          ]
        }} 
      /> */}
        <div className='grid grid-cols-2 mx-2 h-96 p-2 mt-10'>
          <div className='bg-white mx-2 p-2 rounded'>
            <Line
              data={{
                labels: chartData.map((it) => it.label),
                datasets: [
                  {
                    label: "Rev",
                    data: chartData.map((it) => it.value),
                    barThickness: 60,
                    backgroundColor: "#c29d59",
                    borderColor: "#c29d59"
                    
                  },
                  {
                    label: "RWW",
                    data: chartData.map((it) => it.value1),
                    barThickness: 60,
                    backgroundColor: "green",
                    borderColor: "green"
                    
                  },
                ]
              }}
            />
          </div>
          <div className=' flex justify-center bg-white mx-2 p-2 rounded'>
            <div className=' w-[80%]'>
            <Doughnut
              data={{
                labels: chartData.map((it) => it.label),
                datasets: [
                  {
                    label: "Rev",
                    data: chartData.map((it) => it.value),
                    barThickness: 60,
                    backgroundColor: [
                      "#c29d59"
                    ],
                  },
                  {
                    label: "RWW",
                    data: chartData.map((it) => it.value1),
                    barThickness: 60,
                    backgroundColor: [
                      "green"
                    ],
                    hoverBackgroundColor:[
                      "brown"
                    ]
                  },
                ]
              }}
            />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default VetProduction
