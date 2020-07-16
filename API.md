# API Documentation

## Questions

### Example Request 
```
GET https://{FIRESTORE_API_URL}/questions
```

```json
{
  "method": "GET",
  "hostname": "FIRESTORE_API_URL_HERE",
  "path": "/questions",
  "headers": {
  }
}
```
### Example Response

Initially, questions can be retrieved based on their scores (upvotes - downvotes). We can think of better ranking down the line. @Cagri let me know if you have any ideas on how to id the posts, we can do a simple uuid v4 for now.

```json
{
    "posts": {
        "1": {
            "id": "91748714",
            ...
        },
        "2": {
            "id": "79402812",
            ...
        }
    }
}

```