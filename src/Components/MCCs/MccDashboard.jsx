import { Line, Bar, Doughnut } from 'react-chartjs-2';
import {Chart as chartJS, defaults} from 'chart.js/auto';
import chartData from '../Veternaries/CrudeVetenary/data';
defaults.maintainAspectRatio = false,
defaults.responsive = true

const MccDashboard = () => {
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
                    backgroundColor: "#009048",
                    borderColor: "#009048"
                    
                  },             
                ]
              }}
            />
          </div>
          <div className=' flex justify-center bg-white mx-2 p-2 rounded md:h-full h-[40%]'>
            <div className=' w-[80%]'>
            <Doughnut
              data={{
                labels: chartData.map((it) => it.label),
                datasets: [
                  {
                    label: "Milk Production",
                    data: chartData.map((it) => it.value),
                    barThickness: 60,
                     backgroundColor: [
                      "#009048", "#98ABEE", "#2D9596","#9AD0C2","#6962AD","#265073","#43766C","#86B6F6","#176B87","#647D87","#5C8374","#9EC8B9"
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

export default MccDashboard;
