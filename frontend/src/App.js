

import { useState } from "react";
import ReactMapGL from 'react-map-gl';


function App() {
  const [viewport,setViewport]=useState({
    width:"100vw",
    height:"100vh",
    // latitude:37.7577,
    // longitude:-122.4376,
    zoom:2
  });
  return (
    <div className="App">
  
     <ReactMapGL

      {...viewport}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={process.env.REACT_APP_MAPBOX}
      onViewportChange={nextViewport=>setViewport(nextViewport)}
      
      
     />
    
    </div>
  );
}

export default App;
