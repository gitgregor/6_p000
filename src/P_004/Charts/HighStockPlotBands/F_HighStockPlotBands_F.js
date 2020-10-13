import React, { useState, useContext } from 'react';
import Highcharts from 'highcharts/highstock';
import {
  HighchartsStockChart, Chart, HighchartsProvider, XAxis, YAxis, Title, AreaSplineSeries, FlagsSeries, Navigator, PlotBand
} from 'react-jsx-highstock';
import { createRandomData } from './data-helper';
import Paper from '../../Apis/paper/Paper'
import priceContext from '../../Apis/paper/Paper'
import {Context004} from '../../Providers/Provider004'

const App = ( ) => {

    const {state} = useContext(Context004)

    const now = Date.now()+7200000;

    // const [state, setstate] = useState()

const array = [[Number(now+1000), Number(state*3)],[Number(2000+now), Number(state/2)],
[Number(3000+now), Number(state*7)],[Number(4000+now), Number(state+763)],[Number(5000+now), Number(state*0.5)],
[Number(6000+now), Number(state- 2356)]]

// const array = [[Number(1601806121849), Number(state*3)],[Number(1601806122849), Number(state/2)],
// [Number(1601806123849), Number(state*7)],[Number(1601806124849), Number(state+763)],[Number(1601806125849), Number(state*0.5)],
// [Number(1601806126849), Number(state- 2356)]]

// const array = [[Number(1601806121849), Number(95)],[Number(1601806122849), Number(42.5)],
// [Number(1601806123849), Number(23)],[Number(1601806124849), Number(6)],[Number(1601806125849), Number(0)],
// [Number(1601806126849), Number(50)]]

// const array = [[Number(1601806124849), Number(95)],[Number(1601806124849), Number(42.5)],
//[Number(1601806124849), Number(23)],[Number(1601806124849), Number(6)],[Number(1601806124849), 
//Number(0)],[Number(1601806124849), Number(50)]]


let date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// request a weekday along with a long date
let options = { month: 'long', day: 'numeric' };
// let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

console.log(date.toLocaleString('pl-PL', options));
// → "Donnerstag, 20. Dezember 2012"
let myDate = date.toLocaleString('pl-PL', options)
//==============================================================


var highchartsOptions = Highcharts.setOptions({
    lang: {
        // loading: 'Aguarde...',
        // months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        months: ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'],
        weekdays: ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela'],
        shortMonths: ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'],
        // shortMonths: ['Sty', 'Lut', 'Marz', 'Kwie', 'Maj', 'Czer', 'Lip', 'Sierp', 'Wrze', 'Paź', 'List', 'Gru'],
        // exportButtonTitle: "Exportar",
        // printButtonTitle: "Imprimir",
        // rangeSelectorFrom: "De",
        // rangeSelectorTo: "Até",
        // rangeSelectorZoom: "Periodo",
        // downloadPNG: 'Download imagem PNG',
        // downloadJPEG: 'Download imagem JPEG',
        // downloadPDF: 'Download documento PDF',
        // downloadSVG: 'Download imagem SVG'
        //===============================
        // resetZoom: "Reset",
        // resetZoomTitle: "Reset,
        // thousandsSep: ".",
        // decimalPoint: ','
    }
}
);



//==============================================================
const plotOptions = {
    spline: {
        lineWidth: 4,

        states: {
            hover: {
                lineWidth: 5
            }
        },
        marker: {
            enabled: false
        },
        pointInterval: 36000000, //    3600000, // one hour
        pointStart: Date.UTC(2020, 2, 31, 0, 0, 0),
        // pointStart: myDate
        // pointStart: Date.UTC(2012, 11, 20, 3, 0, 0).toLocaleString('pl-PL', { month: 'long', day: 'numeric' })
    }
};


   const campaigns = [
                {
                  from: array[1][0],
                  to:  array[5][0],
                //   from: unitSales[9][0],
                //   to: unitSales[23][0],
                  title: 'Wybrany Stan'
                }
   ]

  const renderPlotBand = ({ from, to, title }) => {
    const id = `band-${from}-${to}`;
    return (
      <PlotBand key={id} from={from} to={to} color="rgb(126, 156, 78)">
      {/* <PlotBand key={id} from={from} to={to} color="rgba(68, 170, 213, 0.3)"> */}
        <PlotBand.Label>{title}</PlotBand.Label>
      </PlotBand>
    );
  }

  const renderNavPlotBand = ({ from, to }) => {
    const id = `nav-band-${from}-${to}`;
    return (
      <PlotBand key={id} from={from} to={to} color="rgba(68, 170, 213, 0.3)" />
    );
  }
    // const { unitSales, notableEvents, campaigns } = this.state;

    console.log(array)
    console.log(array[1][0])
    console.log(state)
    return (
      <div className="app">
          
          <HighchartsProvider Highcharts={Highcharts}>
          <HighchartsStockChart  >
          {/* <HighchartsStockChart plotOptions={plotOptions} > */}
            <Chart zoomType="x" />

            <Title>Tabela Stanów</Title>

            <XAxis>
              <XAxis.Title>Czas</XAxis.Title>
              {campaigns.map(renderPlotBand)}
            </XAxis>

            <YAxis>
              <YAxis.Title>Liczba</YAxis.Title>
              <AreaSplineSeries id="unitSales" name="Unit Sales" data={array} />
              {/* <FlagsSeries id="events" onSeries="unitSales" data={notableEvents} /> */}
            </YAxis>

            {/* <Navigator>
              <Navigator.Series seriesId="unitSales" />
              <Navigator.XAxis labels={{ x: 0, y: 12 }}>
                {campaigns.map(this.renderNavPlotBand)}
              </Navigator.XAxis>
            </Navigator> */}
          </HighchartsStockChart>
        </HighchartsProvider>
      </div>
    );
  
}

export default App;


//======= 4 class : constructor ========

//   constructor (props) {
//     super(props);

//     const now = Date.now();
//     const unitSales = createRandomData(now, 1e8);
//     this.state = {
//       unitSales,
//       campaigns: [
//         {
//           from: unitSales[9][0],
//           to: unitSales[23][0],
//           title: 'US TV advert campaign'
//         },
//         {
//           from: unitSales[50][0],
//           to: unitSales[57][0],
//           title: 'UK Radio advert campaign'
//         }
//       ],
//       notableEvents: [
//         {
//           x: unitSales[0][0],
//           title: 'North American Launch Date'
//         },
//         {
//           x: unitSales[30][0],
//           title: 'European Launch Date'
//         },
//         {
//           x: unitSales[80][0],
//           title: 'Asian Launch Date'
//         }
//       ]
//     };
//   }