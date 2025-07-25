
# Delete the laptop product
laptop_name = laptop.name # Store name before deleting
laptop.delete()
print(f"\nDeleted product: {laptop_name}")

# Verify deletion (this should now raise Product.DoesNotExist)
try:
    Product.objects.get(name='Quantum Laptop')
except Product.DoesNotExist:
    print("Verification: 'Quantum Laptop' is indeed banished from the vault.")
# Logic & Imagination: You've cast a banishing spell on the 'Quantum Laptop' scroll,
# removing it permanently from the vault.
