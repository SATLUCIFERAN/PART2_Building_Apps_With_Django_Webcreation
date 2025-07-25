
# Example in a Django View (conceptual)

from django.shortcuts import render

def my_view(request):
    
    request.session['favorite_color'] = 'blue'    
    fav_color = request.session.get('favorite_color', 'unknown')   
    
    if 'item_in_cart' in request.session:        
        pass   
    if 'favorite_color' in request.session:
        del request.session['favorite_color']       

    request.session.flush() 
    # request.session.set_expiry(300)
    return render(request, 'my_template.html', {'fav_color': fav_color})




