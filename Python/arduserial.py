Python 3.4.2 (default, Oct 19 2014, 13:31:11) 
[GCC 4.9.1] on linux
Type "copyright", "credits" or "license()" for more information.
>>> import serial
>>> ser=serial.Serial('/dev/ttyACM0',9600)
>>> while 1:
	s = ser.readline()
	print(s)
