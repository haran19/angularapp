import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { HomeComponent } from './home/home.component';
import { WeatherComponent } from './weather/weather.component';
import { FarmerComponent } from './farmer/farmer.component';
import { InformationcenterComponent } from './informationcenter/informationcenter.component';
import { DiscussionforumComponent } from './discussionforum/discussionforum.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { MiddlemanComponent } from './middleman/middleman.component';
import { AgroShopComponent } from './middleman/agro-shop/agro-shop.component';
import { AgroServiceComponent } from './middleman/agro-service/agro-service.component';
import { BankandInsuranceComponent } from './middleman/bankand-insurance/bankand-insurance.component';
import { ChatComponent } from './chat/chat.component';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
    HomeComponent,
    WeatherComponent,
    FarmerComponent,
    InformationcenterComponent,
    DiscussionforumComponent,
    AdvertisementComponent,
    FeedbackComponent,
    MiddlemanComponent,
    AgroShopComponent,
    AgroServiceComponent,
    BankandInsuranceComponent,
    ChatComponent,
  ],
})
export class PagesModule {
}
