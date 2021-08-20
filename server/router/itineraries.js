const router = require("express").Router();
const Controller = require("../controllers/controllerIntineraries");

router.get("/itineraries", Controller.allItineraries);
router.post("/itineraries", Controller.postItineraries);
router.put("/itineraries/:id", Controller.updateItineraries);
router.delete("/itineraries/:id", Controller.deleteItinerary);

module.exports = router;
