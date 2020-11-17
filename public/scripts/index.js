


//Initialize variables if needed
let firstLetter,secondLetter;
let arrayIndex=[];
let locationArray=[];
let j=0;


const findWord = (word) => 
{
        firstLetter = word.substring(1,0);
        let searchWord=word.split('');
        console.log(searchWord);
        letters.forEach((letter,index)=>
        {
            if(letter.includes(firstLetter))
            {
                let location = letter.search(firstLetter);
                let arrayObject={index:index,location:location};
               // nextLetter = 
          
                switch(arrayObject.index)
                {
                     case 0:
                        switch(arrayObject.location)
                            {
                                case 0:
                                    if(letter.substring(Number(arrayObject.index)+1,1)==searchWord[1])
                                    console.log('object');
                                    else 
                                    if (arrayObject.index,letters[Number(arrayObject.location)+1].substring(arrayObject.location,1)== searchWord[1])
                                        console.log('object')
                                    
                                    /* if(letters[Number(arrayObject.location)] == searchWord[1])
                                    console.log('secondline');
 */
                                   // checkRight()
                                    //checkDown();
                                case 13:
                                    //checkLeft()&&checkDown();
                                default:
                                   // ckeckDown()&&checkLeft()&&checkRight()
                            }
                   /*  case 1-12:
                        switch(arrayObject.location)
                            {
                                case 0:
                                    checkRight()&&checkDown()&&checkTop();
                                case 13:
                                    checkLeft()&&checkDown()&&checkTop();
                                default:
                                    checkDown()&&checkTop()&& checkRight()&&checkLeft();
                            }
                    case 13:
                        switch(arrayObject.location)
                        {
                            case 0:
                                checkRight()&&checkTop();
                            case 13:
                                checkLeft()&&checkTop();
                            default:
                                checkRight()&&checkLeft()&&checkTop();

                        } */

                 } 
              }
        });
}

const changeColor = () => {

}

// findWord('bash')




 



  
