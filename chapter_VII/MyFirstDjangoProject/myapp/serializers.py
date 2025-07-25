
############################## Chapter XVI topic 16.1 Step-by-Step: Installing and Configuring DRF ########################


from rest_framework import serializers
from .models import Category, Product 


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category 
        fields = ['id', 'name', 'slug'] 
       


class ProductSerializer(serializers.ModelSerializer):
    
    category_name = serializers.CharField(source='category.name', read_only=True)
    class Meta:
        model = Product 
        fields = [
            'id', 'name', 'slug', 'category', 'category_name', 
            'image', 'description', 'price', 'available', 'created', 'updated'
        ]    
        read_only_fields = ['created', 'updated']