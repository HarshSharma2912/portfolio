import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-port',
  templateUrl: './port.component.html',
  styleUrls: ['./port.component.scss']
})
export class PortComponent implements OnInit {
  ngOnInit(): void {

    const observal = new Observable(sub =>{
      console.log("observal calling");
      
      let count = 0;
      setTimeout(() => {
        count=count+1;
        sub.next(count);
        // sub.next("this is next");
        // console.log("this is observalble call");
        // sub.next("this is next");
        
      }, 1000);
    })

    // observal.subscribe({
    //   next:(result)=>{
    //     console.log("this is sresult lsjfldjl=>",result);
        
    //   }
    // })
    observal.subscribe(reuslt=> console.log("this is subscribe =>",reuslt));

     





  }

  

}
