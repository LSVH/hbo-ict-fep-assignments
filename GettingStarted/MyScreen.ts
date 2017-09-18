class MyScreen {
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
		enum Orientation {
			Landscape = 1,
			Potrait = 2
		}
		return this._width > this._height ? Orientation.Landscape : Orientation.Potrait;
	}
}

var s = new MyScreen(2, 0);
console.log(s.getOrientation());