import React, { Component } from 'react';
import GoogleMap from "react-google-maps/lib/GoogleMap";
import GoogleMapLoader from "react-google-maps/lib/GoogleMapLoader";
import Marker from "react-google-maps/lib/Marker";

const Local = ({name}) => {
  const markers = [{
    position: {
      lat: -23.0046326,
      lng: -43.3410536,
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
            defaultZoom={17}
            disableDefaultUI={true}
            defaultCenter={{ lat: -23.0046326, lng: -43.3410536 }}>
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
