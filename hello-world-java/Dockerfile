# Use a base image with Java pre-installed
FROM openjdk:17-jdk-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the jar file into the container
COPY target/myHelloWorld-1.0-SNAPSHOT.jar .

# Run the Java application when the container starts
CMD ["java", "-jar", "myHelloWorld-1.0-SNAPSHOT.jar"]	
