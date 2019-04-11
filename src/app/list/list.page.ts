import { Component, OnInit } from '@angular/core';
import { DatataService } from '../datata.service';
import { Post } from '../post';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  postToDisplay: Post[] = [];

  constructor(private dataSrv: DatataService){
    //subscribe to changes in the observable
    this.dataSrv.getPosts().subscribe(data => {
      //filter what messages should be shown
      for(var i=0; i<data.length; i++){
        var thePost = data[i];
        //if the post is to everyone OR to me add it to the array
        if(thePost.to=="Everyone"||thePost.to=="Alex"){
          this.postToDisplay.push(thePost);
        }
      }
    });
  }
  ngOnInit() {}
  }


  /*
  Inject the service
  create a local array
  html
    create an *ngFor to cycle through the local array
    create a card for each post
    */
