## Interaction Map with Euro Zones

https://companies-map-4739a.web.app/

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

[Link on spreadsheet](https://docs.google.com/spreadsheets/d/1WiCHITHe2RrYocz_xxnoXxwhNDIibQhoIGe6hZpNU6c/edit#gid=1139380687)

We have 3 sheets:

-   Zones
-   Carriers
-   Utils

### Utils

![Utils](https://github.com/Postamentovich/companies-map/blob/master/src/assets/images/utils.PNG)

IMPORTANT! DO NOT CHANGE THIS LIST <br>
List of zone codes. Used to connect table and application data.

### Zones

![Utils](https://github.com/Postamentovich/companies-map/blob/master/src/assets/images/zones.PNG)
IMPORTANT! Do not change fields marked in gray <br>
The first column is auxiliary code, taken from the utils table.
For each zone, you can add the required characteristic and the transport company for it. To do this, you need to add a column. In the first line, you need to indicate the name of the characteristic (for example, 1 - 30kg). It is very important that the characteristic on the first line is unique. If you need to add several companies for one characteristic, use different names for example (> 2500 kg 1, > 2500 kg 2). Indicate the transport company for the desired zone. It is very important that the company name coincides with the name in the carriers tab, for this a drop-down list has been made.

### Carriers

![Utils](https://github.com/Postamentovich/companies-map/blob/master/src/assets/images/carriers.PNG)
IMPORTANT! Change the fields marked in gray with care, the carrier's name must match the name in the zone table<br>
Carrier information for the zone is taken from this table. You can edit all information about a carrier, add and remove carriers.
