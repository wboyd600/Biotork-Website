/* Dependencies */
    express = require("express"),
    router = express.Router();

/* 
  These method calls are responsible for routing requests to the correct request handler.
  Take note that it is possible for different controller functions to handle requests to the same route.
 */

router
    .route("/")
    .get(PR_controller.getNewOrOld, PR_controller.list)
    .post(PR_controller.create)
    .delete(PR_controller.delete);

    
  
// router
//     .route("/:_title")

router
  .route("/:_id")
  .get(PR_controller.read)
  .put(PR_controller.update);


module.exports = router;
