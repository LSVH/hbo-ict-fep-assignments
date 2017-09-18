import { Orientation } from './Orientation';

export class MyScreen {
	private _width: number;
	private _height: number;
	constructor(public width: number, public height: number) {
		if (width > 0 && height > 0)  {
			this._width = width;
			this._height = height;
		} else {
			try {
				throw new Error('Invalid dimension(s).');
			}
			catch (e){
				console.log((<Error>e).message);
			}
		}
	}

	public getOrientation() {
		return this._width > this._height ? Orientation.Landscape : Orientation.Potrait;
	}
}