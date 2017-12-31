# react-native-fullwidth-image

**A responsive Image element that takes the full width of its parent element while maintaining aspect ratio**

The original idea comes from [here](https://stackoverflow.com/questions/29642685/maintain-aspect-ratio-of-image-with-full-width-in-react-native/40207328).

## Installation

```
npm install --save react-native-fullwidth-image
```

## Usage

Start by importing the module

```js
import FullWidthImage from 'react-native-fullwidth-image'
```

Now, you can use the `FullWidthImage` element in multiple ways as follows:

#### Initial Dimensions

You can provide an initial width and height, `react-native-fullwidth-image` will
infer the aspect ratio from the provided dimensions and keep it as the image is
scaled up to 100% of its parent's width

```js
  <FullWidthImage style={{ ... }} source={require(...)} width={480} height={272} />
```
**An aspect ratio of 1 will give you square images**

#### Aspect Ratio

You can also provide a predefined aspect ratio (a value between 0 and 1) as follows

```js
  <FullWidthImage style={{ ... }} source={{uri: ..}} ratio={3/4} />
```
**An aspect ratio of 1 will give you square images**

#### Automatic detection

`react-native-fullwidth-image` can automatically detect the aspect ratio of
remote images, all you need to provide is the `uri` as you would do with the
regular `Image` component.

```js
  <FullWidthImage style={{ ... }} source={{uri: ..}} />
```


## Demo

We use `react-native-fullwidth-image` in **Apperture** [iOS](https://itunes.apple.com/app/id1314756787) / [Android](https://play.google.com/store/apps/details?id=com.aperture)

## License

[MIT License](http://opensource.org/licenses/mit-license.html). © Wassim Gharbi
