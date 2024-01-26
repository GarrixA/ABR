import { Line, Bar, Doughnut } from 'react-chartjs-2';
import {Chart as chartJS, defaults} from 'chart.js/auto';
import chartData from '../Veternaries/CrudeVetenary/data';
defaults.maintainAspectRatio = false,
defaults.responsive = true

const Dashboard = () => {

  

  return (
    <>
      <div className="mt-32">
        <h1 className="text-[1.3rem] font-bold ml-5">Dashboard</h1>
        <div className='flex flex-col gap-10 md:grid grid-cols-2 mx-2 h-screen md:h-96 p-2 mt-10'>
          <div className='bg-white mx-2 p-2 rounded md:h-full h-[40%]'>
            <Line
              data={{
                labels: chartData.map((it) => it.label),
                datasets: [
                  {
                    label: "Milk Production",
                    data: chartData.map((it) => it.value),
                    barThickness: 60,
                    backgroundColor: "#c29d59",
                    borderColor: "#c29d59"
                    
                  },             
                ]
              }}
            />
          </div>
          <div className=' flex justify-center bg-white mx-2 p-2 rounded md:h-full h-[40%]'>
            <div className=' w-[80%] '>
            <Doughnut
              data={{
                labels: chartData.map((it) => it.label),
                datasets: [
                  {
                    label: "Milk Production",
                    data: chartData.map((it) => it.value),
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

export default Dashboard;
