## Wrapper Class

- `Wrapper classes provide a way to use primitive data types (`int`, `boolean`, etc..) as objects.`

  | Primitive Data Type | Wrapper Class |
  | :------------------ | :------------ |
  | byte                | Byte          |
  | short               | Short         |
  | int                 | Integer       |
  | long                | Long          |
  | float               | Float         |
  | double              | Double        |
  | boolean             | Boolean       |
  | char                | Character     |



### Creating Wrapper Objects

- `To create a wrapper object, use the wrapper class instead of the primitive type. To get the value, you can just print the object`

  ```java
  public class Main {
    public static void main(String[] args) {
        
      Integer myInt = 5;
      Double myDouble = 5.99;
      Character myChar = 'A';
      System.out.println(myInt.intValue());
      System.out.println(myDouble.doubleValue());
      System.out.println(myChar.charValue());
        
      Integer myInt1 = 100;
      //Integer to String
      String myString = myInt1.toString();
      
      //String to Ineger           
      int myint1 = Integer.valueOf('123');      
      int myint = Integer.parseInt('123'); //(Integer.parseInt နဲ့ ပြောင်းချင် ရင် comma တွေ _ တွေပါလို့မရ)
      
      
     	//String to double
      double d1 = Double.valueOf('123.323');      
        
      //Flato to String
      Float d2 = 123.34;
      String s1 = d2.toString();
      
      //Shot to String
      Shot ss1 = 8993;
      String s2 = String.valueOf(ss1) 
        
      //Hezadeciam to Interger 
      int myint3 = Integer.decode('0x001');
        
  	//Octa to Interger 
      int myint4 = Integer.decode('011');      
           
        
    }
  }    
  ```



### Byte Wrapper Object Methods and Properties

```java
jshell > Byte.
BYTES              MAX_VALUE          MIN_VALUE          
SIZE               TYPE               class              
compare(           compareUnsigned(   decode(            
hashCode(          parseByte(         toString(          
toUnsignedInt(     toUnsignedLong(    valueOf(     
```



### Short Wrapper Object Methods and Properties

```java
jshell> Short.
BYTES              MAX_VALUE          MIN_VALUE          
SIZE               TYPE               class              
compare(           compareUnsigned(   decode(            
hashCode(          parseShort(        reverseBytes(      
toString(          toUnsignedInt(     toUnsignedLong(    
valueOf(           

```



### Integer Wrapper Objects Methods and Properties

```java
jshell >Integer.
BYTES                    MAX_VALUE                MIN_VALUE                
SIZE                     TYPE                     bitCount(                
class                    compare(                 compareUnsigned(         
decode(                  divideUnsigned(          getInteger(              
hashCode(                highestOneBit(           lowestOneBit(            
max(                     min(                     numberOfLeadingZeros(    
numberOfTrailingZeros(   parseInt(                parseUnsignedInt(        
remainderUnsigned(       reverse(                 reverseBytes(            
rotateLeft(              rotateRight(             signum(                  
sum(                     toBinaryString(          toHexString(             
toOctalString(           toString(                toUnsignedLong(          
toUnsignedString(        valueOf(             
```



### String Wrapper Objects Methods and Properties

```java
jshell > String.
CASE_INSENSITIVE_ORDER   class                    
copyValueOf(             format(                  
join(                    valueOf( 
```

