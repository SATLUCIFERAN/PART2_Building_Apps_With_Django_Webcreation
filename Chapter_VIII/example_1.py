

# Create a Category
electronics = Category.objects.create(name='Electronics', slug='electronics')
print(f"Created category: {electronics.name}")
# Logic & Imagination: You've just conjured a new Category Scroll for 'Electronics'
# and stored it in the vault.

# Create a Product
laptop = Product.objects.create(
    category=electronics,
    name='Quantum Laptop',
    slug='quantum-laptop',
    description='A powerful laptop for advanced web alchemy.',
    price=1500.00,
    available=True
)
print(f"Created product: {laptop.name}")
# Logic & Imagination: You've conjured a new Product Scroll for 'Quantum Laptop',
# magically threaded it to the 'Electronics' category, and stored it.