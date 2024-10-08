#oppgave 1
alder = 4
print("alder: ", + alder)
alder = 17
print("den nye alderenen er: ", + alder)

#oppgave 2
a = 4
b = 5
print(a + b)

c = int(input("skriv inn et tall: "))
d = int(input("skriv inn et tall: "))
print(c+d)

#oppgave 3
a = 3
b = 5

if a > b:
    print("a er større enn b")
else:
    print("a er ikke større enn b")
if a == b:
    print("tallene er like verdi")

#oppgave 4
hovedstat = input("skriv en hovedstat i skandinavia: ")

if hovedstat == "oslo":
    print("riktig!")
elif hovedstat == "stockholm":
    print("riktig!")
elif hovedstat == "københavn":
    print("riktig!")
else:
    print("feil!")

#oppgave 5
alder = int(input("hvor gammel er du?: "))

if alder < 9:
    print("billetten er gratis!")
elif alder < 17:
    print("billetten koster: 20 kr")
elif alder == 18 < 65:
    print("billetten koster: 40 kr")
elif alder > 65:
    print("billetten koster: 20 kr")

#oppgave 6
poeng = +1
poengsum = 0 + poeng
riktig = "riktig!"

spørsmål1 = input("Hva heter du? ")
if spørsmål1 == "emilie":
    print(riktig)
else:
    print("feil")

spørsmål2 = input("hvor gammel er du?: ")
if spørsmål2 == "16":
    print(riktig)
else:
    print("feil")

spørsmål3 = input("favoritt farge?: ")
if spørsmål3 == "rød":
    print(riktig)
else:
    print("feil")

print("poengsummen er: ", poengsum+poeng)