import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-error-status-matrics',
  templateUrl: './error-status-matrics.component.html',
  styleUrls: ['./error-status-matrics.component.css']
})
export class ErrorStatusMatricsComponent implements OnInit {
errorMetrics: any[] = [];

   constructor(private apiService: ApiService) {
    }
 ngOnInit(): void {
  this.apiService.getCountByStatus('').subscribe({
    next: (res: any) => {
      console.log(res);

      this.errorMetrics = Object.entries(res).map(([key, value]) => ({
        label: key,
        value: value
      }));
    },
    error: (err) => console.error(err)
  });
}


}
