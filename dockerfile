# Use an official Nginx image as the base image
FROM nginx:alpine

# Set the working directory inside the container
WORKDIR /usr/share/nginx/html

# Copy your HTML and CSS files to the working directory
COPY index.html .
COPY style.css .
COPY finally.html .
COPY nextpage.html .
# Expose the default Nginx port
EXPOSE 80

# Command to start Nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]
