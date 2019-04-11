import { Component } from '@angular/core';
import { DatataService } from '../datata.service';
import { Post } from '../post';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  //Anuglar will put the value from the textarea
  postContent = "";
  imageUrl = "";
  to = "Everyone"; //default value

  //injection below, hit enter when typing Data Service to get line 2
  constructor(private dataSrv:DatataService){

  }

  createPost(){
    console.log("create btn clicked", this.postContent);

    //create an instance of the model and save it to the post
    var p = new Post();
    p.content = this.postContent; //assign the content
    p.imageUrl = this.imageUrl; //asign the image URL
    p.to = this.to

    /*
    -create a variable above (like postConent [imageUrl])
    -html
      -create a control (ion-input)
      -bind the value to the variable

    -assign the variable to p object
    */

    //save the post into the service
    console.log(p);
    this.dataSrv.savePost(p);
    //clear capture form
    this.deleteThread();
  }
  deleteThread(){
    this.postContent = "";
    this.imageUrl = "";
  }
}

/*
-create a service (data)
  -put an array
  -savePost() and getPosts() methods

-inject the dataService into home.page.ts component (use the constructor)
*/
