import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { NosotrosComponent } from './Pages/nosotros/nosotros.component';
import { ContactoComponent } from './Pages/contacto/contacto.component';
import { PacksComponent } from './Pages/packs/packs.component';
import { CheckoutComponent } from './Pages/checkout/checkout.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'sobre-nosotros', component: NosotrosComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'packs', component: PacksComponent },
    { path: 'checkout', component: CheckoutComponent }, // <-- Le agregué el "Component" y la coma al final
    { path: '**', redirectTo: '' }
];