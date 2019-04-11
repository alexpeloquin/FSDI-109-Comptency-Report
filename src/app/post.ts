export class Post {
    public content= "";
    public date: Date;
    public from= "";
    public to= "";
    public imageUrl= "";


    //default values
    constructor(){
        this.from="Alex";
        this.to="Everyone";
        this.date = new Date(); //curent date and time into date variable
    }
}



