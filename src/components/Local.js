import React, { Component } from 'react';
import GoogleMap from "react-google-maps/lib/GoogleMap";
import GoogleMapLoader from "react-google-maps/lib/GoogleMapLoader";
import Marker from "react-google-maps/lib/Marker";

const Local = ({name}) => {
  const markers = [{
    position: {
      lat: -22.9015537,
      lng: -43.1770694,
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
            defaultZoom={16}
            disableDefaultUI={true}
            defaultCenter={{ lat: -22.9015537, lng: -43.1770694 }}>
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
