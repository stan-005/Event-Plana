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
import { OrganizerProfileComponent } from './components/organizer/organizer-profile/organizer-profile.component';
import { AdminProfileComponent } from './components/admin/admin-profile/admin-profile.component';
import { ConfirmResetComponent } from './components/auth/confirm-reset/confirm-reset.component';
import { ManageEventsComponent } from './components/organizer/manage-events/manage-events.component';
import { EventCreationComponent } from './components/organizer/event-creation/event-creation.component';
import { EventEditComponent } from './components/organizer/event-edit/event-edit.component';
import { EventDetailsComponent } from './components/organizer/event-details/event-details.component';
import { OrganizerContentComponent } from './components/organizer/organizer-content/organizer-content.component';
import { DashboardContentComponent } from './components/admin/dashboard-content/dashboard-content.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'events', component: EventPageComponent },
  { path: 'events/create', component: EventCreationComponent },
  { path: 'events/edit/:id', component: EventEditComponent },
  { path: 'events/:id', component: EventDetailsComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'confirm-reset', component: ConfirmResetComponent },
  { path: 'password-reset', component: ResetPasswordComponent },

  // USER ROUTES
  { path: 'user', component: UserDashboardComponent, children: [
    { path: 'events', component: EventsComponent },
    { path: 'bookings', component: BookingsComponent },
    { path: 'user-profile', component: UserProfileComponent }
  ]},

  // ADMIN ROUTES
  { path: 'admin', component: AdminDashboardComponent, children: [
    { path: 'dashboard', component:DashboardContentComponent },
    { path: 'events', component: EventsComponent },
    { path: 'users', component: ManageUsersComponent },
    { path: 'admin-profile', component: AdminProfileComponent },
  ]},

  // ORGANIZER ROUTES
  { path: 'organizer', component: OrganizerDashboardComponent, children: [
    { path: 'dashboard', component: OrganizerContentComponent },
    { path: 'manage-events', component: ManageEventsComponent },
    { path: 'organizer-profile', component: OrganizerProfileComponent }
  ]}
];
