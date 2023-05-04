interface mapable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(divId) as HTMLElement,
      {
        zoom: 1,
        center: { lat: 0, lng: 0 },
      }
    );
  }

  addMarker(mapable: mapable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: mapable.location,
    });

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mapable.markerContent(),
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
