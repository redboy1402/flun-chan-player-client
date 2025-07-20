import { Routes } from '@angular/router';
import {HomePage} from './HomePage/page';
import {GamePage} from './GamePage/page';

export const routes: Routes = [
  {path: "", component: HomePage},
  {path: "game", component: GamePage},
];
