from tkinter import *

t = 0
#stores the given number
def set_timer():
    global t
    t = t + int(e1.get())
    return t
#countdown works
def countdown():
    global t
    if t > 0:
        print(t)
        l1.config(text = t)
        t = t - 1
        l1.after(1000, countdown)
    elif t == 0:
        print("end")
        l1.config(text = "gooo")


root = Tk()
root.title('Countdown Timer')

root.geometry("600x500")
#styling
l1 = Label(root, font = "times 100")
l1.grid(row = 1,column = 2, padx=680, pady = 200)

times = StringVar()
e1 = Entry(root, textvariable = times, width= 30)
e1.grid(row = 3, column = 2, padx=680)

b1 = Button(root, text = "SET", width = 30, command = set_timer)
b1.grid(row = 4, column = 2, padx = 680)

b2 = Button(root, text = "START", width = 30, command = countdown)
b2.grid(row = 6, column = 2, padx = 680)


root.mainloop()