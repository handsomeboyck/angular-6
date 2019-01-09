import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { ShopComponent } from './shop/shop.component';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { UserlistComponent } from './user/userlist/userlist.component';
import { VipComponent } from './user/vip/vip.component';
import { AdduserComponent } from './user/adduser/adduser.component';
import { EdituserComponent } from './user/edituser/edituser.component';



//请求数据
import { HttpModule } from '@angular/http';
//注意：在index.html引入css  <link href="https://cdn.quilljs.com/1.2.2/quill.snow.css" rel="stylesheet">

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    UserComponent,
    ProductComponent,
    HomeComponent,
    UserlistComponent,
    VipComponent,
    AdduserComponent,
    EdituserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
