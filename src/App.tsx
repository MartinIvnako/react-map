import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Legend from "./components/legend.component";
import MapControl from "./components/map-control.componet";
import Map from "./components/map.component";
import Navigation from "./components/navigation.component";

function App() {
    return (
        <main>
            <Legend />
            <MapControl />
            <Map />
            <Navigation />
        </main>
    );
}

export default App;
