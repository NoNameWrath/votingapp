- get user data for voting page to show list

- post to db to update who voted for who

GET /api/users?housename=godavari&gender=male

- query db, and get users

POST /api/vote

```json
{
  "house": "godavari",
  "userid": "", // user
  "captainSelected": ""
}
```
