# reviews-api

Have you ever left a review (nice or nasty) for someone you rented from? This API relates two objects: owners and reviews.

A typical owner looks like this:
| Field | Type | Example | Required |
| --- | --- | --- | --- |
| `name` | String | "Anne Owner" | True |
| `bio` | String | "I love to travel and I have a pet dog called Alfie" | False |

...and here's a typical review:
| Field | Type | Example | Required |
| --- | --- | --- | --- |
| `stars` | Number | 5 | True |
| `title` | String | "Great place!" | True |
| `text` | String | "We stayed with Anne for a week in her spare room. We had a great time - thanks so much for showing us around." | False |

### Endpoints:
The base url is: http://localhost:4001/api
* GET all Owners and POST new Owners: /owners
* GET, PUT or DELETE Owners by id: /owners/:id
* GET all Reviews: /reviews
* GET reviews by id: /reviews/:id
* Add (PUT) a new Review to Owner: /:id/reviews
* DELETE a Review from Owner: /:id/reviews/:reviewid

### Control of Orphan reviews:
When a `Review` is deleted, it is removed from the Reviews table as well as the `Owner`'s array.
Likewise, when an `Owner` is deleted, all associated `[Reviews]` are also deleted.