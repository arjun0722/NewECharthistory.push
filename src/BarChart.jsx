import React  from "react";
import ReactEcharts from "echarts-for-react";
import { WineData } from "./ApiData"
import { useHistory} from "react-router-dom"
function BarChart() {

 let history = useHistory()


  const onUserDatazoom=(event)=> {
 
    history.push("/?zoom=" + Math.floor(event.end)+ "%" )
   }



   const onDataZoom = {
    "dataZoom" : onUserDatazoom
   }
  

  const option = {
    xAxis: {
        type: "category",
        data: WineData.map((item)=>{
          return item.Alcohol
        })
       
        
      },
      dataZoom: [
        {
          type: 'inside'
        },
        {
          type: 'slider'
        }
      ],
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: WineData.map((item)=>{
            return item['Malic.acid']
          }),
          type: "bar",
        },
      ],
    };
    
    
    return <ReactEcharts option={{
      ...option,
      // "dataZoom": {"start" : 0 , "end" : 5}
    }}
    onEvents={onDataZoom}
    // opts={{renderer:"svg"}}
    // notMerge ={true}
    />;
    
  }
  export default BarChart
  









  