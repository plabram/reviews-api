# reviews-api

Have you ever left a review (nice or nasty) for someone you rented from? This API relates two objects: owners and reviews.

A typical owner looks like this:
| Field | Type | Example |
| --- | --- | --- |
| `name` | String | "Anne Owner" |
| `bio` | String | "I love to travel and I have a pet dog called Alfie" |

...and here's a typical review:
| Field | Type | Example |
| --- | --- | --- |
| `stars` | Number | 5 |
| `title` | String | "Great place!" |
| `text` | String | "We stayed with Anne for a week in her spare room. We had a great time - thanks so much for showing us around." |
| `_owner_` | ObjectId | "64faf8c996c2307f77eba4ee" |

### Endpoints:
The base url is: http://localhost:4001/api
* GET all owners and POST new owners: /owners
* GET, PUT or DELETE owners by id: /owners/:id
* GET all reviews and POST new reviews: /reviews
* GET, PUT or DELETE reviews by id: /reviews/:id

Whenever a new `review` is created, it is automatically added to an array of [reviews] associated with the owner. When a `review`` is deleted, it is removed from this array.

Likewise, when an `owner` is deleted, all associated `[reviews]` are also deleted.