import { Component, OnInit } from '@angular/core';
import { AccentService } from '@services/accent-service.service';
import { IdbService } from '@services/idb.service';

@Component({
	selector: 'theme-switcher',
	templateUrl: './theme-switcher.component.html',
	styleUrls: ['./theme-switcher.component.scss']
})
export class ThemeSwitcherComponent implements OnInit {
	themeMode: "dark" | "light" = "light";
	prefersDarkScheme: MediaQueryList;
	isDarkMode: boolean;
	prefersDarkSchemeFromIdb: "dark" | "light" = "light";


	constructor(private idb: IdbService, private accent: AccentService) {
		this.prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
		this.isDarkMode = this.prefersDarkScheme.matches;
	}

	async ngOnInit(): Promise<void> {
		this.idb.connectToIDB();
		this.prefersDarkSchemeFromIdb = (await this.idb.getData("Material You", "preferredColorScheme"));

	
			this.setThemeMode("dark");

		
	}

	Login() {
		alert("redirecting to login")
	}


}
