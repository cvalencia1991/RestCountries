import { Component, inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet, Router, NavigationStart } from '@angular/router';
import { MenuBar } from './components/menu-bar/menu-bar';
import { Copyright } from './copyright';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuBar, Copyright],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
