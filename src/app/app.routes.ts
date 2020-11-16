import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { Routes } from '@angular/router';



const ROUTES: Routes = [
  { path: '', component: UserProfileComponent},
  { path: 'sign-up', component: SignUpComponent},
  { path: 'userprofile', component: UserProfileComponent},
];

export { ROUTES };
