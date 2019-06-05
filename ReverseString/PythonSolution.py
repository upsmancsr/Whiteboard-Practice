# Option 1: The [::-1] Slicing Trick
# This is the fastest way to reverse a string in Python
# Think of slicing as an extension of the square-brackets indexing syntax.
def reverse_string_1(string):
    return string[::-1]    

print(reverse_string_1('SANDWICH'))

# Option 2: reversed() and str.join()
def reverse_string_2(string):
    return ''.join(reversed(string))

print(reverse_string_2('SANDWICH'))


