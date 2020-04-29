import os
import re
import sys

text = sys.argv[1]
text=text.lower()
os.chdir("Subtitles")
dir=os.listdir()

def finder(dir):
    dialogues=[]
    for file in dir:
        with open(file,encoding="latin-1") as f:
            contents = f.read()
            contents2 = ''

            #converting the file into seperate lines
            lines = []
            for i in contents:
                if(i == "\n"):
                    lines.append(contents2)
                    contents2 = ''
                elif(i=="|"):
                    continue
                else:
                    contents2 += i.lower()
            
            #searching for text
            for i in lines:
                if re.search(text,i):
                    filename=file.split('.')[0]
                    dialogues.append(filename)
                    break
    return dialogues

dialogues = finder(dir)
for line in dialogues:
    print(line)