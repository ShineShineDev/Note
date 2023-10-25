# Using @property decorators to achieve getters and setters behaviour
class Account:

    def __init__(self, name, phone, password):
        self.name = name
        self.phone = phone
        self.__password = password

    # using property decorator
    # a getter function
    @property
    def password(self):
        print("getter method called")
        print(self.__password)

    @password.setter
    def password(self, newPass):
        print("setter method called")
        self.__password = newPass


acc = Account('Shine Shine', 23, '123')
acc.password
acc.password = '321'
acc.password