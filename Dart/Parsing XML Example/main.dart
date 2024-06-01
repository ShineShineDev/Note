import 'package:xml/xml.dart' as xml; 

void main(){ 
    
     // final file = new File('post.xml');
     // final postxml = xml.parse(file.readAsStringSync());  
    
    //  XML string 
   String postxml = '''<?xml version = "1.0"?> 
<post>
     <title>Post One</title>
     <desc>Description</desc>
     <like>32</like>
  </post>
   '''; 
  
    //string to XML document
    final document = xml.parse(postxml);
    print(document.xmlDeclaration.title);
}