#ler o evento que ocorre em segundos
e = int(input())

#transformar para o formato de horas,minutos e segundos
h = e//3600
r = e%3600

m = r//60
s = r%60

#imprimir o resultado
print(str(h) + ":"+str(m)+":"+str(s))