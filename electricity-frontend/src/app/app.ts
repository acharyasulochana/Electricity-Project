import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import { Sidebar } from './layout/sidebar/sidebar';
import { Home } from './pages/home/home';
import { Navigation } from './layout/navigation/navigation';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Sidebar, Home, Navigation],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('electricity-frontend');
}
