import { Bar } from 'react-chartjs-2';
import { readString } from 'react-papaparse';
import { React } from 'react';
import siteListCSV from '../road.csv'; // edit this line to match with the CSV filename

const year = []
const populationCount = []

const papaConfig = {
  complete: (results, file) => {
    console.log('Parsing complete:', results, file);
    for(let i = 0; i< results.data.length; i++){
      year[i] = results.data[i].Year;
      populationCount[i] = parseInt(results.data[i].Population);
      console.log(year[i]);
      console.log(populationCount[i]);
    }
  },
  header: true,
  download: true,
  error: (error, file) => {
    console.log('Error while parsing:', error, file);
  },
};
readString(siteListCSV, papaConfig);

function DataParser() {
  // data for Chart.js
  const data = {
    labels: year,
    datasets: [
      {
        label: 'Population Count',
        data: populationCount,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(266, 159, 64, 0.2)',
          'rgba(277, 88, 144, 0.2)',
          'rgba(54, 155, 235, 0.2)',
          'rgba(288, 201, 86, 0.2)',
          'rgba(75, 182, 192, 0.2)',
          'rgba(153, 202, 255, 0.2)',
          'rgba(299, 179, 64, 0.2)',
          'rgba(133, 88, 144, 0.2)'
        ],
      },
    ],
  };

  return (
      <Bar data={data}/>
  )
}
export default DataParser