# API Documentation

## Table of Contents

1. [Questions](#questions)
2. [Question](#question)
3. [Post Question](#post-question)
4. [Delete Question](#delete-question)
4. [User](#user)

## Questions

Initial API call for the Index page.

### Example Request 

Let's keep the API calls in english. For url formatting we could translate them to Turkish on client with "as" tags within Links so that it would look like {hostname}/sorular.
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


## Question

Retrieves all details re Post (Question).

### Example Request 

```
GET https://{FIRESTORE_API_URL}/question
```

```json
{
  "method": "GET",
  "hostname": "FIRESTORE_API_URL_HERE",
  "path": `/question?id=${ID_HERE}`,
  "headers": {
  }
}
```
### Example Response

```json
{
    "post": {
        "id": "91748714",
        "title": "something",
        "body" : "Ya bunu nasıl yapıyoruz ya?",
        "answers": [
            {
                "1": { 
                    "id": "19702594",
                    "title": null,
                    "body": "Soyle yapican: ...",
                    "ownerUserId": "981249242",
                    "ownerName": "Baris Manco",
                    "score": 12,
                    "likeCount": 5,
                    "clapCount": 2,
                    "confusedCount": 1,
                    "eyvallahCount": 10
                } 
            },
            {
                "2": { 
                    "id": "80124082",
                    "title": null,
                    "body": "Boyle yapican: ...",
                    "ownerUserId": "097124242",
                    "ownerName": "Kurtalan Ekspres",
                    "score": 10,
                    "likeCount": 2,
                    "clapCount": 0,
                    "confusedCount": 1,
                    "eyvallahCount": 2
                } 
            }
        ],
        "ownerUserId": "981249242",
        "ownerName": "Osman Isler",
        "score": 34,
        "answerCount": 7,
        "tags": ["c"]
    }    
}

```

## Post Question

For persisting a question a user asks.

### Example Request 

```
POST https://{FIRESTORE_API_URL}/post-question
```

```json
{
  "method": "POST",
  "hostname": "FIRESTORE_API_URL_HERE",
  "path": "/post-question",
  "headers": {
    "Accept": "application/json",
    "Content-Type": "application/json;charset=UTF-8"
  },
  "data": {
    "userId": "018742049",
    "title": "something",
    "body" : "Ya bunu nasıl yapıyoruz ya?",
    "tags": ["c", "python"]
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
## Delete Question

For persisting a question a user asks.

### Example Request 

```
POST  https://{FIRESTORE_API_URL}/delete-question
DELETE https://{FIRESTORE_API_URL}/delete-question
```

```json
{
  "method": "POST",
  "hostname": "FIRESTORE_API_URL_HERE",
  "path": `/question?id=${ID_HERE}`,
  "headers": {
    "Accept": "application/json",
    "Content-Type": "application/json;charset=UTF-8"
  },
}
```
### Example Response

```
Code:200
```

## User

Retrieves all details re User.

### Example Request 

```
GET https://{FIRESTORE_API_URL}/user
```

```json
{
  "method": "GET",
  "hostname": "FIRESTORE_API_URL_HERE",
  "path": `/user?id=${ID_HERE}`,
  "headers": {
  }
}
```
### Example Response

```json
{
    "user": {
        "id": "71942892",
        "reputation": 42,
        "displayName" : "Osman İşmen",
        "description": "C ile oyun motoru yazmayi seviyorum",
        "photoUrl": "IMAGE_URL",
        "questions": [
            {"id": "91748714", "title":"Struct ile ilgili bir soru"}
            {"id": "91748714", "title":"Segmentation sorunu ile karşılaşıyorum."}
            {"id": "91748714", "title":"Loop calışmıyor"}
        ],
        "upVoted": [
            {"id": "91748714", "title":"Mouse konum hesaplama"}
            {"id": "91748714", "title":"p5js Sound Ekleme"}
            {"id": "91748714", "title":"WebGL sonsuz loop"}
        ]
    }
}


```
