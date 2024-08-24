/**================================================================================================
 *!                                       Date And Time
 *================================================================================================**/

 //*  JavaScript provides the Date object to handle dates and times. Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).

//Todo: Here's a detailed explanation 

//?  Using the Current Date and Time

// const now = new Date();
// console.log(now); // Outputs the current date and time

//? Using a Specific Date and Time

// const specificDate = new Date('2024-08-24T10:30:00');
// console.log(specificDate); // Outputs the specific date and time

//? Using Date Components (Year, Month, Day, etc.)

// const dateComponents = new Date(2024, 8, 24, 20, 45, 47, 644);
// console.log(dateComponents); // Outputs: Sun Aug 24 2024 10:30:00

/**-----------------------------------------------------------------------------------------------
 * Todo:                                          Note
 **  Months are zero-indexed (January is 0, February is 1, etc.)
 *-------------------------------------------------------------------------------------------------**/

 /**================================================================================================
  *!                                        Getting Date and Time Components
  *
  **  Year, Month, Day, Hours, Minutes, Seconds, Milliseconds:
  *================================================================================================**/

  // const date = new Date();
  // console.log(date.getFullYear());   // Outputs: 2024
  // console.log(date.getMonth());     // Outputs: 7 (August, because months are zero-indexed)
  // console.log(date.getDate());       // Outputs: 24
  // console.log(date.getHours());      // Outputs: current hour
  // console.log(date.getMinutes());    // Outputs: current minute
  // console.log(date.getSeconds());    // Outputs: current second
  // console.log(date.getMilliseconds());// Outputs: current millisecond

/**================================================================================================
 * todo                                        Day of the Week
 *     
*================================================================================================**/

  // const date = new Date();
  // const dayOfWeek = date.getDay();
  // console.log(dayOfWeek); 

/**================================================================================================
 *!                                       Setting Date and Time Components
 *
 *  Set Year, Month, Day, etc
 *================================================================================================**/

// const date = new Date();
// date.setFullYear(2025);
// date.setMonth(0); // January
// date.setDate(1);
// date.setHours(12);
// date.setMinutes(0);
// date.setSeconds(0);
// console.log(date); // Outputs: Wed Jan 01 2025 12:00:00

/**================================================================================================
 *!                                         Date Formatting
 *
 * Using toLocaleDateString(), toLocaleTimeString(), toLocaleString()
 *================================================================================================**/

// const date = new Date();
// console.log(date.toLocaleDateString()); // Outputs date in local format
// console.log(date.toLocaleTimeString()); // Outputs time in local format
// console.log(date.toLocaleString());     // Outputs date and time in local format

/**================================================================================================
 *!                                        Custom Formatting
 *================================================================================================**/

// const date = new Date();
// const formattedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
// console.log(formattedDate); // Outputs: DD/MM/YYYY format

/**================================================================================================
 *!                                        Working with Time Zones
 *
 * Getting UTC Time
 *================================================================================================**/

// const date = new Date();
// console.log(date.getUTCFullYear());  // Outputs: UTC year
// console.log(date.getUTCMonth());     // Outputs: UTC month
// console.log(date.getUTCDate());      // Outputs: UTC day
// console.log(date.getUTCHours());     // Outputs: UTC hour
// console.log(date.getUTCMinutes());


// ? Getting Time Zone Offset

// const date = new Date();
// const timezoneOffset = date.getTimezoneOffset();
// console.log(timezoneOffset); // Outputs the time difference in minutes from UTC

// ? Date Calculations

// const date = new Date();
// date.setDate(date.getDate() + 5); // Adds 5 days
// console.log(date); // Outputs date 5 days from now

