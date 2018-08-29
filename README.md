# HTML Template

Follow the steps below to use this template to build a visual narrative.

1.  Click the green "Clone or Download" button, and then "Download ZIP".
1.  Unzip the downloaded file and open the `index.html` file in a text editor
1.  Replace the text and media with your own content.
1.  Optionally use the built-in CSS classes (`.left`, `.center` and `.right`) to position your media. You can find examples of how to do this in the `index.html` file.

The template was created by Chuyi Zhang and Zijin Gao at NYU Shanghai's IMA program.

# Map Template

The guide below shows how to create a map of Shanghai with your own data on Carto, as demonstrated in [this Carto map](https://jd3036.carto.com/builder/699904d2-7ae0-4be9-84c3-2f2e370fc263/embed).

## Getting Started

### Dashboard

The dashboard is the place user can access their online map files on Carto’s website. You may open your previous work or create a new map in the dashboard.

![Carto 13](assets/carto24.png)

### Creating a map

If you have a Carto map file (xx.carto), you can simply drag and drop the file to this dashboard to upload it. To create a new map file, click the button “NEW MAP” on the top-right corner. Then it will lead you to the dataset page. On this page, you may see the existing datasets or you may drag and drop a CSV, XLS, ZIP, KML, GPX file here to upload your dataset. Here, we use the existing dataset “thisFile” to create the map (select it and click on the button in bottom-right corner “CREATE MAP”).

![Carto 2](assets/carto22.png)

### Map Functionality

#### Basic Functions

This is the initial presence of the newly created map (if there’s GPS coordinates information in the dataset). When clicking on the “more options” (aka. The three dots) next to the map name, there’s a menu where you may edit/delete/download the map. It is highly recommended to download your xx.carto map file as a backup because all your edits on the css and html will be saved in the xx.carto file along with the data.

![Carto 3](assets/carto13.png)

#### Changing Basemap

To change the basemap, you may click the “BASEMAP” bar to browse more options. For example, in this case we choose Mapbox basemap for the project.

![Carto 4](assets/carto14.png)

![Carto 5](assets/carto3.png)

#### Editing data points

The individual data points could be edited in the map interface. When you move the cursor to the data point, there will be a pen icon.

![Carto](assets/carto15.png)

Click the pen icon, you will find the attributes and be able to edit them accordingly.

![Carto](assets/carto6.png)

#### Visualization style

First, we need to enter the data point layer, by clicking on the layer. Also, you may make it invisible if you click on the eye icon.

![Carto](assets/carto19.png)

When you enter the layer, there are five options. In this documentation, we will look into the “STYLE”, “DATA” and “POP-UP” for the fundamentals.

A. The “STYLE” option is for changing the style (color, shape, stroke, blending and etc.).

![Carto](assets/carto10.png)

B. The “DATA” option will analyze the dataset and enable you to add widgets on the map for the analysis. Users can interact with the widget and filter the information (e.g. selecting specific year or range of year, showing the data points in the specific district).

![Carto](assets/carto23.png)
![Carto](assets/carto12.png)
![Carto](assets/carto4.png)

C. “POP-UP” is to create the information window for each data point. The type of information could be text, sound, audio and video. The style of the pop-up is can be edited in HTML mode.

![Carto](assets/carto21.png)
![Carto](assets/carto2.png)

Since the pop-up is in HTML, it makes it possible for us to embed media files in addition to pure text in the pop-up window. If you have the url(s) linked towards the media file, then you can edit the url(s) in the dataset with some HTML coding to embed them in. We will introduce how to format the data entries in the next section in 2.4.

### Dataset

You may access the datasets through the dashboard.

![Carto](assets/carto26.png)

Or use the toggle in the bottom-right corner of the map.

![Carto](assets/carto18.png)

#### Data type

The data types include: geometry data, number, string, date and boolean. The data type will affect the data analysis (e.g. if you set numbers as strings, the “DATA” option will not be able to recognize it and generate the column chart). You may edit the entries by double clicking the cell.

![Carto](assets/carto16.png)

#### GPS data

GPS data is mandatory for visualizing each data point on the map. It follows the format of:

```json
{ "type": "Point", "coordinates": [longitude, latitude] }
```

![Carto](assets/carto25.png)

_When you upload the original data file to your dataset in Carto, if there are columns of “latitude” and “longitude” in the file, Carto will automatically convert it into the geometry data type._

![Carto](assets/carto20.png)

BUT, it will not work if you put it in the original file as “121.23, 31.25” since Carto will take this as a string.

![Carto](assets/carto5.png)

Notice: Since there’s always offset of GPS location in China, it is highly recommended to double check the exact location on the map. The easiest solution to fix it in Carto is to edit the GPS coordinates by hand to make it in the correct place.

![Carto](assets/carto9.png)
![Carto](assets/carto1.png)

#### Media file data

It usually goes by as following to embed image in a web page.

```html
<div><img src="some_url_for_media" width="200" height="200"></div>
```

As we mentioned before, the pop-up window is HTML. So when the HTML file load the data entries in the dataset and the data is in HTML code format, then the media files can be loaded. (e.g. `{{video_url}}` is loading the video_url cell in the dataset for the specific data points, if the string is in HTML format, then it will work with the HTML code for the pop-up.)

![Carto](assets/carto8.png)

To be concise, what you need to do for the media file data columns is:

**Image:** `<IMG SRC="url_of_image_file" ALT="image not available" WIDTH=160 HEIGHT=160>`. _Check the [HTMl img tag reference](https://www.w3schools.com/tags/tag_img.asp)_

![Carto](assets/carto7.png)

**Video:** `<VIDEO SRC="url_of_video_file" CONTROLS type="video/mp4" ALT="video not available" WIDTH=165 HEIGHT=165>`. _Please make sure you change the “type” accordingly. If your url goes to a .ogg file, you need change the type="video/ogg". Check the [HTMl video tag reference](https://www.w3schools.com/tags/tag_video.asp)_

![Carto](assets/carto17.png)

**Audio:** `<AUDIO SRC="url_of_audio_file" CONTROLS type="audio/mpeg" ALT="audio not available">`. _Check the [HTMl audio tag reference](https://www.w3schools.com/tags/tag_audio.asp)_

![Carto](assets/carto11.png)

You can upload your files via Google Drive and use them in Carto like this:

1.  Set the file as public on the web
1.  Get the URL of the shared file:
    (e.g. `https://drive.google.com/file/d/1ssjOehZzBBY5-jVqj860pP8_MWnYKh7A/view?usp=sharing`)
1.  Edit it into the following structure: `https://drive.google.com/uc?export=view&id=1ssjOehZzBBY5-jVqj860pP8_MWnYKh7A`
1.  Embed the link into the data as show above.

This guide was written by Jiaqi Dong at NYU Shanghai's IMA program.
