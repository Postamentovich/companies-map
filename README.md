## Interaction Map with Euro Zones

1. [Features](#features)
1. [Technologies and libraries used](#technology)
1. [Project structure](#structure)
1. [ENV Variables](#variables)
1. [Google Sheet Description](#googlesheet)

### <a name="features">Features</a>

-   Simple password protected
-   Europe map divided into transport zones
-   On hover zone highlighted on the map
-   On hover zone show popup with information about companies
-   On click zone show detail information in side card
-   Getting information about companies from google sheet

### <a name="technology">Technologies and libraries used</a>

-   React
-   Mapbox
-   Turf
-   TableTop

### <a name="structure">Project structure</a>

```
└── src/                            # Main folder
    ├── api/                        # Services for API interactions
    ├── assets/                     # App assets (geojson, fonts)
    ├── components/                 # React components
    ├── controls/                   # Mapbox controls
    ├── layers/                     # Mapbox layers
    └── popup/                      # Mapbox popup
    App.tsx                         # Main component
    index.scss                      # Styles css
```

### <a name="variables">ENV Variables</a>

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

### <a name="googlesheet">Google Sheet Description</a>
