var React = require('react')
// var ChartistGraph = require('react-chartist')
import ChartistGraph from 'react-chartist';

var simpleLineChartData = {
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  series: [
    [12, 9, 7, 8, 5],
    [2, 1, 3.5, 7, 3],
    [1, 3, 4, 5, 6]
  ]
}


const Chartist = () => {
    return (
        <div>
            <ChartistGraph data={simpleLineChartData} type={'Line'} />
        </div>
    )
}

export default Chartist


