# code may fail but dont want to stop execution
# wrap specific code, so when exception is raised, the test will be not fail in Try block but continue with Catch block. and send control to Catch block.

try:
    with open('file.log', 'r') as reader:
        reader.read()
except:
    print('a')            #if try block fail then the except will be used

try:
    with open('1_exceptions.py', 'r') as reader:
        reader.read()
except Exception as eiiii:
    print(eiiii)

finally:
    print('b')