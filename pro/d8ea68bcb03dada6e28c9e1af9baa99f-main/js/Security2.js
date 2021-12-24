class Security2 {

    constructor(){

         

        this.button1 = createButton('1');
        this.button1.position(displayWidth-100,150);
        this.button1.style('background', 'lightgrey');    

        
        this.button2 = createButton('2');
        this.button2.position(displayWidth-100,250);
        this.button2.style('background', 'lightgrey');

          

        this.button3 = createButton('3');
        this.button3.position(displayWidth-100,350);
        this.button3.style('background', 'lightgrey'); 

         

        this.button4 = createButton('4');
        this.button4.position(displayWidth-100,450);
        this.button4.style('background', 'lightgrey'); 
    }

    display(){

        this.button1.mousePressed(() => {
            
        });

        this.button2.mousePressed(() => {
           
        });

        this.button3.mousePressed(() => {
            this.button1.hide();
            this.button2.hide();
                this.button3.hide();
                this.button4.hide();
                score++;
                        
        });

        this.button4.mousePressed(() => {
            
        });

    }
}