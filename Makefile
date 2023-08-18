post-link:
	curl --request POST \
  --url http://localhost:3000/link \
  --header 'Content-Type: application/json' \
  --data '{ \
	"originalLink": "https://google.com" \
	}'
get-link:
	curl --request GET \
		--url http://localhost:3000/abcdefghijk
