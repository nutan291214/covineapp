import { Component, OnInit } from '@angular/core';
import { CenterInfo } from '../_helpers/centerInfo';
import { BookingAppService } from '../_services/bookingapp';

@Component({
  selector: 'app-vaccine',
  templateUrl: './vaccine.component.html',
  styleUrls: ['./vaccine.component.css']
})
export class VaccineComponent implements OnInit {
    data: any;
    slote: CenterInfo[];
    session: [object];
    constructor(private bookingappService: BookingAppService) {

    }
    ngOnInit(): void {
       this.bookingappService.getLocationByStates().subscribe(response => {
            this.data = response;
            this.slote = this.data.centers;
            // console.log(this.data);
           // console.log(this.slote);
            for (let i = 0 ; i< this.slote.length ; i++ ) {
                 // console.log(this.slote[i].sessions);
                  this.session = this.slote[i].sessions;
            }
            console.log(this.session);
       });

    }
}
