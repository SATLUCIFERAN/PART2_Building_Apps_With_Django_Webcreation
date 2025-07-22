
# Dockerfile for your first Python spell

# Step 1: Choose the foundational essence for our crucible.
# We start with a lightweight Python 3.12 image based on Debian Bullseye.
FROM python:3.12-slim-bullseye

# Step 2: Designate the primary working area within the container.
# All subsequent commands will execute relative to this directory.
WORKDIR /app

# Step 3: Copy your spell scroll into the crucible.
# The first '.' refers to the current directory on your host machine
# (C:\Users\ASUS\Desktop\Python_book4\Chapter_I).
# The second '.' refers to the WORKDIR inside the container (/app).
COPY . .

# Step 4: Define the default incantation to utter when the crucible awakens.
# This tells the container to run your Python script.
CMD ["python", "first_spell.py"]