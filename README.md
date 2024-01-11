# Sample DICOM Viewer

![DICOM Viewer](https://github.com/3dverse/sample-dicom-viewer/blob/main/screenshot.png?raw=true)

## Description

A basic DICOM Multiplanar Reconstruction (MPR) viewer using 4 viewports.
The sample assets come from a DICOM file generated from a CT scan with IV injection.

### Controls

Click on a viewport to focus on the viewport. Use the mouse wheel to zoom in or out. Drag an axis to reposition them the camera in the 3D space.

## Assets inside

/Public

- `Main Scene`: Scene containing the Volume.

/Assets

- `Carotid angioplasty Material`: Volume material.
- `Carotid angioplasty Volume`: 3D dimensional texture.

## Run it locally

`'%YOUR_PUBLIC_TOKEN%'` by the public token of your application found in the "API Access" section.
`'%YOUR_MAIN_SCENE_UUID%'` by the UUID of the main scene generated in the Public folder of the "Asset browser" section.

The application is a static frontend that can be served by any web server of your convenience.

### Node

You can use the [serve](https://www.npmjs.com/package/serve) package:

```
npx serve
```

### Python

You can use the [http.serve](https://docs.python.org/3/library/http.server.html) command:

```
python -m http.server
```

Now open your web browser at the url indicated by your server (http://localhost:XXXX) to run your application.
