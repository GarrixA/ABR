import { Line, Bar, Doughnut } from 'react-chartjs-2';
import {Chart as chartJS, defaults} from 'chart.js/auto';
import vetData from '../DashComponents/CrudeVet/vetData';

defaults.maintainAspectRatio = false,
defaults.responsive = true

const VetDashboard = () => {
  
  return (
    <>
      <div className="mt-32">
        <h1 className="text-[1.3rem] font-bold ml-5">Dashboard</h1>
        <div className='grid grid-cols-2 mx-2 h-96 p-2 mt-10'>
          <div className='bg-white mx-2 p-2 rounded'>
            <Line
              data={{
                labels: vetData.map((it) => it.label),
                datasets: [
                  {
                    label: "Milk Production",
                    data: vetData.map((it) => it.value),
                    barThickness: 60,
                    backgroundColor: "#c29d59",
                    borderColor: "#c29d59"
                    
                  },             
                ]
              }}
            />
          </div>
          <div className=' flex justify-center bg-white mx-2 p-2 rounded'>
            <div className=' w-[80%]'>
            <Doughnut
              data={{
                labels: vetData.map((it) => it.label),
                datasets: [
                  {
                    label: "Milk Production",
                    data: vetData.map((it) => it.value),
                    barThickness: 60,
                    backgroundColor: [
                      "#c29d59"
                    ],
                  },
             
                ]
              }}
            />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VetDashboard;
