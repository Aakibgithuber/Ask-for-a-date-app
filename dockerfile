# Use an official Nginx image as the base image
FROM nginx:alpine

# Set the working directory inside the container
WORKDIR /usr/share/nginx/html
RUN rm -rf /usr/share/nginx/html/*


# Copy your HTML and CSS files to the working directory
COPY finally.html .
COPY style.css .
COPY yes.html .
COPY nextpage.html . 

RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html

# Expose the default Nginx port
EXPOSE 80

# Command to start Nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]
