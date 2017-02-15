# ffc-url-shortener
FFC URL shortener microservice

URL Shortener Microservice by Brailor
User stories:
I can pass a URL as a parameter and I will receive a shortened URL in the JSON response.
If I pass an invalid URL that doesn't follow the valid http://www.example.com format, the JSON response will contain an error instead.
When I visit that shortened URL, it will redirect me to my original link.
Example usage:
https://url-shortener-brailor.herokuapp.com/new/www.google.com
Example output:
https://url-shortener-brailor.herokuapp.com/3Yr Which will direct to the desired site.
