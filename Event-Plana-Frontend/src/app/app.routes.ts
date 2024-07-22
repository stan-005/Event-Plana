import { Routes } from '@angular/router';
import { HomeComponent } from './components/landing-page/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { UserDashboardComponent } from './components/user/user-dashboard/user-dashboard.component';
import { OrganizerDashboardComponent } from './components/organizer/organizer-dashboard/organizer-dashboard.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { LandingComponent } from './components/landing-page/landing/landing.component';
import { AboutPageComponent } from './components/landing-page/pages/about-page/about-page.component';
import { EventPageComponent } from './components/landing-page/pages/event-page/event-page.component';
import { ContactPageComponent } from './components/landing-page/pages/contact-page/contact-page.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ResetPasswordComponent } from './components/auth/password-reset/password-reset.component';
import { EventsComponent } from './components/landing-page/events/events.component';
import { BookingsComponent } from './components/user/bookings/bookings.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { ManageUsersComponent } from './components/admin/manage-users/manage-users.component';
import { ManageOrganizersComponent } from './components/admin/manage-organizers/manage-organizers.component';
import { ReportsComponent } from './components/admin/reports/reports.component';
import { SettingsComponent } from './components/admin/settings/settings.component';
import { CreateEventComponent } from './components/organizer/create-event/create-event.component';
import { DashboardContentComponent } from './components/user/dashboard-content/dashboard-content.component';
import { OrganizerProfileComponent } from './components/organizer/organizer-profile/organizer-profile.component';
import { AdminProfileComponent } from './components/admin/admin-profile/admin-profile.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  {path: 'home', component: HomeComponent},
  { path: 'about', component: AboutPageComponent },
  { path: 'events', component: EventPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent},
  {path: 'password-reset', component: ResetPasswordComponent},

//USER ROUTES
  { path: 'user', component: UserDashboardComponent, children: [
    {path:'dashboard',component:DashboardContentComponent},
    {path:'events',component:EventsComponent},
    {path:'bookings',component:BookingsComponent},
    {path:'user-profile',component:UserProfileComponent}
  ]},
  
  //ADMIN ROUTES
  { path: 'admin', component: AdminDashboardComponent, children: [
    {path:'dashboard',component:DashboardContentComponent},
    {path:'events',component:EventsComponent},
    {path: 'users', component: ManageUsersComponent},
    {path: 'organizers', component: ManageOrganizersComponent},
    {path: 'reports', component: ReportsComponent},
    {path: 'admin-profile', component: AdminProfileComponent},
    {path: 'settings', component: SettingsComponent}

  ] },

  //ORGANIZER ROUTES
  { path: 'organizer', component: OrganizerDashboardComponent, children: [
    {path:'dashboard',component:DashboardContentComponent},
    {path:'events',component:EventsComponent},
    {path: 'create-event', component: CreateEventComponent},
    {path: 'organizer-profile', component: OrganizerProfileComponent}
  ]},

];
