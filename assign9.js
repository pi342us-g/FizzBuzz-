// fizzbuzz: write a for loop to print the ibers
//from 1 to 100 .But for multiples of 3, print
// "fizz" instead of the iber and for multiples of 5,print "Buzz".for ibers which are multiples of both 3 and 5, print "fizzbuzz"


for(let i =1;i<=100;i++){
    if(i%3==0 && i%5==0){
        console.log('fizzbuzz')
    }
    else if (i%3==0){
        console.log('fizz')
    }
    else if(i%5==0){
        console.log('Buzz') 
    }
 
    else{
        console.log(i)
    }
   
}
