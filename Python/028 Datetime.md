## Datetime

- `A date in Python is not a data type of its own, but we can import a module named `**`datetime`** `to work with dates as date objects`









### Date Output

- `The` **`datetime`** `module has many methods to return information about the date object.`

- `The date contains year, month, day, hour, minute, second, and microsecond.`

  ```python
  import datetime #Import the datetime modul
  
  x = datetime.datetime.now()
  print(x) #display the current date:
  # 2021-06-21 22:45:25.014048
  ```







### Formatting date

- `The`**`datetime`** `object has a method for formatting date objects into readable strings.`

- `The method is called `**`strftime()`**, `and takes one parameter,` **`format`,** `to specify the format of the returned string`

  ```python
  import datetime
  
  d = datetime.datetime.now()
  
  print(d.strftime("%d"),d.strftime("%b"),d.strftime("%Y"))
  
  ```

  #### A reference of all the legal format codes

  | Directive | Description                                                 | Example                  | Try it                                                       |
  | :-------- | :---------------------------------------------------------- | :----------------------- | :----------------------------------------------------------- |
  | %a        | Weekday, short version                                      | Wed                      | [Try it »](https://www.w3schools.com/python/trypython.asp?filename=demo_datetime_strftime_a) |
  | %A        | Weekday, full version                                       | Wednesday                | [Try it »](https://www.w3schools.com/python/trypython.asp?filename=demo_datetime_strftime_a2) |
  | %w        | Weekday as a number 0-6, 0 is Sunday                        | 3                        | [Try it »](https://www.w3schools.com/python/trypython.asp?filename=demo_datetime_strftime_w) |
  | %d        | Day of month 01-31                                          | 31                       | [Try it »](https://www.w3schools.com/python/trypython.asp?filename=demo_datetime_strftime_d) |
  | %b        | Month name, short version                                   | Dec                      | [Try it »](https://www.w3schools.com/python/trypython.asp?filename=demo_datetime_strftime_b) |
  | %B        | Month name, full version                                    | December                 | [Try it »](https://www.w3schools.com/python/trypython.asp?filename=demo_datetime_strftime_b2) |
  | %m        | Month as a number 01-12                                     | 12                       | [Try it »](https://www.w3schools.com/python/trypython.asp?filename=demo_datetime_strftime_m) |
  | %y        | Year, short version, without century                        | 18                       | [Try it »](https://www.w3schools.com/python/trypython.asp?filename=demo_datetime_strftime_y) |
  | %Y        | Year, full version                                          | 2018                     | [Try it »](https://www.w3schools.com/python/trypython.asp?filename=demo_datetime_strftime_y2) |
  | %H        | Hour 00-23                                                  | 17                       | [Try it »](https://www.w3schools.com/python/trypython.asp?filename=demo_datetime_strftime_h2) |
  | %I        | Hour 00-12                                                  | 05                       | [Try it »](https://www.w3schools.com/python/trypython.asp?filename=demo_datetime_strftime_i2) |
  | %p        | AM/PM                                                       | PM                       | [Try it »](https://www.w3schools.com/python/trypython.asp?filename=demo_datetime_strftime_p) |
  | %M        | Minute 00-59                                                | 41                       | [Try it »](https://www.w3schools.com/python/trypython.asp?filename=demo_datetime_strftime_m2) |
  | %S        | Second 00-59                                                | 08                       | [Try it »](https://www.w3schools.com/python/trypython.asp?filename=demo_datetime_strftime_s2) |
  | %f        | Microsecond 000000-999999                                   | 548513                   | [Try it »](https://www.w3schools.com/python/trypython.asp?filename=demo_datetime_strftime_f) |
  | %z        | UTC offset                                                  | +0100                    |                                                              |
  | %Z        | Timezone                                                    | CST                      |                                                              |
  | %j        | Day number of year 001-366                                  | 365                      | [Try it »](https://www.w3schools.com/python/trypython.asp?filename=demo_datetime_strftime_j) |
  | %U        | Week number of year, Sunday as the first day of week, 00-53 | 52                       | [Try it »](https://www.w3schools.com/python/trypython.asp?filename=demo_datetime_strftime_u2) |
  | %W        | Week number of year, Monday as the first day of week, 00-53 | 52                       | [Try it »](https://www.w3schools.com/python/trypython.asp?filename=demo_datetime_strftime_w2) |
  | %c        | Local version of date and time                              | Mon Dec 31 17:41:00 2018 | [Try it »](https://www.w3schools.com/python/trypython.asp?filename=demo_datetime_strftime_c) |
  | %x        | Local version of date                                       | 12/31/18                 | [Try it »](https://www.w3schools.com/python/trypython.asp?filename=demo_datetime_strftime_x) |
  | %X        | Local version of time                                       | 17:41:00                 | [Try it »](https://www.w3schools.com/python/trypython.asp?filename=demo_datetime_strftime_x2) |
  | %%        | A % character                                               | %                        | [Try it »](https://www.w3schools.com/python/trypython.asp?filename=demo_datetime_strftime_percent) |
  | %G        | ISO 8601 year                                               | 2018                     | [Try it »](https://www.w3schools.com/python/trypython.asp?filename=demo_datetime_strftime_g) |
  | %u        | ISO 8601 weekday (1-7)                                      | 1                        | [Try it »](https://www.w3schools.com/python/trypython.asp?filename=demo_datetime_strftime_u) |
  | %V        | ISO 8601 weeknumber (01-53)                                 | 01                       | [Try it »](https://www.w3schools.com/python/trypython.asp?filename=demo_datetime_strftime_v) |







### Creating Date Objects

- `To create a date, we can use the `**`datetime()`** `class (constructor) of the datetime module.`

- `The` **`datetime()`** `class requires three parameters to create a date: year, month, day`

- `The` **`datetime()`** `class also takes parameters for time and timezone (hour, minute, second, microsecond, tzone), but they are optional, and has a default value of `0`, (None for timezone).`

  ```python
  import datetime
  
  x = datetime.datetime(2020, 5, 17)
  
  print(x)
  ```

  

