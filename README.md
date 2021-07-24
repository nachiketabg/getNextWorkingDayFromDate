# GetNextWorkingDayFromDate

NPM Library that get you the next working day from given date including Holidays(Holiday is optional)



### Dependencies
   Need moment npm library (^2.29.1)

### Usage:
```
   import getNWDate from "getNextWorkingDayFromDate"
   getNWDate(fromDateObject,noOfDays,arrayOfHolidays)
   
   OUTPUT: Date Object

 * fromDateObject: This is the from date. 
 * noOfDays: This is the no. of day after/before which you need to find your working date(Ex : +2 gets you 2 day after's working date/ -2 gets you 2 day before's working date)
 * arrayOfHolidays:  Can be left empty if you dont need to include holidays
                     Else Dates Array containing holidays should be given in the format of ['YYYY-MM-DD','YYYY-MM-DD',......]
```
### Example:
```
  getNWDate(moment('2021-07-22T11:10:58').format(), -2)

  OUTPUT: Moment<2021-07-22T11:10:58+05:30>


  getNWDate(moment('2021-07-23T11:10:58').format(), 2, ['2021-07-26','2021-07-27'])

  OUTUT:Moment<2021-07-29T11:10:58+05:30>
```

### Installing
```
  npm i get-next-working-day-from-date
```
## Author

Nachiketa BG

## Version History
```
  0.1
```
