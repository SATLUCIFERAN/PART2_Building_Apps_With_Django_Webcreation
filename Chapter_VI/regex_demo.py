
# regex_demo.py

import re

print("--- Using re.search() ---")
text1 = "My phone number is 123-456-7890. Call me!"
# Pattern to find a phone number (XXX-XXX-XXXX)
# The r prefix makes it a "raw string", which is good practice for regex
# as it prevents backslashes from being interpreted as Python escape sequences.
pattern1 = r"\d{3}-\d{3}-\d{4}"

match1 = re.search(pattern1, text1)

if match1:
    print(f"Full match found by search: {match1.group(0)}")
    # Logic & Imagination: The search spell found the first phone number.
    # match1.group(0) retrieves the entire sequence stored in the primary memory crystal.
else:
    print("No phone number found.")

##################################################################################################### 

print("\n--- Using re.match() ---")
text2 = "Hello world!"
pattern2 = r"Hello"
pattern3 = r"world" 

match2 = re.match(pattern2, text2)
match3 = re.match(pattern3, text2)

if match2:
    print(f"Match found at start by match: {match2.group(0)}")   
else:
    print("No match found at start for 'Hello'.")
if match3:
    print(f"Match found at start by match: {match3.group(0)}")
else:
    print("No match found at start for 'world'. (Expected, as 'world' is not at the beginning)")

    
#########################################################################

print("\n--- Using re.findall() ---")
text3 = "Dates: 2023-01-15, 2024-03-22, and 2025-11-05."
# Pattern to find all YYYY-MM-DD dates
pattern4 = r"\d{4}-\d{2}-\d{2}"

all_dates = re.findall(pattern4, text3)
print(f"All dates found: {all_dates}")
# Logic & Imagination: The findall spell swept the entire scroll, collecting every date into a list of memory crystals.


##########################################################################

print("\n--- Using re.sub() ---")
text4 = "My old email is user@old.com. Please use new@new.com instead."
# Pattern to find an email address
pattern5 = r"\w+@\w+\.\w+"
replacement_email = "new_contact@updated.org"

# Replace the first email with a new one
updated_text = re.sub(pattern5, replacement_email, text4, 1) # The '1' means replace only the first occurrence
print(f"Text after replacing first email: {updated_text}")
# Logic & Imagination: The transformation spell found the first email pattern and transmuted it into the new contact address.


# Replace all occurrences
text5 = "Email 1: a@b.com, Email 2: c@d.net"
updated_text_all = re.sub(pattern5, "REDACTED", text5)
print(f"Text after replacing all emails: {updated_text_all}")
# Logic & Imagination: The transformation spell found ALL email patterns and transmuted them into "REDACTED".

################################################################################################

print("\n--- Using Captured Groups ---")
text6 = "Order #ABC-1234-XYZ, Item: Magic Wand, Price: $50.00"
pattern6 = r"Order #([A-Z]{3})-(\d{4})-([A-Z]{3})"
match6 = re.search(pattern6, text6)

if match6:
    print(f"Full Order ID match: {match6.group(0)}")
    print(f"Order Prefix (Group 1): {match6.group(1)}")
    print(f"Order Number (Group 2): {match6.group(2)}")
    print(f"Order Suffix (Group 3): {match6.group(3)}")
    print(f"All groups as tuple: {match6.groups()}")
    
else:
    print("No order ID found.")