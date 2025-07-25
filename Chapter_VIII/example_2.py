
# Get all categories
all_categories = Category.objects.all()
print("\nAll Categories:")
for cat in all_categories:
    print(f"- {cat.name} (Slug: {cat.slug})")
# Logic & Imagination: You've asked the magical librarians to bring you all Category Scrolls.

# Get a specific product by its name
try:
    found_laptop = Product.objects.get(name='Quantum Laptop')
    print(f"\nFound product by name: {found_laptop.name}, Price: ${found_laptop.price}")
except Product.DoesNotExist:
    print("\nProduct 'Quantum Laptop' not found.")
# Logic & Imagination: You've asked for a specific Product Scroll by its name.

# Filter products by category
electronics_products = Product.objects.filter(category=electronics)
print(f"\nProducts in {electronics.name} category:")
for prod in electronics_products:
    print(f"- {prod.name}")
# Logic & Imagination: You've filtered your Product Scrolls to only show those
# magically threaded to the 'Electronics' category.