class Food {
   constructor(){
       this.button=createButton("PLAY");
       this.image=loadImage("images/Milk.png");
       this.foodStock=0;
       this.lastFed;
   }
getFoodStock(){
    this.foodStock=database.ref('Food');
    this.foodStock.on("value",(data)=> {
        foodS=data.val();
    });
}
updateFoodStock(count){

    database.ref('/').update({
        foodStock:count
    })
}
deductFood(){
    if (this.foodStock>0){

    this.button.mousePressed(()=>{
    //this.button.hide(),

    this.foodStock = this.foodStock-1
})    
    }
}
getFeedTime(lastFed){
    this.lastFed=lastFed;
}
display(){
    var x=80, y=100;
    imageMode(CENTER);
    image(this.image, 700, 200, 70, 70);
    if (this.foodStock!==0){
        for(var i=0; i<this.foodStock; i++){
            if (i % 10 === 0){
                x=80;
                y=y+50;
            }
            image(this.image, x, y, 50,50);
            x=x+30;

        }
    }
}


}

