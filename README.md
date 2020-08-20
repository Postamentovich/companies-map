## Interaction Map with Euro Zones

### Features

-   Simple password protected
-   Europe map divided into transport zones
-   On hover zone highlighted on the map
-   On hover zone show popup with information about companies
-   On click zone show detail information in side card
-   getting information about companies from google sheet

### Technologies and libraries used

-   React
-   Mapbox
-   Turf
-   TableTop

### Project structure

```
└── src/                            # Main folder
    ├── api/                        # Services for API interactions
    ├── components/                 # React components
    ├── controls/                   # Mapbox controls
    ├── layers/                     # Mapbox layers
    └── popup/                      # Mapbox popup
    App.tsx                         # Main component
    index.scss                      # Styles css
```

### ENV VARIABLES:

<table class="table table-bordered table-striped">
  <thead>
  <tr>
    <th style="width: 100px;">variable</th>
    <th >description</th>
  </tr>
  </thead>
  <tbody>
    <tr>
      <td>REACT_APP_MAPBOX_TOKEN</td>
      <td>Mapbox token (https://docs.mapbox.com/help/how-mapbox-works/access-tokens/)</td>
    </tr>
    <tr>
      <td>REACT_APP_PASSWORD</td>
      <td>App enter password</td>
    </tr>
    <tr>
      <td>REACT_APP_GOOGLE_SHEET_URL</td>
      <td>Google sheet url</td>
    </tr>
  </tbody>
</table>
