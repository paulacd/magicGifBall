// set up a constant for the tilt switchPin
const int switchPin = 6;

// variable to hold the value of the switchPin
int switchState = 0;

// variable to hold previous value of the switchpin
int prevSwitchState = 0;

// a variable to choose which reply from the crystal ball
int reply;

void setup() {
    // initialize serial communications at 9600 bps:
  Serial.begin(9600);

  // set up the switch pin as an input
  pinMode(switchPin, INPUT);

}

void loop() {
  // check the status of the switch
  switchState = digitalRead(switchPin);

  // compare the switchState to its previous state
  if (switchState != prevSwitchState) {
    // if the state has changed from HIGH to LOW
    // you know that the ball has been tilted from
    // one direction to the other
    if (switchState == LOW) {
      // send out a 1 to play a gif
      Serial.println(1);
      delay (5000);

      }
      else if (switchState == HIGH) {
        //send out a 0 to play static
        Serial.println(0);
    }
  }
  // save the current switch state as the last state
  prevSwitchState = switchState;
}

