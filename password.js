const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  

const checkPassword = (password) =>{
    const lit = 
                                                                                                                                                                                                                                                                   
   " FFFFFFFFFFFFFFFFFFFFFFRRRRRRRRRRRRRRRRR   EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE \n"+                                                             
   " F::::::::::::::::::::FR::::::::::::::::R  E::::::::::::::::::::EE::::::::::::::::::::E  \n"+                                                            
   " F::::::::::::::::::::FR::::::RRRRRR:::::R E::::::::::::::::::::EE::::::::::::::::::::E  \n"+                                                            
   " FF::::::FFFFFFFFF::::FRR:::::R     R:::::REE::::::EEEEEEEEE::::EEE::::::EEEEEEEEE::::E  \n"+                                                            
   "   F:::::F       FFFFFF  R::::R     R:::::R  E:::::E       EEEEEE  E:::::E       EEEEEE  \n"+                                                            
   "   F:::::F               R::::R     R:::::R  E:::::E               E:::::E               \n"+                                                            
   "   F::::::FFFFFFFFFF     R::::RRRRRR:::::R   E::::::EEEEEEEEEE     E::::::EEEEEEEEEE     \n"+                                                            
   "   F:::::::::::::::F     R:::::::::::::RR    E:::::::::::::::E     E:::::::::::::::E     \n"+                                                            
   "   F:::::::::::::::F     R::::RRRRRR:::::R   E:::::::::::::::E     E:::::::::::::::E     \n"+                                                            
   "   F::::::FFFFFFFFFF     R::::R     R:::::R  E::::::EEEEEEEEEE     E::::::EEEEEEEEEE     \n"+                                                            
   "   F:::::F               R::::R     R:::::R  E:::::E               E:::::E               \n"+                                                            
   "   F:::::F               R::::R     R:::::R  E:::::E       EEEEEE  E:::::E       EEEEEE  \n"+                                                            
   " FF:::::::FF           RR:::::R     R:::::REE::::::EEEEEEEE:::::EEE::::::EEEEEEEE:::::E  \n"+                                                            
   " F::::::::FF           R::::::R     R:::::RE::::::::::::::::::::EE::::::::::::::::::::E  \n"+                                                            
   " F::::::::FF           R::::::R     R:::::RE::::::::::::::::::::EE::::::::::::::::::::E  \n"+                                                            
   " FFFFFFFFFFF           RRRRRRRR     RRRRRRREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE  \n"+                                                            
"RRRRRRRRRRRRRRRRR                  AAA               DDDDDDDDDDDDD      IIIIIIIIII      CCCCCCCCCCCCC               AAA               LLLLLLLLLLL             \n"+              
"R::::::::::::::::R                A:::A              D::::::::::::DDD   I::::::::I   CCC::::::::::::C              A:::A              L:::::::::L             \n"+             
"R::::::RRRRRR:::::R              A:::::A             D:::::::::::::::DD I::::::::I CC:::::::::::::::C             A:::::A             L:::::::::L             \n"+            
"RR:::::R     R:::::R            A:::::::A            DDD:::::DDDDD:::::DII::::::IIC:::::CCCCCCCC::::C            A:::::::A            LL:::::::LL             \n"+           
"R::::R     R:::::R           A:::::::::A             D:::::D    D:::::D I::::I C:::::C       CCCCCC           A:::::::::A             L:::::L                 \n"+  
"R::::R     R:::::R          A:::::A:::::A            D:::::D     D:::::DI::::IC:::::C                        A:::::A:::::A            L:::::L                 \n"+  
"R::::RRRRRR:::::R          A:::::A A:::::A           D:::::D     D:::::DI::::IC:::::C                       A:::::A A:::::A           L:::::L                 \n"+  
"R:::::::::::::RR          A:::::A   A:::::A          D:::::D     D:::::DI::::IC:::::C                      A:::::A   A:::::A          L:::::L                 \n"+  
"R::::RRRRRR:::::R        A:::::A     A:::::A         D:::::D     D:::::DI::::IC:::::C                     A:::::A     A:::::A         L:::::L                 \n"+  
"R::::R     R:::::R      A:::::AAAAAAAAA:::::A        D:::::D     D:::::DI::::IC:::::C                    A:::::AAAAAAAAA:::::A        L:::::L                 \n"+  
"R::::R     R:::::R     A:::::::::::::::::::::A       D:::::D     D:::::DI::::IC:::::C                   A:::::::::::::::::::::A       L:::::L                 \n"+  
"R::::R     R:::::R    A:::::AAAAAAAAAAAAA:::::A      D:::::D    D:::::D I::::I C:::::C       CCCCCC    A:::::AAAAAAAAAAAAA:::::A      L:::::L         LLLLLL  \n"+  
"RR:::::R     R:::::R   A:::::A             A:::::A   DDD:::::DDDDD:::::DII::::::IIC:::::CCCCCCCC::::C   A:::::A             A:::::A   LL:::::::LLLLLLLLL:::::L\n"+  
"R::::::R     R:::::R  A:::::A               A:::::A  D:::::::::::::::DD I::::::::I CC:::::::::::::::C  A:::::A               A:::::A  L::::::::::::::::::::::L\n"+  
"R::::::R     R:::::R A:::::A                 A:::::A D::::::::::::DDD   I::::::::I   CCC::::::::::::C A:::::A                 A:::::A L::::::::::::::::::::::L\n"+  
"RRRRRRRR     RRRRRRRAAAAAAA                   AAAAAAADDDDDDDDDDDDD      IIIIIIIIII      CCCCCCCCCCCCCAAAAAAA                   AAAAAAALLLLLLLLLLLLLLLLLLLLLLLL \n"
                                                                                                                                                        
                                                                                                                                                        
                                                                                                                                                        
                                                                                                                                                        
                                                                                                                                                        
                                                                                                                                                                                                                                      

    if(password.length > 10 && password.length < 30){
        console.log('that is a vaild password')
        console.log(lit)
    }
    else{
        console.log('that is not a vaild password provide a password with atleast 10 char')
    }
}

readline.question("Please Enter a password ", input => {
    checkPassword(input)
    readline.close()
  })


  