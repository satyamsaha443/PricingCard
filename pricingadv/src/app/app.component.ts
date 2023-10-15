import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pricingadv';

plan =[
  {
    plan: "FREE",
    price: 0,
    users: ["", "Single User"],
    storage: 5,
    public: "Unlimited Public Projects",
    access:"Commuinity Access",
    private:["text-muted",  "fa fa-times", "Unlimited Private Projects"],
    support:["text-muted", "fa fa-times",  "Dedicated Phone Support"],
    domain:"",
    subdomain:["text-muted", "fa fa-times",  "Free Subdomains"],
    status:["text-muted",  "fa fa-times", "Monthly Status Reports"]
  },
  {
    plan: "PLUS",
    price: 9,
    users: ["5 Users", ""],
    storage: 50,
    public: "Unlimited Public Projects",
    access:"Commuinity Access",
    private:["", "fa fa-check", "Unlimited Private Projects"],
    support:["", "fa fa-check", "Dedicated Phone Support"],
    domain:"",
    subdomain:["", "fa fa-check", "Free Subdomains"],
    status:["text-muted", "fa fa-times", "Monthly Status Reports"]
  },
  {
    plan: "PRO",
    price: 49,
    users: [" Users", ""],
    storage: 150,
    public: "Unlimited Public Projects",
    access:"Commuinity Access",
    private:["", "fa fa-check", "Unlimited Private Projects"],
    support:["", "fa fa-check", "Dedicated Phone Support"],
    domain:"Unlimited ",
    subdomain:["", "fa fa-check", "Free Subdomains"],
    status:["", "fa fa-check", "Monthly Status Reports"]
  }
]



}
