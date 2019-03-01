declare module 'react-native-fullwidth-image' {
	import {Component} from 'react';
	import {StyleProp, ImageStyle, ImageSourcePropType, ImageLoadEventData, NativeSyntheticEvent} from 'react-native';

	type Props = {
		style?: StyleProp<ImageStyle>,
		source: ImageSourcePropType,
		width?: number;
		height?: number;
		ratio?: number;
		onLoad?: (event: NativeSyntheticEvent<ImageLoadEventData>) => void,
		onLoadEnd?: () => void,
		onLoadStart?: () => void
	}

	export default class FullWidthImage extends Component<Props> {}
}
