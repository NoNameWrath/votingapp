- get user data for voting page to show list

- post to db to update who voted for who

GET /api/users?house=godavari&gender=male

- query db, and get users based on query params

POST /api/vote

```json
{
  "house": "godavari",
  "userid": "", // user
  "captainSelected": ""
}
```
