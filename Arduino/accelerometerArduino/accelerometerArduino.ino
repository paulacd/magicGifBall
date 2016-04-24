//connect 3.3v to AREF


const int ap1 = A0; 
const int ap2 = A1;
const int ap3 = A2;

int sv1 = 0;        
int ov1 = 0;    
int sv2 = 0;      
int ov2= 0;      
int sv3 = 0;       
int ov3= 0;      

void setup() {
  // initialize serial communications at 9600 bps:
  Serial.begin(9600);
 
}

void loop() {
  analogReference(EXTERNAL);    //connect 3.3v to AREF
  // read the analog in value:
  sv1 = analogRead(ap1);            
  // map it to the range of the analog out:
  ov1 = map(sv1, 0, 1023, 0, 255);  
  // change the analog out value:
  delay(2);                     
  //
  sv2 = analogRead(ap2);            
  
  ov2 = map(sv2, 0, 1023, 0, 255); 
 // 
  delay(2);                 
  //
  sv3 = analogRead(ap3);            
  
  ov3 = map(sv3, 0, 1023, 0, 255);  

  if (sv1 > 550 || sv1 < 450) {
    Serial.println(1);
  }
  else {
    Serial.println(0);
  }

    if (sv2 > 600 || sv2 < 400) {
    Serial.println(1);
  }
  else {
    Serial.println(0);
  }

    if (sv3 > 850 || sv3 < 450) {
    Serial.println(1);
  }
  else {
    Serial.println(0);
  }
  
  // print the results to the serial monitor:
  //Serial.print("Xsensor1 = " );                       
  Serial.print(sv1);      
//  Serial.print("\t output1 = ");      
//  Serial.println(ov1);   
// 
  Serial.print("," );                       
  Serial.print(sv2);      
//  Serial.print("\t output2 = ");      
//  Serial.println(ov2);   

  Serial.print("," );                       
  Serial.print(sv3);      
//  Serial.print("\t output3 = ");      
//  Serial.println(ov3);   

Serial.println(" , exit");

  delay(100);                     
  
}
