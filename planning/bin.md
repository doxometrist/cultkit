
# deployment steps
- [ ]  make profile
- [ ]  setup digital ocean card will need anyway for deployment
- [ ]  setup stripe account

# deployment
will need this for deployment
https://cloud.digitalocean.com/welcome?i=70e46a

# payment integration
stripe integration does not work - need business account,
the same for paypal
https://developer.paypal.com/reference/guidelines/policiesAndGuidelines/

infura as one
https://www.infura.io/


alchemy as the other
https://www.alchemy.com/


- [x] run without stripe

- [x] udpate deno
  - [x] need to update cargeo first 

manage permissinos with Stripe transactions
https://stripe.com/docs/api
https://www.sendowl.com/
https://www.fetchapp.com/

# project map
need to outline the big elements of the program so that it's good

admin writeables tuff -> landing apge, itnernals ==> readonly stuff and on every login
admin access management -> impacts all

add new resource section, approve resource, update resource

## core business logic
one function to check if someone can do something, uses Cultist and any of Action | resource

they all have a set of inputs and write to the KV store. Chronicle also triggers stuff, but that's an exception

AccessController.ts

ResourceController.ts

IdeneityController.ts

MeetingController.ts

ChronicleController.ts

AnnouncementManager.ts
triggers new accouncement when someone receives a new rank

## user pages
announcements page
visible members page
audio chat page - who is speaking?

saving  all through a tree structure
roots are users and cults
Permission NFT
generate QR code
tbf that needs a DM feature with images 