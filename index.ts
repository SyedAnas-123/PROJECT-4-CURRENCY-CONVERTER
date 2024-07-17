#! /usr/bin/env node 

//use dynamic approach 1 object banaen gen uski porperties baane gen , phr square notation ki helpse objectb ki properties ko get krengen 
import inquirer from "inquirer"
//1 make object jsme sara dumy data hoga currency ka
 const currency  : any = {
    USD : 1 , //BASE currency
    EUR : 0.91,
    GBP : 0.76 ,
    INR : 74.57,
    PKR : 280 ,
 } ; 

 //TAKE USER INPUT WHIHC CURRENCY HE WANTS TO CONVERT OR HIW MUCH AKOUNT 
 let useranswer = await inquirer.prompt([
    //WHICH CURRENCY USER HAVE TO WHIHC HE WANTS TO CONVERT 
    {
        name : "from",
        message: "ENTER FROM CURRENCY",
        type :"list",
        choices: ["USD" , "EUR" , "GBP" , "INR" ,"PKR" ]
    },
    // TO WHICh CURRENCY USER WANT TO CONVERT THIS ASK HIM THAT
    {
        name : "to",
        message: "ENTER TO CURRENCY",
        type :"list",
        choices: ["USD" , "EUR" , "GBP" , "INR" ,"PKR" ]
    },
    //how much amount does it have
    {
        name: "amount",
        message : "ENTER YOUR AMOUNT",
        type: "number",
    }
 ])

 //use dynamic approach not dot notation for accesing object properties
 let fromAccount = currency[useranswer.from]  //jo user from me data dega , jo user answer me hai wo from accoun me sAVE HOJAEEAGA
 let toAccount = currency[useranswer.to]      //jo user TO me data dega  ,jo user answer me hai wo TO accoun me sAVE HOJAEEAGA
 let amount = useranswer.amount               //jo user amount me data dega  ,jo user answer me hai wo amount  me sAVE HOJAEEAGA

 //EURO KO PAKISTAN RUPI M EKRWANA H CONVERT SO 1 EURO KO BASE CURRENCY ME KRWANAA HOGA COVEERT THEN PKR ME HOGI
//covert 1 in base currency 
let baseCurrency =amount/fromAccount
                //5000/200 = exchange rate 
                //now converted currency
let ConvertedAmount = baseCurrency * toAccount           

console.log(Math.round(ConvertedAmount)); // popin tke bad values nh atti round off kr ke de dete hen


 
 

