import os
import os.path 
import random
import sys
import serial
import webbrowser
import subprocess

gifs = list() #populate gifs 

gif_path = "/home/pi/magicGifBall/gifs"


static_gif_path = '/home/pi/magicGifBall/static.gif'

for subdir, dirs, files in os.walk(gif_path):
	for f in files:
		filepath = os.path.join(gif_path, f)
		gifs.append(filepath)


print gifs
ser=serial.Serial('/dev/ttyACM0',9600)

while True:
	try:
		s = int(ser.readline())
	except ValueError:
		raise Exception('Serial input is not an integer. Hello, Ross wrote this.')
		# pass

	print(s)

	# s = raw_input('display gif? > ')



	if s == 1:
                try:
                        subprocess.call('killall gpicview', shell=1)
                except:
                        print 'no browser open yet'
		print "YOU WANT A GIF!"
		#randomly choose a gif
		chosen_gif = random.choice(gifs)
		#play gif
                webbrowser.open('file://'+chosen_gif, new=2)
		#webbrowser.open_new_tab('file://'+chosen_gif)

	elif s == 0:
                try:
                        subprocess.call('killall gpicview', shell=1)
                except:
                        print 'no browser open yet'

		print "STATIC!!!"

		webbrowser.open_new_tab('file://'+static_gif_path)

