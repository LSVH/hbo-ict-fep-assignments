import { Component } from '@angular/core';
import { MyScreen } from './screen/MyScreen';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'VerzoekSysteem';
	text = 'Dit is een grote lap tekst!';
	screen = new MyScreen(12, 24);
}
