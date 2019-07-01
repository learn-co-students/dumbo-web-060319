pump = Bread.create(name: "Pumpernickel", flavor: "Pumpernickelly", price: 10)
wheat = Bread.create(name: "Whole Wheat", flavor: "Cardboardy", price: 20)
pbread = Bread.create(name: "Peasant Bread", flavor: "Delicious", price: 15)
rye = Bread.create(name: "Rye", flavor: "of the Tiger", price: 5)

breads = Bakery.create(name: "Breads Bakery", address: "Union Square")
levain = Bakery.create(name: "Levain Bakery", address: "Upper West Side")
dough = Bakery.create(name: "Dough", address: "Bedford-Stuyvesant")
french = Bakery.create(name: "The French Workshop", address: "Bayside")
lucky = Bakery.create(name: "Luckybird Bakery", address: "Williamsburg")

Review.create(bread: rye, bakery: dough, content: "Rye is dry")
Review.create(bread: pump, bakery: levain, content: "Awesome")
Review.create(bread: pbread, bakery: dough, content: "Yummy, let's fight the middle class.")
