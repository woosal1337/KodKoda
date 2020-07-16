# API Documentation

## Questions

Initial API call for the Index page.

### Example Request 

Let's keep the API calls in english. For url formatting we could translate them to Turkish on client with "as" tags within Links so that it would look {HOSTNAME}/sorular.
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

Filter questions from the posts model based on the postTypeId. Initially, questions can be retrieved based on their scores (upvotes - downvotes). We can think of a better ranking down the line. @Cagri let me know if you have any ideas on how to id the posts, we can do a simple uuid v4 for now.

```json
{
    "posts": {
        "1": {
            "id": "91748714",
            "title": "something",
            "ownerUserId": "981249242",
            "ownerName": "Osman Isler",
            "score": 34,
            "answerCount": 7,
            "tags": ["c"]
        },
        "2": {
            "id": "79402812",
            "title": "something else",
            "ownerUserId": "018742049",
            "ownerName": "Mujde Ar",
            "score": 28,
            "answerCount": 9,
            "tags": ["c", "python"]
        },
        ...
    }
}

```

## Questions