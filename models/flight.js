import mongoose from "mongoose"

const Schema = mongoose.Schema

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ['American', 'Southwest', 'United']
  },
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    default: function () {
      return 'DEN'
    }
  },
  flightNo: {
    type: Number,
    min: 10,
    max: 9999,
  },
  departs: {
    type: Date,
    default: function () {
      return new Date(+new Date() + 7*24*60*60*1000)
    }
  }
},
{
  timestamps: true,
}
)

const Flight = mongoose.model("Flight", flightSchema)

export {
  Flight
}