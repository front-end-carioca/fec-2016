import React, { Component } from 'react';
import GoogleMap from "react-google-maps/lib/GoogleMap";
import GoogleMapLoader from "react-google-maps/lib/GoogleMapLoader";
import Marker from "react-google-maps/lib/Marker";

const Local = ({name}) => {
  const markers = [{
    position: {
      lat: 25.0112183,
      lng: 121.52067570000001,
    },
    key: `Local do Evento`,
    defaultAnimation: 2,
  }];
  return (
    <section className="section local" id={name}>
      <GoogleMapLoader
        containerElement={
          <div className="wrapper-maps" />
        }
        googleMapElement={
          <GoogleMap
            ref={(map) => console.log(map)}
            defaultZoom={3}
            defaultCenter={{ lat: -25.363882, lng: 131.044922 }}>
            {markers.map((marker, index) => {
              return (
                <Marker
                  {...marker}
                  onRightclick={() => props.onMarkerRightclick(index)} />
              );
            })}
          </GoogleMap>
        }
      />
    </section>
  );
};

export default Local;
