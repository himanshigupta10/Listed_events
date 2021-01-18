/*



const Event = require('../../models/event');
const User = require('../../models/user');
const bcrypt = require('bcryptjs');

module.exports = {
    events: () => {
      return Event.find()
        .then(events => {
          return events.map(event => {
            return {
              ...event._doc,
               _id: event.id,
            };
          });
        })
        .catch(err => {
          throw err;
        });
    },
    createEvent: args => {
      const event = new Event({
        title: args.eventInput.title,
        description: args.eventInput.description,
        price: +args.eventInput.price,
        date: new Date(args.eventInput.date),
        creator: '6004a2291295c35a10dadd07'

      });
      let createdEvent;
      return event.save().then(result => {
        createdEvent = { ...result._doc, _id: result._doc._id.toString()};

        return User.findById('6004a2291295c35a10dadd07');
      }).then(user => {
        if (!user) {
          throw new Error('user not found');
        }
        user.createdEvents.push(event);
        return user.save();

      })
        .then(result => {
          return createdEvent;

        })
        .catch(err => {
          console.log(err);
          throw err;
        });
    },
    createUser: args => {
      return User.findOne({ email: args.userInput.email }).then(user => {
        if (user) {
          throw new Error('user exist already');
        }
        return bcrypt.hash(args.userInput.password, 12);

      })
        .then(hashedPassword => {
          const user = new User({
            email: args.userInput.email,
            password: hashedPassword
          });
          return user.save();

        })
        .then(result => {
          return { ...result._doc, password: null, _id: result.id };
        })
        .catch(err => {
          throw err;

        });
    }

  };
  */

 const eventsResolver = require('./events');
 
 const rootResolver = {
   ...eventsResolver,
 };
 
 module.exports = rootResolver;
 