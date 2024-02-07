import React, { useEffect, useState } from "react"
import { Routes as Switch, useLocation } from "react-router-dom"
import TopBarProgress from "react-topbar-progress-indicator"

TopBarProgress.config({
  barColors: {
    0: "#EF5A2A",
    "1.0": "#EF5A2A",
  },
  shadowBlur: 15,
  barThickness: 4,
});

const RouteSwitch = ({ children }) => {
   const [progress, setProgress] = useState(false)
   const [prevLoc, setPrevLoc] = useState("")
   const location = useLocation()

   useEffect(() => {
      setPrevLoc(location.pathname)
      setProgress(true)
      if(location.pathname===prevLoc){
          setPrevLoc('')
      }
   }, [location])

   useEffect(() => {
      setProgress(false)
   }, [prevLoc])

   return (
      <>
         {progress && <TopBarProgress />}
         <Switch>{children}</Switch>
      </>
   )
}

export default RouteSwitch