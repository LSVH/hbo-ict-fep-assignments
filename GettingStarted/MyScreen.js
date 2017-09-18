var MyScreen = /** @class */ (function () {
    function MyScreen(width, height) {
        this.width = width;
        this.height = height;
        if (width > 0 && height > 0) {
            this._width = width;
            this._height = height;
        }
        else {
            try {
                throw new Error('Invalid dimension(s).');
            }
            catch (e) {
                console.log(e.message);
            }
        }
    }
    MyScreen.prototype.getOrientation = function () {
        var Orientation;
        (function (Orientation) {
            Orientation[Orientation["Landscape"] = 1] = "Landscape";
            Orientation[Orientation["Potrait"] = 2] = "Potrait";
        })(Orientation || (Orientation = {}));
        return this._width > this._height ? Orientation.Landscape : Orientation.Potrait;
    };
    return MyScreen;
}());
var s = new MyScreen(2, 0);
console.log(s.getOrientation());
