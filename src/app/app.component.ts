import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample_project_frontend';

  nonPermittedUrlsForHeader: any[] = ['resources_admin'];
  
  constructor(public route: Router){}

  ngOnInit(){
    
  }

  isHeaderPermissible(){
    if(this.nonPermittedUrlsForHeader.includes(this.route.url)){
      return false;
    }else{
      return true;
    }
  }
}
